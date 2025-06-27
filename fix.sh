#!/bin/bash

# 1. Define the file path
CHECKBOX_FILE="src/components/ui/inputs/Checkbox/Checkbox.jsx"

# 2. Verify file exists
if [ ! -f "$CHECKBOX_FILE" ]; then
  echo "Error: File $CHECKBOX_FILE not found"
  exit 1
fi

# 3. Add PropTypes import (cross-platform)
if ! grep -q "prop-types" "$CHECKBOX_FILE"; then
  # For Linux/macOS compatibility
  temp_file="${CHECKBOX_FILE}.temp"
  {
    echo "import PropTypes from 'prop-types';"
    cat "$CHECKBOX_FILE"
  } > "$temp_file" && mv "$temp_file" "$CHECKBOX_FILE"
fi

# 4. Append PropTypes validation
if ! grep -q "Checkbox.propTypes" "$CHECKBOX_FILE"; then
  cat >> "$CHECKBOX_FILE" <<'EOL'

Checkbox.propTypes = {
  checked: PropTypes.bool,
  onChange: PropTypes.func.isRequired
};
EOL
fi

echo "✅ Successfully added PropTypes to Checkbox component"