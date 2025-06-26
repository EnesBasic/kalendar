// src/utils/performance.js
export const trackComponentRender = (componentName) => {
  if (process.env.NODE_ENV === 'development') {
    console.log(`${componentName} rendered at:`, performance.now());
  }
};

// Usage in components:
useEffect(() => {
  trackComponentRender('ScheduleTable');
}, []);