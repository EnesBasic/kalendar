import styled from 'styled-components';

export const InputContainer = styled.div`
  margin-bottom: 1rem;

  label {
    display: block;
    margin-bottom: 0.5rem;
    font-weight: 500;
    color: #333;
  }

  input {
    width: 100%;
    padding: 0.75rem;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-size: 1rem;
    transition: border 0.2s ease;

    &:focus {
      outline: none;
      border-color: #3498db;
    }
  }
`;