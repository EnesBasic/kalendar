import PropTypes from 'prop-types';

import React from 'react';
import './ErrorMessage.styles.js';

const ErrorMessage = ({ message, onRetry }) => {
  return (
    <div className="error-message">
      <span>{message}</span>
      {onRetry && (
        <button onClick={onRetry}>Retry</button>
      )}
    </div>
  );
};

export default ErrorMessage;
// PropTypes validation
ErrorMessage.propTypes = {
  // Add prop validation here
};
