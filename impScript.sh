#!/bin/bash

# 1. Create barrel exports for schedule components
cat > src/components/schedule/index.js <<EOL
// Main exports
export { default as Schedule } from './Schedule';
export { default as ScheduleControls } from './ScheduleControls';
export { default as MachineManager } from './MachineManager';

// Add other exports as needed
EOL

# 2. Add PropTypes to new components
for component in src/components/ui/inputs/*/*.jsx; do
  if ! grep -q "prop-types" "$component"; then
    component_name=$(basename "$component" .jsx)
    
    sed -i.bak "1i\\
import PropTypes from 'prop-types';\\
" "$component"
    
    echo "" >> "$component"
    echo "${component_name}.propTypes = {" >> "$component"
    echo "  // Add prop validation here" >> "$component"
    echo "};" >> "$component"
    
    rm -f "${component}.bak"
  fi
done

echo "✅ Final optimizations complete!"