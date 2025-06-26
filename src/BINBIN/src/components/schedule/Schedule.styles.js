import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  background: #1D1D1F;
  border-radius: 0.5rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  overflow: hidden;
`;

export const LoadingIndicator = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  
  &::after {
    content: '';
    display: block;
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    border: 4px solid #67e8f9;
    border-color: #67e8f9 transparent #67e8f9 transparent;
    animation: spin 1.2s linear infinite;
  }
`;

// ... other styled components