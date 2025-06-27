import styled from 'styled-components';

export const ShiftManagerWrapper = styled.div`
  background: #fff;
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 2px 8px rgba(0,0,0,0.05);
`;

export const ShiftHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
`;

export const ShiftGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1rem;
`;

export const ShiftCard = styled.div`
  padding: 1rem;
  border: 1px solid #e0e0e0;
  border-radius: 6px;
  background: ${props => props.$isActive ? '#f5fbff' : '#fff'};
  border-left: 4px solid ${props => props.$color || '#3498db'};
  transition: all 0.2s ease;

  &:hover {
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  }
`;

export const ShiftTitle = styled.h4`
  margin: 0 0 0.5rem 0;
  color: #333;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const ShiftTime = styled.p`
  margin: 0;
  color: #666;
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const ShiftInfo = styled.div`
  margin: 0.75rem 0;
  font-size: 0.85rem;
  color: #555;
`;

export const ShiftActions = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-top: 1rem;
`;

export const ActionButton = styled.button`
  padding: 0.25rem 0.5rem;
  background: ${props => 
    props.$variant === 'edit' ? '#e3f2fd' : 
    props.$variant === 'delete' ? '#ffebee' : '#f5f5f5'};
  color: ${props => 
    props.$variant === 'edit' ? '#1976d2' : 
    props.$variant === 'delete' ? '#d32f2f' : '#616161'};
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 0.8rem;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  gap: 0.25rem;

  &:hover {
    background: ${props => 
      props.$variant === 'edit' ? '#bbdefb' : 
      props.$variant === 'delete' ? '#ffcdd2' : '#eeeeee'};
  }
`;
// At the end of each component file, add:
export default ComponentName;