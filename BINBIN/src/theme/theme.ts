import React, { useState, createContext, useContext } from "react";

// src/theme/theme.ts
export interface Theme {
  colors: {
    primary: string;
    secondary: string;
    background: string;
    text: string;
  };
  spacing: {
    sm: string;
    md: string;
    lg: string;
  };
}

export const lightTheme: Theme = {
  colors: {
    primary: '#3498db',
    secondary: '#2ecc71',
    background: '#ffffff',
    text: '#333333'
  },
  spacing: {
    sm: '4px',
    md: '8px',
    lg: '16px'
  }
};

export const darkTheme: Theme = {
  colors: {
    primary: '#2980b9',
    secondary: '#27ae60',
    background: '#222222',
    text: '#f5f5f5'
  },
  spacing: lightTheme.spacing
};

// ThemeContext and hook
interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  isDark: boolean;
}

export const ThemeContext = createContext<ThemeContextType>({
  theme: lightTheme,
  toggleTheme: () => {},
  isDark: false
});

// Enhanced ThemeProvider with switching
export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState<'light' | 'dark'>('light');
  
  const toggleTheme = () => {
    setCurrentTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  return React.createElement(
    ThemeContext.Provider,
    {
      value: {
        theme: currentTheme === 'light' ? lightTheme : darkTheme,
        toggleTheme,
        isDark: currentTheme === 'dark'
      }
    },
    children
  );
};

// Custom hook for using theme context
export const useTheme = () => useContext(ThemeContext);

// Usage example (do not include in this file):
// const { theme, toggleTheme, isDark } = useTheme();
// <Button onClick={toggleTheme}>
//   Switch to {isDark ? 'Light' : 'Dark'} Mode
// </Button>