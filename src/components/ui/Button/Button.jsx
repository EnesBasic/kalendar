import PropTypes from 'prop-types';

import React from 'react';
import './Button.styles.js';

const Button = ({ 
  children, 
  onClick, 
  variant = 'primary',
  disabled = false 
}) => {
  return (
    <button 
      className={`button ${variant}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
// PropTypes validation
Button.propTypes = {
  // Add prop validation here
};
