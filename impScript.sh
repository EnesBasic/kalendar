#!/bin/bash

# 1. Clean up temp files
find src -name "*.temp" -delete

# 2. Ensure correct permissions
chmod -R u+w src/components/

# 3. Verify all index.js files
for dir in src/components/{schedule,ui}/*/; do
  if [ -f "${dir}index.js" ]; then
    echo "✓ Valid index.js in $(basename $dir)"
  else
    echo "⚠️ Missing index.js in $(basename $dir)"
  fi
done

echo "✅ Final structure validation complete!"