const fs = require('fs');
const path = require('path');

const baseDir = path.join(__dirname, 'reference/turner/turnerasphalt.com');

// Tracking patterns to remove
const trackingPatterns = [
    /<script[^>]*google-analytics[^>]*>[\s\S]*?<\/script>/gi,
    /<script[^>]*googletagmanager[^>]*>[\s\S]*?<\/script>/gi,
    /<script[^>]*gtag[^>]*>[\s\S]*?<\/script>/gi,
    /<script[^>]*fbevents[^>]*>[\s\S]*?<\/script>/gi,
    /<script[^>]*>[\s\S]*?gtag\([\s\S]*?<\/script>/gi,
    /<script[^>]*>[\s\S]*?dataLayer[\s\S]*?<\/script>/gi,
    /<noscript>[\s\S]*?googletagmanager[\s\S]*?<\/noscript>/gi,
    /<noscript>[\s\S]*?facebook[\s\S]*?<\/noscript>/gi,
];

function walkDir(dir, callback) {
    const files = fs.readdirSync(dir);
    files.forEach(file => {
        const filepath = path.join(dir, file);
        const stat = fs.statSync(filepath);
        if (stat.isDirectory()) {
            walkDir(filepath, callback);
        } else {
            callback(filepath);
        }
    });
}

// Step 0: Fix double extensions (.css.css -> .css, .js.js -> .js)
console.log("Fixing double extensions...");
let doubleExtFixed = 0;

walkDir(baseDir, (filepath) => {
    const filename = path.basename(filepath);
    const dir = path.dirname(filepath);

    if (filename.endsWith('.css.css')) {
        const newName = filename.slice(0, -4); // Remove the extra .css
        const newPath = path.join(dir, newName);

        if (!fs.existsSync(newPath)) {
            console.log(`  ${filename} -> ${newName}`);
            fs.renameSync(filepath, newPath);
            doubleExtFixed++;
        } else {
            // Delete duplicate
            fs.unlinkSync(filepath);
            doubleExtFixed++;
        }
    } else if (filename.endsWith('.js.js')) {
        const newName = filename.slice(0, -3); // Remove the extra .js
        const newPath = path.join(dir, newName);

        if (!fs.existsSync(newPath)) {
            console.log(`  ${filename} -> ${newName}`);
            fs.renameSync(filepath, newPath);
            doubleExtFixed++;
        } else {
            // Delete duplicate
            fs.unlinkSync(filepath);
            doubleExtFixed++;
        }
    }
});

console.log(`\nFixed ${doubleExtFixed} double extensions`);

// Step 1: Rename files with @ in the name
console.log("\nRenaming files with query strings...");
let renamedCount = 0;

walkDir(baseDir, (filepath) => {
    const filename = path.basename(filepath);
    if (filename.includes('@')) {
        const dir = path.dirname(filepath);
        const baseName = filename.split('@')[0];

        // Get the extension from the base name (before @)
        // e.g., "style.css@ver=1.8.0.css" -> baseName is "style.css"
        // If baseName already has extension, use it; otherwise check after @
        let newName = baseName;

        // Only add extension if baseName doesn't already have one
        if (!baseName.match(/\.(css|js|woff2?|ttf|eot|svg|png|jpg|gif)$/i)) {
            const afterAt = filename.split('@')[1] || '';
            if (afterAt.includes('.css')) newName += '.css';
            else if (afterAt.includes('.js')) newName += '.js';
            else if (afterAt.includes('.woff2')) newName += '.woff2';
            else if (afterAt.includes('.woff')) newName += '.woff';
        }

        const newPath = path.join(dir, newName);

        if (!fs.existsSync(newPath)) {
            console.log(`  ${filename} -> ${newName}`);
            fs.renameSync(filepath, newPath);
            renamedCount++;
        } else {
            // Delete duplicate
            fs.unlinkSync(filepath);
        }
    }
});

console.log(`\nRenamed ${renamedCount} files`);

// Step 2: Fix HTML files
console.log("\nFixing HTML files...");

walkDir(baseDir, (filepath) => {
    if (!filepath.endsWith('.html')) return;

    let content = fs.readFileSync(filepath, 'utf8');
    const original = content;

    // Remove tracking scripts
    trackingPatterns.forEach(pattern => {
        content = content.replace(pattern, '');
    });

    // Fix URLs with query strings
    content = content.replace(/\?ver=[^"'&\s]+/g, '');
    content = content.replace(/&ver=[^"'&\s]+/g, '');

    // Fix references to @ver files
    content = content.replace(/@ver=[^"'&\s]+\.css/g, '.css');
    content = content.replace(/@ver=[^"'&\s]+\.js/g, '.js');
    content = content.replace(/@ver=[^"'&\s]+/g, '');

    // Make turnerasphalt.com links relative
    content = content.replace(/https?:\/\/(www\.)?turnerasphalt\.com\/?/g, '/');

    if (content !== original) {
        fs.writeFileSync(filepath, content, 'utf8');
        console.log(`  Updated: ${path.basename(filepath)}`);
    }
});

// Step 3: Fix CSS files
console.log("\nFixing CSS files...");

walkDir(baseDir, (filepath) => {
    if (!filepath.endsWith('.css')) return;

    try {
        let content = fs.readFileSync(filepath, 'utf8');
        const original = content;

        content = content.replace(/\?ver=[^"')\s]+/g, '');

        if (content !== original) {
            fs.writeFileSync(filepath, content, 'utf8');
            console.log(`  Updated: ${path.basename(filepath)}`);
        }
    } catch (e) {}
});

console.log("\nDone! Turner site should now work locally.");
