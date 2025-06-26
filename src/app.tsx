// src/app.tsx
import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { ThemeProvider } from './components/ui/ThemeProvider';
// If ThemeProvider does not exist, you can temporarily use React.Fragment as a placeholder:
const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => <>{children}</>;
import { ScheduleMain } from './BINBIN/src/components/schedule/ScheduleMain';
import { Layout } from './components/ui/Layout';
// import { ErrorBoundary } from './components/ui/ErrorBoundary';

const App = () => (
  <React.Fragment>
    <ThemeProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<ScheduleMain />} />
            <Route path="/schedule" element={<ScheduleMain />} />
          </Routes>
        </Layout>
      </Router>
    </ThemeProvider>
  </React.Fragment>
);

const container = document.getElementById('root');
if (container) {
  const root = createRoot(container);
  root.render(<App />);
}

// components/schedule/ScheduleMain.tsx
// (This code should be in src/components/schedule/ScheduleMain.tsx, not here)