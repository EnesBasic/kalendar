#!/bin/bash

# =============================================
# REACT COMPONENT STRUCTURE FIXER SCRIPT (SAFE VERSION)
# =============================================

set -euo pipefail  # Strict error handling

# ------ CONFIGURATION ------
COMPONENT_DIRS=("src/components/schedule" "src/components/ui")
STORYBOOK_FILES=(*.stories.tsx)

# ------ FUNCTIONS ------

add_proptypes() {
  local file=$1
  if [[ ! -w "$file" ]]; then
    echo "⚠️  Skipping read-only file: $file"
    return
  fi

  local component_name=$(basename "$file" .jsx)
  component_name=${component_name^}  # Capitalize first letter

  # Add import if missing
  if ! grep -q "import PropTypes" "$file"; then
    if sed -i.bak '1i\
import PropTypes from '\''prop-types'\'';\
' "$file" 2>/dev/null; then
      rm -f "${file}.bak"
      echo "Added PropTypes import to $file"
    else
      echo "⚠️  Failed to modify $file (check permissions)"
      return
    fi
  fi

  # Append PropTypes if not present
  if ! grep -q "${component_name}.propTypes" "$file"; then
    cat <<EOL >> "$file"

// PropTypes validation
${component_name}.propTypes = {
  // Add prop validation here
  children: PropTypes.node,
  onClick: PropTypes.func,
  className: PropTypes.string
};
EOL
    echo "Added PropTypes to $file"
  fi
}

standardize_exports() {
  local dir=$1
  local component=$(basename "$dir")
  local index_file="${dir}/index.js"

  if [[ -f "$index_file" && -w "$index_file" ]]; then
    echo "export { default } from './${component}';" > "$index_file"
    echo "Standardized exports in $index_file"
  else
    echo "⚠️  Cannot write to $index_file (missing or read-only)"
  fi
}

# ------ MAIN SCRIPT ------

echo "🛠  Starting component fixes..."

# 1. Fix Storybook files
echo "🔧 Converting Storybook files..."
find src -name "${STORYBOOK_FILES[0]}" -print0 | while IFS= read -r -d '' file; do
  if [[ -w "$file" ]]; then
    new_file="${file%.tsx}.js"
    mv "$file" "$new_file"
    echo "Renamed: $file → $new_file"
  else
    echo "⚠️  Cannot rename read-only file: $file"
  fi
done

# 2. Standardize exports and add PropTypes
for dir in "${COMPONENT_DIRS[@]}"; do
  echo "🔄 Processing $dir..."
  
  find "$dir" -mindepth 1 -maxdepth 1 -type d -print0 | while IFS= read -r -d '' component_dir; do
    standardize_exports "$component_dir"
    
    find "$component_dir" -name '*.jsx' -print0 | while IFS= read -r -d '' jsx_file; do
      add_proptypes "$jsx_file"
    done
  done
done

echo "✅ Fixes completed (with warnings for read-only files)"