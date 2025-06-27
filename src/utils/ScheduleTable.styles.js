// src/components/schedule/ScheduleTable/ScheduleTable.styles.js
import styled from 'styled-components';

export const TableWrapper = styled.div`
  overflow-x: auto;
  margin: 1rem 0;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

export const TableHead = styled.thead`
  background: #f5f5f5;
`;

export const TableHeader = styled.th`
  padding: 1rem;
  text-align: left;
  border-bottom: 2px solid #ddd;
`;

export const TableBody = styled.tbody``;

export const TableRow = styled.tr`
  &:nth-child(even) {
    background: #f9f9f9;
  }
`;

export const DateCell = styled.td`
  padding: 0.75rem 1rem;
  border-bottom: 1px solid #eee;
`;

export const DayCell = styled(DateCell)`
  font-weight: bold;
`;

export const ShiftCell = styled(DateCell)`
  background: ${props => props.color || '#f5f5f5'};
`;

export const OperatorCell = styled(DateCell)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const MachineHeader = styled.div`
  font-weight: bold;
  padding: 0.5rem;
  background: #eaeaea;
`;

// At the end of each component file, add:
export default ComponentName;