// src/app.tsx
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './components/ui/ThemeProvider';
import { ScheduleMain } from './components/schedule/ScheduleMain';
import { Layout } from './components/ui/Layout';
import { ErrorBoundary } from './components/ui/ErrorBoundary';

const App = () => (
  <ErrorBoundary>
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
  </ErrorBoundary>
);

ReactDOM.render(<App />, document.getElementById('root'));