import PropTypes from 'prop-types';

import React, { useState } from 'react';
import * as S from './MachineManager.styles';

const MachineManager = ({
  showMachineManager,
  machinesList,
  machineColors,
  newMachineName,
  newMachineColor,
  editingMachine,
  editedMachineName,
  machineError,
  onAddMachine,
  onRemoveMachine,
  onEditMachine,
  onSaveMachineEdit,
  onCancelMachineEdit,
  onMachineColorChange,
  onToggleMachineManager,
  onShowHelpModal
}) => {
  const [showColorPicker, setShowColorPicker] = useState(false);

  return (
    <S.Wrapper show={showMachineManager}>
      <S.Header>
        <h3>Upravljanje Vozilima</h3>
        <S.ToggleButton onClick={onToggleMachineManager}>
          {showMachineManager ? 'Sakrij' : 'Prikaži'}
        </S.ToggleButton>
      </S.Header>

      <S.Content>
        <S.MachineTable>
          <thead>
            <S.TableHeaderRow>
              <th>Vozilo ID</th>
              <th>Boja</th>
              <th>Radnje</th>
            </S.TableHeaderRow>
          </thead>
          <tbody>
            {machinesList.map(machine => (
              <S.MachineRow key={machine}>
                <td>
                  {editingMachine === machine ? (
                    <S.EditInput
                      value={editedMachineName}
                      onChange={(e) => onEditMachine(machine, e.target.value)}
                      autoFocus
                    />
                  ) : (
                    machine
                  )}
                </td>
                <td>
                  <S.ColorPreview
                    color={machineColors[machine] || newMachineColor}
                    onClick={() => {
                      onMachineColorChange(machine);
                      setShowColorPicker(true);
                    }}
                  />
                </td>
                <td>
                  {editingMachine === machine ? (
                    <>
                      <S.SaveButton onClick={onSaveMachineEdit}/>
                      <S.CancelButton onClick={onCancelMachineEdit}/>
                    </>
                  ) : (
                    <>
                      <S.EditButton onClick={() => onEditMachine(machine)}/>
                      <S.DeleteButton onClick={() => onRemoveMachine(machine)}/>
                    </>
                  )}
                </td>
              </S.MachineRow>
            ))}
          </tbody>
        </S.MachineTable>

        <S.AddForm>
          <S.Input
            value={newMachineName}
            onChange={(e) => onAddMachine(e.target.value)}
            placeholder="Unesite ID vozila"
          />
          <S.ColorPreview
            color={newMachineColor}
            onClick={() => setShowColorPicker(true)}
          />
          <S.AddButton onClick={onAddMachine}>
            Dodaj Vozilo
          </S.AddButton>
        </S.AddForm>

        {machineError && (
          <S.ErrorMessage type={machineError.type}>
            {machineError.message}
          </S.ErrorMessage>
        )}
      </S.Content>
    </S.Wrapper>
  );
}

const OperatorManager = () => {
  // Operator manager implementation
}

const ShiftManager = () => {
  // Shift manager implementation
}

export default MachineManager;
// PropTypes validation
MachineManager.propTypes = {
  // Add prop validation here
};
