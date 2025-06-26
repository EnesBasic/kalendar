import styled from 'styled-components';
import { useScheduleData } from '../../../hooks/useScheduleData';

export const TableWrapper = styled.div`
  overflow-x: auto;
  background: #1D1D1F;
  border-radius: 0 0 8px 8px;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  text-align: left;
`;

export const TableHead = styled.thead`
  background: #2A2A2A;
  color: #67e8f9;
  text-transform: uppercase;
  font-size: 0.75rem;
`;

export const TableRow = styled.tr`
  border-bottom: ${props => props.isWeekend ? '1px solid #3A3A3A' : 'none'};
  background: ${props => props.isWeekend ? '#2A2A2A30' : 'transparent'};
`;

export const MachineHeader = styled.th`
  background: ${props => `rgba(${hexToRgb(props.color)}, 0.25)`};
  color: ${props => props.color};
  text-shadow: 0 0 8px rgba(0, 0, 0, 0.7);
  font-weight: bold;
  padding: 8px 4px;
  text-align: center;
  font-size: 10px;
`;

// Helper function
const hexToRgb = (hex) => {
  // implementation
};