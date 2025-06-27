#!/bin/bash

echo "🔍 Validating Checkbox component..."

# Check index.js
if grep -q "export { default }" src/components/ui/inputs/Checkbox/index.js; then
  echo "✓ index.js is valid"
else
  echo "⚠️  index.js still needs fixing"
fi

# Check styles
if grep -q "styled" src/components/ui/inputs/Checkbox/Checkbox.styles.js; then
  echo "✓ Styles exist"
else
  echo "⚠️  Styles still missing"
fi

# Check PropTypes
if grep -q "PropTypes" src/components/ui/inputs/Checkbox/Checkbox.jsx; then
  echo "✓ PropTypes configured"
else
  echo "⚠️  PropTypes missing"
fi

echo "✅ Validation complete"