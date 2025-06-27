import styled from 'styled-components';

export const CheckboxContainer = styled.div`
  display: inline-block;
  vertical-align: middle;
`;

export const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  position: absolute;
  opacity: 0;
`;

export const StyledCheckbox = styled.div`
  width: 16px;
  height: 16px;
  border: 2px solid #3498db;
  border-radius: 3px;
  background: ${props => props.checked ? '#3498db' : 'white'};
  transition: all 150ms;

  ${HiddenCheckbox}:focus + & {
    box-shadow: 0 0 0 2px #3498db;
  }
`;
