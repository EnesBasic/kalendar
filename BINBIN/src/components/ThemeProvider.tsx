import React, { createContext, useContext, useState } from 'react';
import { Theme, lightTheme, darkTheme } from '../theme/theme';

interface ThemeContextType {
  colors: any;
  spacing: any;
  theme: Theme;
  toggleTheme: () => void;
  isDarkMode: boolean;
}

const ThemeContext = createContext<ThemeContextType>({
    theme: lightTheme,
    toggleTheme: () => { },
    isDarkMode: false,
    colors: undefined,
    spacing: undefined
});

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const theme = isDarkMode ? darkTheme : lightTheme;

  return (
    <ThemeContext.Provider value={{ 
      theme, 
      toggleTheme, 
      isDarkMode, 
      colors: theme.colors, 
      spacing: theme.spacing 
    }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  return useContext(ThemeContext);
};