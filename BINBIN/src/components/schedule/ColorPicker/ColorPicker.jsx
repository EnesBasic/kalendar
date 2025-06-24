import React from 'react';
import { distinctColors } from '../constants/colors';
import * as S from './ColorPicker.styles';

function ColorPicker({
  showColorPicker,
  colorPickerTarget,
  newOperatorColor,
  newMachineColor,
  operatorColors,
  machineColors,
  shiftColors,
  editingShiftColor,
  editingMachineColor,
  onColorChange,
  onClose
}) {
  const getCurrentColor = () => {
    if (colorPickerTarget === "new") return newOperatorColor;
    if (colorPickerTarget === "new-machine") return newMachineColor;
    if (colorPickerTarget?.startsWith("shift-")) return shiftColors[editingShiftColor];
    if (colorPickerTarget?.startsWith("machine-")) return machineColors[editingMachineColor];
    return operatorColors[colorPickerTarget];
  };

  return (
    <S.Modal show={showColorPicker} onClick={onClose}>
      <S.Content onClick={e => e.stopPropagation()}>
        <S.Header>
          <h3>
            {colorPickerTarget === "new" && "Izaberite boju za novog operatora"}
            {/* Other conditions */}
          </h3>
          <S.CloseButton onClick={onClose}>
            <i className="fas fa-times" />
          </S.CloseButton>
        </S.Header>

        <S.ColorPreview color={getCurrentColor()}>
          {getCurrentColor()}
        </S.ColorPreview>

        <S.ColorGrid>
          {distinctColors.map(color => (
            <S.ColorSwatch
              key={color}
              color={color}
              active={color === getCurrentColor()}
              onClick={() => onColorChange(color)}
            />
          ))}
        </S.ColorGrid>

        <S.CustomColorInput>
          <label>Prilagođena boja:</label>
          <input
            type="text"
            value={getCurrentColor()}
            onChange={(e) => onColorChange(e.target.value)}
          />
          <S.ColorSample color={getCurrentColor()} />
        </S.CustomColorInput>

        <S.Footer>
          <S.SaveButton onClick={onClose}>Gotovo</S.SaveButton>
          <S.ResetButton onClick={() => onColorChange(
            colorPickerTarget === "new-machine" ? "#FF8C00" : "#4a9eff"
          )}>
            Poništi
          </S.ResetButton>
        </S.Footer>
      </S.Content>
    </S.Modal>
  );
}