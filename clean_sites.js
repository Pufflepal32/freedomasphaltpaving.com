#!/usr/bin/env node
/**
 * Clean scraped websites:
 * 1. Download all external images locally
 * 2. Remove all tracking scripts (Google Analytics, Facebook Pixel, etc.)
 * 3. Convert external links to local links
 */

const fs = require('fs');
const path = require('path');
const https = require('https');
const http = require('http');
const crypto = require('crypto');

const FREEDOM_DIR = 'reference/freedom/freedomasphaltpaving.com';
const TURNER_DIR = 'reference/turner/turnerasphalt.com';
const IMAGES_DIR = 'reference/images';

// Ensure images directory exists
if (!fs.existsSync(IMAGES_DIR)) {
    fs.mkdirSync(IMAGES_DIR, { recursive: true });
}

function downloadImage(url) {
    return new Promise((resolve) => {
        try {
            const urlHash = crypto.createHash('md5').update(url).digest('hex').slice(0, 12);
            let ext = path.extname(new URL(url).pathname) || '.jpg';
            if (!['.jpg', '.jpeg', '.png', '.gif', '.webp', '.svg', '.ico'].includes(ext.toLowerCase())) {
                ext = '.jpg';
            }

            const localFilename = `${urlHash}${ext}`;
            const localPath = path.join(IMAGES_DIR, localFilename);

            if (fs.existsSync(localPath)) {
                resolve(`../images/${localFilename}`);
                return;
            }

            console.log(`  Downloading: ${url.slice(0, 60)}...`);

            const protocol = url.startsWith('https') ? https : http;
            const request = protocol.get(url, {
                headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36' },
                timeout: 30000
            }, (response) => {
                if (response.statusCode === 200) {
                    const chunks = [];
                    response.on('data', (chunk) => chunks.push(chunk));
                    response.on('end', () => {
                        fs.writeFileSync(localPath, Buffer.concat(chunks));
                        console.log(`    Saved: ${localFilename}`);
                        resolve(`../images/${localFilename}`);
                    });
                } else if (response.statusCode >= 300 && response.statusCode < 400 && response.headers.location) {
                    // Follow redirect
                    downloadImage(response.headers.location).then(resolve);
                } else {
                    console.log(`    Failed: ${response.statusCode}`);
                    resolve(null);
                }
            });

            request.on('error', (e) => {
                console.log(`    Error: ${e.message}`);
                resolve(null);
            });

            request.on('timeout', () => {
                request.destroy();
                resolve(null);
            });

        } catch (e) {
            console.log(`    Error: ${e.message}`);
            resolve(null);
        }
    });
}

function cleanTrackingScripts(content) {
    // Remove Google Analytics/Tag Manager scripts
    const patternsToRemove = [
        // Google Analytics script tags
        /<script[^>]*googletagmanager\.com[^>]*>[\s\S]*?<\/script>/gi,
        /<script[^>]*gtag[^>]*>[\s\S]*?<\/script>/gi,
        /<script[^>]*>[\s\S]*?gtag\s*\([^)]*\)[\s\S]*?<\/script>/gi,
        /<script[^>]*>[\s\S]*?dataLayer\.push[\s\S]*?<\/script>/gi,

        // Facebook Pixel
        /<script[^>]*>[\s\S]*?fbq\s*\([^)]*\)[\s\S]*?<\/script>/gi,
        /<script[^>]*facebook\.net[^>]*>[\s\S]*?<\/script>/gi,
        /<noscript[^>]*>[\s\S]*?facebook[\s\S]*?<\/noscript>/gi,

        // Cookie tracking
        /<script[^>]*>[\s\S]*?x-visitor-id[\s\S]*?<\/script>/gi,
        /<script[^>]*>[\s\S]*?onAllowCookieTracking[\s\S]*?<\/script>/gi,
        /<script[^>]*>[\s\S]*?cookie[\s\S]*?tracking[\s\S]*?<\/script>/gi,

        // External scripts from tracking services
        /<script[^>]*async[^>]*src="[^"]*googletagmanager[^"]*"[^>]*><\/script>/gi,
        /<script\s+async\s+src="[^"]*googletagmanager[^"]*"[^>]*><\/script>/gi,

        // GoDaddy/WSIMG tracking and scripts
        /<script[^>]*signals[^>]*>[\s\S]*?<\/script>/gi,
        /<script[^>]*scc-c2[^>]*>[\s\S]*?<\/script>/gi,
        /<script[^>]*wsimg\.com[^>]*>[\s\S]*?<\/script>/gi,
        /<script[^>]*src="[^"]*wsimg\.com[^"]*"[^>]*><\/script>/gi,

        // Tracking pixels
        /<img[^>]*pixel[^>]*>/gi,
        /<img[^>]*tracking[^>]*>/gi,
    ];

    // Inline tracking patterns
    const inlinePatterns = [
        /"use strict";window\.gtag\s*=[\s\S]*?;/g,
        /"use strict";window\._gaID\s*=[\s\S]*?;/g,
        /"use strict";Core\.utils\.onAllowCookieTracking[\s\S]*?;/g,
    ];

    for (const pattern of patternsToRemove) {
        content = content.replace(pattern, '');
    }

    for (const pattern of inlinePatterns) {
        content = content.replace(pattern, '');
    }

    // Remove empty script tags
    content = content.replace(/<script[^>]*>\s*<\/script>/gi, '');

    return content;
}

function makeLinksLocal(content, siteDomain) {
    // Replace absolute URLs to the same domain with relative URLs
    const domainPattern = new RegExp(
        `(href|src)=["']https?://${siteDomain.replace(/\./g, '\\.')}/([^"']*)["']`,
        'gi'
    );
    content = content.replace(domainPattern, '$1="$2"');

    // Fix protocol-relative URLs
    content = content.replace(/(href|src)=["']\/\/([^"']*)["']/gi, '$1="$2"');

    return content;
}

async function processHtmlFile(filepath, siteDomain, downloadImages = true) {
    console.log(`\nProcessing: ${filepath}`);

    let content = fs.readFileSync(filepath, 'utf8');
    const originalSize = content.length;

    // 1. Remove tracking scripts
    content = cleanTrackingScripts(content);

    // 2. Make links local
    content = makeLinksLocal(content, siteDomain);

    // 3. Download and replace external images
    if (downloadImages) {
        // Find all image URLs from wsimg.com
        const imgPatterns = [
            /src=["']([^"']+)["']/gi,
            /url\(["']?([^"')]+)["']?\)/gi,
            /content=["']([^"']+)["']/gi,
        ];

        const urlsToDownload = new Set();

        for (const pattern of imgPatterns) {
            let match;
            while ((match = pattern.exec(content)) !== null) {
                const url = match[1];
                if (url.startsWith('http') && (url.includes('wsimg.com') || url.includes('img1'))) {
                    if (url.includes('.jpg') || url.includes('.jpeg') || url.includes('.png') ||
                        url.includes('.gif') || url.includes('.webp') || url.includes('.svg') ||
                        url.includes('image') || url.includes('blob') || url.includes('isteam')) {
                        urlsToDownload.add(url);
                    }
                }
            }
        }

        // Download images sequentially
        for (const url of urlsToDownload) {
            const localPath = await downloadImage(url);
            if (localPath) {
                content = content.split(url).join(localPath);
            }
        }
    }

    // 4. Clean up multiple newlines
    content = content.replace(/\n\s*\n\s*\n/g, '\n\n');

    const newSize = content.length;
    console.log(`  Size: ${originalSize.toLocaleString()} -> ${newSize.toLocaleString()} bytes (${(originalSize - newSize).toLocaleString()} removed)`);

    // Write back
    fs.writeFileSync(filepath, content, 'utf8');

    return originalSize - newSize;
}

async function findHtmlFiles(dir) {
    const files = [];
    if (!fs.existsSync(dir)) return files;

    const entries = fs.readdirSync(dir, { withFileTypes: true });
    for (const entry of entries) {
        const fullPath = path.join(dir, entry.name);
        if (entry.isDirectory()) {
            files.push(...await findHtmlFiles(fullPath));
        } else if (entry.name.endsWith('.html')) {
            files.push(fullPath);
        }
    }
    return files;
}

async function main() {
    let totalRemoved = 0;

    // Process Freedom site
    if (fs.existsSync(FREEDOM_DIR)) {
        console.log('\n' + '='.repeat(60));
        console.log('Processing Freedom Asphalt Paving site');
        console.log('='.repeat(60));

        const htmlFiles = await findHtmlFiles(FREEDOM_DIR);
        for (const htmlFile of htmlFiles) {
            const removed = await processHtmlFile(htmlFile, 'freedomasphaltpaving.com', true);
            totalRemoved += removed;
        }
    }

    // Process Turner site
    if (fs.existsSync(TURNER_DIR)) {
        console.log('\n' + '='.repeat(60));
        console.log('Processing Turner Asphalt site');
        console.log('='.repeat(60));

        const htmlFiles = await findHtmlFiles(TURNER_DIR);
        for (const htmlFile of htmlFiles) {
            const removed = await processHtmlFile(htmlFile, 'turnerasphalt.com', false);
            totalRemoved += removed;
        }
    }

    console.log('\n' + '='.repeat(60));
    console.log(`Total bytes removed: ${totalRemoved.toLocaleString()}`);
    console.log(`Images saved to: ${path.resolve(IMAGES_DIR)}`);
    console.log('='.repeat(60));
}

main().catch(console.error);
