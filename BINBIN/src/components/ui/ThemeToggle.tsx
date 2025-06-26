// src/components/ui/ThemeToggle.tsx
import { useTheme } from '../theme/ThemeProvider';
import { MoonIcon, SunIcon } from './Icons';

export const ThemeToggle = () => {
  const { toggleTheme, isDark } = useTheme();
  
  return (
    <button 
      onClick={toggleTheme}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {isDark ? <SunIcon /> : <MoonIcon />}
    </button>
  );
};