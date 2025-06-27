import PropTypes from 'prop-types';

import React from 'react';
import './TextInput.styles.js';

const TextInput = ({ 
  value,
  onChange,
  placeholder = '',
  type = 'text',
  label
}) => {
  return (
    <div className="text-input">
      {label && <label>{label}</label>}
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
      />
    </div>
  );
};

export default TextInput;
// PropTypes validation
TextInput.propTypes = {
  // Add prop validation here
};
