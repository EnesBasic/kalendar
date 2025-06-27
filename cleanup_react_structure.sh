#!/bin/bash

# =============================================
# REACT COMPONENT STRUCTURE CLEANUP SCRIPT (JS/JSX ONLY)
# =============================================

# Exit on error and show commands
set -ex

# ------ CONFIGURATION ------
COMPONENTS_DIR="src/components"
SCHEDULE_DIR="$COMPONENTS_DIR/schedule"
UTILS_DIR="$SCHEDULE_DIR/utils"

# ------ CLEANUP STEPS ------

# 1. Remove all TypeScript files
find "$COMPONENTS_DIR" -type f \( -name "*.ts" -o -name "*.tsx" \) -delete

# 2. Remove duplicate component files from utils
find "$UTILS_DIR" -type f \( -name "*Manager.jsx" -o -name "*Manager.styles.js" -o -name "ScheduleControls.*" \) -delete

# 3. Standardize index.js exports
for component_dir in "$SCHEDULE_DIR"/*/; do
  if [ -d "$component_dir" ]; then
    cat > "$component_dir/index.js" <<EOL
export { default } from './$(basename "$component_dir")';
EOL
  fi
done

# 4. Create missing styles files
for component in MachineManager OperatorManager ScheduleControls ShiftManager; do
  styles_file="$SCHEDULE_DIR/$component/$component.styles.js"
  if [ ! -f "$styles_file" ]; then
    cat > "$styles_file" <<EOL
import styled from 'styled-components';

export const Wrapper = styled.div\`
  /* Add your styles here */
\`;
EOL
  fi
done

# 5. Clean empty utils directory
if [ -z "$(ls -A "$UTILS_DIR")" ]; then
  rm -rf "$UTILS_DIR"
fi

# ------ VERIFICATION ------
echo "✅ Cleanup completed successfully!"
echo "📁 New structure:"
tree "$COMPONENTS_DIR" -L 3 --dirsfirst

# =============================================