import styled from 'styled-components';

export const MachineManagerWrapper = styled.div`
  padding: 1.5rem;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.05);
`;

export const MachineList = styled.ul`
  list-style: none;
  padding: 0;
  margin-top: 1.5rem;
`;

export const MachineItem = styled.li`
  padding: 1rem;
  border-bottom: 1px solid #eee;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: background 0.2s ease;

  &:hover {
    background: #f9f9f9;
  }
`;

export const MachineStatus = styled.span`
  display: inline-block;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  margin-right: 0.5rem;
  background: ${props => 
    props.status === 'active' ? '#2ecc71' : 
    props.status === 'maintenance' ? '#f39c12' : '#e74c3c'};
`;

export const MachineName = styled.span`
  font-weight: 500;
  display: flex;
  align-items: center;
`;

export const MachineActions = styled.div`
  display: flex;
  gap: 0.5rem;

  button {
    padding: 0.25rem 0.5rem;
    font-size: 0.8rem;
    border-radius: 4px;
    cursor: pointer;
  }
`;
// At the end of each component file, add:
export default ComponentName;