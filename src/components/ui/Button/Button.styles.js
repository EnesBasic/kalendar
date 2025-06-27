import styled from 'styled-components';

export const Button = styled.button`
  padding: 0.75rem 1.5rem;
  border-radius: 4px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  border: none;

  &.primary {
    background: #3498db;
    color: white;

    &:hover {
      background: #2980b9;
    }
  }

  &.secondary {
    background: #f1f1f1;
    color: #333;

    &:hover {
      background: #e0e0e0;
    }
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;