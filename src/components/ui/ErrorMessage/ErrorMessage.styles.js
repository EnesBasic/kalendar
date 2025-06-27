import styled from 'styled-components';

export const ErrorContainer = styled.div`
  padding: 1rem;
  background: #ffebee;
  color: #d32f2f;
  border-radius: 4px;
  margin: 1rem 0;
  display: flex;
  justify-content: space-between;
  align-items: center;

  button {
    background: #d32f2f;
    color: white;
    border: none;
    padding: 0.5rem 1rem;
    border-radius: 4px;
    cursor: pointer;
    transition: background 0.2s ease;

    &:hover {
      background: #b71c1c;
    }
  }
`;