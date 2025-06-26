import React from 'react';

interface ErrorMessageProps {
  message: string;
  onRetry?: () => void;
}

export const ErrorMessage: React.FC<ErrorMessageProps> = ({ message, onRetry }) => (
  <div style={{ color: 'red', margin: '1em 0' }}>
    <div>{message}</div>
    {onRetry && (
      <button onClick={onRetry} style={{ marginTop: '0.5em' }}>
        Retry
      </button>
    )}
  </div>
);