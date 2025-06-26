import React from 'react';
import * as S from './ShiftManager.styles';

function ShiftManager({
  showShiftColorManager,
  shifts,
  shiftColors,
  newShiftTime,
  editingShift,
  editedShiftTime,
  shiftError,
  onAddShift,
  onRemoveShift,
  onEditShift,
  onSaveShiftEdit,
  onCancelShiftEdit,
  onShiftColorChange,
  onToggleShiftManager
}) {
  return (
    <S.Wrapper show={showShiftColorManager}>
      <S.Header>
        <h3>Upravljanje Smjenama</h3>
        <S.ToggleButton onClick={onToggleShiftManager}>
          {showShiftColorManager ? 'Sakrij' : 'Prikaži'}
        </S.ToggleButton>
      </S.Header>

      <S.Content>
        <S.ShiftTable>
          <thead>
            <tr>
              <th>Smjena</th>
              <th>Boja</th>
              <th>Radnje</th>
            </tr>
          </thead>
          <tbody>
            {shifts.map(shift => (
              <S.ShiftRow key={shift}>
                <td>
                  {editingShift === shift ? (
                    <S.EditInput
                      value={editedShiftTime}
                      onChange={(e) => onEditShift(shift, e.target.value)}
                    />
                  ) : (
                    shift
                  )}
                </td>
                <td>
                  <S.ColorPreview
                    color={shiftColors[shift]}
                    onClick={() => onShiftColorChange(shift)}
                  />
                </td>
                <td>
                  {editingShift === shift ? (
                    <>
                      <S.SaveButton onClick={onSaveShiftEdit}/>
                      <S.CancelButton onClick={onCancelShiftEdit}/>
                    </>
                  ) : (
                    <>
                      <S.EditButton onClick={() => onEditShift(shift)}/>
                      <S.DeleteButton onClick={() => onRemoveShift(shift)}/>
                    </>
                  )}
                </td>
              </S.ShiftRow>
            ))}
          </tbody>
        </S.ShiftTable>

        <S.AddForm>
          <S.Input
            value={newShiftTime}
            onChange={(e) => onAddShift(e.target.value)}
            placeholder="HH.MM-HH.MM"
          />
          <S.AddButton onClick={onAddShift}>
            Dodaj Smjenu
          </S.AddButton>
        </S.AddForm>

        {shiftError && (
          <S.ErrorMessage>{shiftError.message}</S.ErrorMessage>
        )}
      </S.Content>
    </S.Wrapper>
  );
}