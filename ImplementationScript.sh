#!/bin/bash

# 1. Cleanup dist folders
find src -type d -name "dist" -exec rm -rf {} +

# 2. Convert CSS to JS Styles
for dir in src/ui/*/; do
  if [ -f "$dir"*.css ]; then
    mv "$dir"*.css "$dir"$(basename "$dir").styles.js
    echo "import styled from 'styled-components';" > "$dir"$(basename "$dir").styles.js
  fi
done

# 3. Flatten constants
mkdir -p src/constants
mv src/components/schedule/constants/* src/constants/
rm -rf src/components/schedule/constants

# 4. Simplify index.js files
find src/components -name "index.js" -exec sh -c '
  dir=$(dirname "$1")
  comp=$(basename "$dir")
  echo "export { default } from '\''./$comp'\'';" > "$1"
' sh {} \;

echo "✅ Project structure optimized!"
