// src/components/schedule/WeekSelector/WeekSelector.styles.js
import styled from 'styled-components';

export const WeekSelectorWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
`;

export const NavButton = styled.button`
  background: #3498db;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;
  
  &:disabled {
    background: #bdc3c7;
    cursor: not-allowed;
  }
`;

export const WeekDisplay = styled.span`
  font-weight: bold;
  min-width: 200px;
  text-align: center;
`;

// At the end of each component file, add:
export default ComponentName;