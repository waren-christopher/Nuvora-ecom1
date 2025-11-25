#!/bin/bash
# Script to replace "Warenx Cashflow" with "Michael cashflow"

search="contact@michaelrajeshdigitalassets.com"
replace="contact@michaelrajeshdigitalassets.com"

# Find and replace in all files under current directory, excluding node_modules
grep -ril "$search" . --exclude-dir=node_modules | while read -r file; do
  sed -i "s/${search}/${replace}/g" "$file"
  echo "Replaced in: $file"
done

echo "✅ Replacement complete!"

