// src/utils/analytics.ts
export const trackEvent = (name: string, metadata = {}) => {
  if (process.env.NODE_ENV === 'production') {
    window.analytics?.track(name, metadata);
  } else {
    console.log(`[Analytics] ${name}`, metadata);
  }
};

// Usage in components
useEffect(() => {
  trackEvent('ScheduleComponentMounted', { viewMode });
}, [viewMode]);