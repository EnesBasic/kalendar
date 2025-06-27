#!/bin/bash

# 1. Ensure proper permissions
chmod -R u+w src/components/ui/

# 2. Create UI category folders with write permissions
mkdir -p src/components/ui/{inputs,data-display,feedback}
chmod u+w src/components/ui/{inputs,data-display,feedback}

# 3. Move generic components (with error handling)
declare -A ui_components=(
  ["ColorPicker"]="data-display"
  ["HelpModal"]="feedback"
  ["FilterPanel"]="inputs"
)

for component in "${!ui_components[@]}"; do
  src_path="src/components/schedule/$component"
  dest_category="${ui_components[$component]}"
  dest_path="src/components/ui/$dest_category/$component"
  
  if [ -d "$src_path" ]; then
    if [ ! -w "$(dirname "$dest_path")" ]; then
      echo "⚠️  No write permission for $dest_path"
      continue
    fi
    
    mv "$src_path" "$dest_path"
    echo "Moved $component to ui/$dest_category"
    
    # Update component's index.js
    if [ -f "$dest_path/index.js" ]; then
      echo "export { default } from './$component';" > "$dest_path/index.js"
    fi
  else
    echo "⚠️  $component not found at $src_path"
  fi
done

# 4. Create barrel files with proper permissions
for category in inputs data-display feedback; do
  barrel_file="src/components/ui/$category/index.js"
  
  if [ ! -w "$(dirname "$barrel_file")" ]; then
    echo "⚠️  Cannot write to $barrel_file"
    continue
  fi
  
  # Generate exports for all components in category
  {
    echo "// Auto-generated barrel file"
    find "src/components/ui/$category" -mindepth 1 -maxdepth 1 -type d -exec basename {} \; | while read comp; do
      echo "export { default as $comp } from './$comp';"
    done
  } > "$barrel_file"
  
  echo "Created barrel file: $barrel_file"
done

echo "✅ UI reorganization completed successfully!"