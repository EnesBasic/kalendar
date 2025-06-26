import React from 'react';
import './ErrorMessage.css';

interface ErrorMessageProps {
  message: string;
  onRetry?: () => void;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message, onRetry }) => (
  <div className="error-message">
    <div>{message}</div>
    {onRetry && (
      <button onClick={onRetry} className="error-message__retry-btn">
        Retry
      </button>
    )}
  </div>
);

export default ErrorMessage;