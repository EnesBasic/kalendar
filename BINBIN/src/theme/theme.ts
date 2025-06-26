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

// Enhanced ThemeProvider with switching
export const ThemeProvider: React.FC = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState<'light' | 'dark'>('light');
  
  const toggleTheme = () => {
    setCurrentTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeContext.Provider 
      value={{
        theme: currentTheme === 'light' ? lightTheme : darkTheme,
        toggleTheme,
        isDark: currentTheme === 'dark'
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

// Usage in components:
const { theme, toggleTheme, isDark } = useTheme();

<Button onClick={toggleTheme}>
  Switch to {isDark ? 'Light' : 'Dark'} Mode
</Button>