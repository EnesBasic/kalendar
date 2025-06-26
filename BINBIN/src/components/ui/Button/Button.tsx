// Button.tsx
import React from 'react';
import { useTheme } from '../../ThemeProvider';
import './Button.css';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
}

export const Button = ({ variant = 'primary', ...props }: ButtonProps) => {
  const theme = useTheme();
  return (
    <button
      className={`button ${variant}`}
      {...props}
    />
  );
};