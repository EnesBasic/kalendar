// src/utils/analytics.ts

import { useEffect } from "react";

declare global {
  interface Window {
    analytics?: {
      track: (name: string, metadata?: object) => void;
    };
  }
}

export const trackEvent = (name: string, metadata = {}) => {
  if (process.env.NODE_ENV === 'production') {
    window.analytics?.track(name, metadata);
  } else {
    console.log(`[Analytics] ${name}`, metadata);
  }
};

// Usage in components
const viewMode = "default"; // Replace "default" with the actual value or logic as needed
useEffect(() => {
  trackEvent('ScheduleComponentMounted', { viewMode });
}, [viewMode]);