#!/usr/bin/env python3
"""
Clean scraped websites:
1. Download all external images locally
2. Remove all tracking scripts (Google Analytics, Facebook Pixel, etc.)
3. Convert external links to local links
"""

import os
import re
import requests
from pathlib import Path
from urllib.parse import urlparse, urljoin
import hashlib

# Directories
FREEDOM_DIR = Path("reference/freedom/freedomasphaltpaving.com")
TURNER_DIR = Path("reference/turner/turnerasphalt.com")
IMAGES_DIR = Path("reference/images")

# Create images directory
IMAGES_DIR.mkdir(parents=True, exist_ok=True)

def download_image(url, base_dir):
    """Download an image and return the local path"""
    try:
        # Create a hash-based filename to avoid conflicts
        url_hash = hashlib.md5(url.encode()).hexdigest()[:12]
        ext = Path(urlparse(url).path).suffix or '.jpg'
        if ext not in ['.jpg', '.jpeg', '.png', '.gif', '.webp', '.svg', '.ico']:
            ext = '.jpg'

        local_filename = f"{url_hash}{ext}"
        local_path = IMAGES_DIR / local_filename

        if not local_path.exists():
            print(f"Downloading: {url[:80]}...")
            headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'}
            response = requests.get(url, headers=headers, timeout=30)
            if response.status_code == 200:
                local_path.write_bytes(response.content)
                print(f"  Saved: {local_filename}")
            else:
                print(f"  Failed: {response.status_code}")
                return None

        return f"../images/{local_filename}"
    except Exception as e:
        print(f"  Error downloading {url[:50]}: {e}")
        return None

def extract_urls_from_html(content):
    """Extract all URLs from HTML content"""
    # Match URLs in various contexts
    patterns = [
        r'src=["\']([^"\']+)["\']',
        r'href=["\']([^"\']+)["\']',
        r'url\(["\']?([^"\')]+)["\']?\)',
        r'content=["\']([^"\']+)["\']',
    ]

    urls = set()
    for pattern in patterns:
        matches = re.findall(pattern, content, re.IGNORECASE)
        for match in matches:
            if match.startswith('http'):
                urls.add(match)

    return urls

def clean_tracking_scripts(content):
    """Remove all tracking scripts and analytics"""

    # Remove Google Analytics/Tag Manager scripts
    patterns_to_remove = [
        # Google Analytics script tags
        r'<script[^>]*googletagmanager\.com[^>]*>.*?</script>',
        r'<script[^>]*gtag[^>]*>.*?</script>',
        r'<script[^>]*>.*?gtag\([^)]*\).*?</script>',
        r'<script[^>]*>.*?dataLayer\.push.*?</script>',
        r'<script[^>]*>.*?ga\s*\([^)]*\).*?</script>',
        r'<script[^>]*>.*?_gaq\.push.*?</script>',

        # Facebook Pixel
        r'<script[^>]*>.*?fbq\([^)]*\).*?</script>',
        r'<script[^>]*facebook\.net[^>]*>.*?</script>',
        r'<noscript[^>]*>.*?facebook.*?</noscript>',

        # Generic tracking
        r'<script[^>]*>.*?x-visitor-id.*?</script>',
        r'<script[^>]*>.*?onAllowCookieTracking.*?</script>',
        r'<script[^>]*>.*?cookie.*?tracking.*?</script>',

        # External analytics scripts
        r'<script[^>]*async[^>]*src=["\'][^"\']*googletagmanager[^"\']*["\'][^>]*>.*?</script>',
        r'<script[^>]*src=["\'][^"\']*gtag[^"\']*["\'][^>]*>.*?</script>',

        # Tracking pixels
        r'<img[^>]*pixel[^>]*>',
        r'<img[^>]*tracking[^>]*>',

        # Google site verification (keep this actually, but remove tracking)
        # Comment out: r'<meta[^>]*google-site-verification[^>]*>',

        # Remove signals/tracking scripts from GoDaddy
        r'<script[^>]*signals[^>]*>.*?</script>',
        r'<script[^>]*scc-c2[^>]*>.*?</script>',
    ]

    # Also remove inline tracking code
    inline_patterns = [
        r'"use strict";window\.gtag\s*=.*?;',
        r'"use strict";window\._gaID\s*=.*?;',
        r'"use strict";Core\.utils\.onAllowCookieTracking.*?;',
        r'gtag\([^)]*\);?',
    ]

    for pattern in patterns_to_remove:
        content = re.sub(pattern, '', content, flags=re.IGNORECASE | re.DOTALL)

    for pattern in inline_patterns:
        content = re.sub(pattern, '', content, flags=re.IGNORECASE | re.DOTALL)

    # Remove empty script tags left behind
    content = re.sub(r'<script[^>]*>\s*</script>', '', content, flags=re.IGNORECASE)

    return content

def make_links_local(content, site_domain):
    """Convert external links to local links where appropriate"""

    # Replace absolute URLs to the same domain with relative URLs
    content = re.sub(
        rf'(href|src)=["\']https?://{re.escape(site_domain)}/([^"\']*)["\']',
        r'\1="\2"',
        content,
        flags=re.IGNORECASE
    )

    # Fix double slashes
    content = re.sub(r'(href|src)=["\']//([^"\']*)["\']', r'\1="\2"', content)

    return content

def process_html_file(filepath, site_domain, download_images=True):
    """Process a single HTML file"""
    print(f"\nProcessing: {filepath}")

    content = filepath.read_text(encoding='utf-8', errors='ignore')
    original_size = len(content)

    # 1. Remove tracking scripts
    content = clean_tracking_scripts(content)

    # 2. Make links local
    content = make_links_local(content, site_domain)

    # 3. Download and replace external images (optional)
    if download_images:
        # Find all image URLs
        img_urls = re.findall(r'src=["\']([^"\']+)["\']', content, re.IGNORECASE)
        img_urls += re.findall(r'url\(["\']?([^"\')]+)["\']?\)', content, re.IGNORECASE)

        for url in img_urls:
            if url.startswith('http') and ('wsimg.com' in url or 'img1' in url):
                # Check if it's an image
                if any(ext in url.lower() for ext in ['.jpg', '.jpeg', '.png', '.gif', '.webp', '.svg', 'image', 'blob', 'isteam']):
                    local_path = download_image(url, IMAGES_DIR)
                    if local_path:
                        content = content.replace(url, local_path)

    # 4. Remove external script references that aren't needed
    external_scripts_to_remove = [
        r'<script[^>]*wsimg\.com[^>]*>.*?</script>',
        r'<script[^>]*src=["\'][^"\']*wsimg\.com[^"\']*["\'][^>]*></script>',
    ]

    for pattern in external_scripts_to_remove:
        content = re.sub(pattern, '', content, flags=re.IGNORECASE | re.DOTALL)

    # 5. Clean up multiple newlines
    content = re.sub(r'\n\s*\n\s*\n', '\n\n', content)

    new_size = len(content)
    print(f"  Size: {original_size:,} -> {new_size:,} bytes ({original_size - new_size:,} removed)")

    # Write back
    filepath.write_text(content, encoding='utf-8')

    return original_size - new_size

def main():
    total_removed = 0

    # Process Freedom site
    if FREEDOM_DIR.exists():
        print("\n" + "="*60)
        print("Processing Freedom Asphalt Paving site")
        print("="*60)

        for html_file in FREEDOM_DIR.glob("*.html"):
            removed = process_html_file(html_file, "freedomasphaltpaving.com", download_images=True)
            total_removed += removed

    # Process Turner site
    if TURNER_DIR.exists():
        print("\n" + "="*60)
        print("Processing Turner Asphalt site")
        print("="*60)

        for html_file in TURNER_DIR.rglob("*.html"):
            removed = process_html_file(html_file, "turnerasphalt.com", download_images=False)
            total_removed += removed

    print("\n" + "="*60)
    print(f"Total bytes removed: {total_removed:,}")
    print(f"Images saved to: {IMAGES_DIR.absolute()}")
    print("="*60)

if __name__ == "__main__":
    main()
