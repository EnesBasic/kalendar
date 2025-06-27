import React from 'react';
import PropTypes from 'prop-types';
import {
  CheckboxContainer,
  HiddenCheckbox,
  StyledCheckbox
} from './Checkbox.styles';

const Checkbox = ({ checked, onChange }) => (
  <CheckboxContainer>
    <HiddenCheckbox checked={checked} onChange={onChange} />
    <StyledCheckbox checked={checked} />
  </CheckboxContainer>
);

Checkbox.propTypes = {
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired
};

export default Checkbox;
