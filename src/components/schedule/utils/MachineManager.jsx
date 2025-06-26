import React from 'react';
import {
  MachineManagerWrapper,
  MachineList,
  MachineItem,
  MachineStatus,
  MachineName,
  MachineActions
} from './MachineManager.styles';

const MachineManager = ({ machines }) => {
  return (
    <MachineManagerWrapper>
      <h2>Machine Management</h2>
      <MachineList>
        {machines?.map(machine => (
          <MachineItem key={machine.id}>
            <div>
              <MachineName>{machine.name}</MachineName>
              <MachineStatus status={machine.status} />
            </div>
            <MachineActions>
              <button>Edit</button>
              <button>Details</button>
            </MachineActions>
          </MachineItem>
        ))}
      </MachineList>
    </MachineManagerWrapper>
  );
};

export default MachineManager;