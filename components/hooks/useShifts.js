import React from "react";

export function useShifts(initialShifts = {
  "08.00-16.00": "#4a9eff",
  "21.00-05.00": "#8b5cf6"
}) {
  // State
  const [shiftColors, setShiftColors] = React.useState(initialShifts);
  const [newShiftTime, setNewShiftTime] = React.useState("");
  const [editingShift, setEditingShift] = React.useState(null);
  const [editedShiftTime, setEditedShiftTime] = React.useState("");
  const [shiftError, setShiftError] = React.useState(null);

  // Derived state
  const shifts = Object.keys(shiftColors);

  // Handlers
  const handleAddShift = () => {
    if (!newShiftTime.trim()) {
      setShiftError({ type: "warning", message: "Unesite vrijeme smjene!" });
      return;
    }

    if (shiftColors[newShiftTime.trim()]) {
      setShiftError({ type: "error", message: "Smjena već postoji!" });
      return;
    }

    setShiftColors(prev => ({
      ...prev,
      [newShiftTime.trim()]: "#4a9eff"
    }));
    setNewShiftTime("");
  };

  const handleShiftColorChange = (shift, color) => {
    setShiftColors(prev => ({ ...prev, [shift]: color }));
  };

  const handleRemoveShift = (shift) => {
    const newColors = { ...shiftColors };
    delete newColors[shift];
    setShiftColors(newColors);
  };

  const handleSaveShiftEdit = () => {
    if (!editedShiftTime.trim()) {
      setShiftError({ type: "warning", message: "Unesite vrijeme smjene!" });
      return;
    }

    if (editedShiftTime !== editingShift && shiftColors[editedShiftTime]) {
      setShiftError({ type: "error", message: "Smjena već postoji!" });
      return;
    }

    const newColors = {
      ...shiftColors,
      [editedShiftTime]: shiftColors[editingShift]
    };
    
    if (editedShiftTime !== editingShift) {
      delete newColors[editingShift];
    }

    setShiftColors(newColors);
    setEditingShift(null);
  };

  return {
    shifts,
    shiftColors,
    newShiftTime,
    editingShift,
    editedShiftTime,
    shiftError,
    setNewShiftTime,
    setEditedShiftTime,
    handleAddShift,
    handleRemoveShift,
    handleShiftColorChange,
    handleEditShift: (shift) => {
      setEditingShift(shift);
      setEditedShiftTime(shift);
    },
    handleSaveShiftEdit,
    cancelEdit: () => setEditingShift(null),
    getShiftColor: (shift) => shiftColors[shift] || "#4a9eff"
  };
}