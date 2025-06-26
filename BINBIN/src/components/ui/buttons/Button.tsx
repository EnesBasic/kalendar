// Button.tsx
import React from 'react';
import { useTheme } from './ThemeProvider';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
}

export const Button = ({ variant = 'primary', ...props }: ButtonProps) => {
  const theme = useTheme();
  
  return (
    <button
      style={{
        backgroundColor: variant === 'primary' 
          ? theme.colors.primary 
          : theme.colors.secondary,
        padding: theme.spacing.md
      }}
      {...props}
    />
  );
};