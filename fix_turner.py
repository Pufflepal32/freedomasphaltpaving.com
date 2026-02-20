import os
import re
from pathlib import Path

base_dir = Path("reference/turner/turnerasphalt.com")

# Tracking patterns to remove
tracking_patterns = [
    r'<script[^>]*google-analytics[^>]*>.*?</script>',
    r'<script[^>]*googletagmanager[^>]*>.*?</script>',
    r'<script[^>]*gtag[^>]*>.*?</script>',
    r'<script[^>]*fbevents[^>]*>.*?</script>',
    r'<script[^>]*facebook[^>]*>.*?</script>',
    r"<script[^>]*>.*?gtag\(.*?</script>",
    r"<script[^>]*>.*?dataLayer.*?</script>",
    r'<noscript>.*?googletagmanager.*?</noscript>',
    r'<noscript>.*?facebook.*?</noscript>',
]

# First, rename files with @ver= to remove the query string part
print("Renaming files with query strings...")
renamed_files = {}
for root, dirs, files in os.walk(base_dir):
    for file in files:
        if '@' in file:
            old_path = Path(root) / file
            # Extract base name without query string
            new_name = file.split('@')[0]
            # Handle .css and .js extensions
            if not new_name.endswith(('.css', '.js', '.woff2', '.woff', '.ttf', '.png', '.jpg', '.webp', '.svg')):
                ext = file.split('.')[-1] if '.' in file.split('@')[-1] else ''
                if ext:
                    new_name = new_name + '.' + ext
            new_path = Path(root) / new_name

            # Track the rename for URL fixing
            old_relative = str(old_path.relative_to(base_dir)).replace('\\', '/')
            new_relative = str(new_path.relative_to(base_dir)).replace('\\', '/')
            renamed_files[old_relative] = new_relative

            if not new_path.exists():
                print(f"  {file} -> {new_name}")
                old_path.rename(new_path)
            else:
                # If target exists, just delete the @ver version
                old_path.unlink()

print(f"\nRenamed {len(renamed_files)} files")

# Now fix HTML files
print("\nFixing HTML files...")
html_files = list(base_dir.glob("**/*.html"))

for html_file in html_files:
    print(f"Processing: {html_file.name}")
    content = html_file.read_text(encoding='utf-8', errors='ignore')
    original = content

    # Remove tracking scripts
    for pattern in tracking_patterns:
        content = re.sub(pattern, '', content, flags=re.DOTALL | re.IGNORECASE)

    # Fix URLs with query strings - convert ?ver=xxx to nothing
    content = re.sub(r'\?ver=[^"\'&\s]+', '', content)
    content = re.sub(r'&ver=[^"\'&\s]+', '', content)

    # Fix references to @ver files
    content = re.sub(r'@ver=[^"\'&\s]+\.css', '.css', content)
    content = re.sub(r'@ver=[^"\'&\s]+\.js', '.js', content)

    # Remove external links to turnerasphalt.com and make them relative
    content = re.sub(r'https?://turnerasphalt\.com/?', '/', content)
    content = re.sub(r'https?://www\.turnerasphalt\.com/?', '/', content)

    # Remove Google fonts external links (keep local copies if they exist)
    # content = re.sub(r'<link[^>]*fonts\.googleapis\.com[^>]*>', '', content)

    if content != original:
        html_file.write_text(content, encoding='utf-8')
        print(f"  Updated: {html_file.name}")

# Also fix CSS files that might have url() references
print("\nFixing CSS files...")
css_files = list(base_dir.glob("**/*.css"))
for css_file in css_files:
    try:
        content = css_file.read_text(encoding='utf-8', errors='ignore')
        original = content

        # Fix URLs with query strings
        content = re.sub(r'\?ver=[^"\')\s]+', '', content)

        if content != original:
            css_file.write_text(content, encoding='utf-8')
            print(f"  Updated: {css_file.name}")
    except:
        pass

print("\nDone! Turner site should now work locally.")
