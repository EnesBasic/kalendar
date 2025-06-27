import styled from 'styled-components';

export const OperatorManagerContainer = styled.div`
  padding: 1.5rem;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.05);
  margin-bottom: 2rem;
`;

export const OperatorHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
`;

export const OperatorGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 1.25rem;
`;

export const OperatorCard = styled.div`
  padding: 1.25rem;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  background: ${props => props.$isActive ? '#f5fbff' : '#fff'};
  transition: all 0.2s ease;
  cursor: pointer;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0,0,0,0.1);
    border-color: #3498db;
  }
`;

export const OperatorAvatar = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: #e3f2fd;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #1976d2;
  font-weight: bold;
  margin-bottom: 1rem;
`;

export const OperatorName = styled.h4`
  margin: 0 0 0.25rem 0;
  color: #333;
  font-size: 1.1rem;
`;

export const OperatorTitle = styled.p`
  margin: 0 0 1rem 0;
  color: #666;
  font-size: 0.85rem;
`;

export const OperatorSkills = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

export const SkillBadge = styled.span`
  font-size: 0.75rem;
  padding: 0.35rem 0.75rem;
  border-radius: 12px;
  background: ${props => 
    props.$skillLevel === 'expert' ? '#e8f5e9' :
    props.$skillLevel === 'intermediate' ? '#fff8e1' : '#e3f2fd'};
  color: ${props => 
    props.$skillLevel === 'expert' ? '#2e7d32' :
    props.$skillLevel === 'intermediate' ? '#ff8f00' : '#1976d2'};
`;
// At the end of each component file, add:
export default ComponentName;