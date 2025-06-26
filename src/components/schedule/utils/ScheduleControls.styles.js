import styled from 'styled-components';

export const ControlsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background: #f8f9fa;
  border-radius: 8px;
  margin-bottom: 1.5rem;
  flex-wrap: wrap;
  gap: 1rem;
`;

export const ControlGroup = styled.div`
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
`;

export const ControlButton = styled.button`
  padding: 0.5rem 1rem;
  background: ${props => props.$primary ? '#3498db' : '#fff'};
  color: ${props => props.$primary ? '#fff' : '#333'};
  border: 1px solid ${props => props.$primary ? 'transparent' : '#ddd'};
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.9rem;

  &:hover {
    background: ${props => props.$primary ? '#2980b9' : '#f1f1f1'};
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export const ViewToggle = styled.div`
  display: flex;
  border: 1px solid #ddd;
  border-radius: 4px;
  overflow: hidden;
`;

export const ToggleButton = styled.button`
  padding: 0.5rem 1rem;
  background: ${props => props.$active ? '#3498db' : 'transparent'};
  color: ${props => props.$active ? '#fff' : '#333'};
  border: none;
  cursor: pointer;
  font-size: 0.9rem;

  &:not(:last-child) {
    border-right: 1px solid #ddd;
  }
`;

export const DateDisplay = styled.div`
  font-weight: bold;
  color: #333;
  min-width: 180px;
  text-align: center;
`;
// At the end of each component file, add:
export default ComponentName;