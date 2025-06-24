interface ThemeColors {
  primary: string;
  secondary: string;
  background: string;
  text: string;
  error: string;
  warning: string;
  success: string;
}

interface Theme {
  colors: ThemeColors;
  spacing: {
    small: string;
    medium: string;
    large: string;
  };
  borderRadius: string;
}

export const lightTheme: Theme = {
  colors: {
    primary: '#4a9eff',
    secondary: '#67e8f9',
    background: '#ffffff',
    text: '#1D1D1F',
    error: '#ef4444',
    warning: '#f59e0b',
    success: '#10b981'
  },
  spacing: {
    small: '4px',
    medium: '8px',
    large: '16px'
  },
  borderRadius: '4px'
};

export const darkTheme: Theme = {
  colors: {
    primary: '#67e8f9',
    secondary: '#4a9eff',
    background: '#1D1D1F',
    text: '#ffffff',
    error: '#dc2626',
    warning: '#d97706',
    success: '#059669'
  },
  spacing: {
    small: '4px',
    medium: '8px',
    large: '16px'
  },
  borderRadius: '4px'
};