import React from "react";

export function useMachines(initialMachines = []) {
  // State
  const [machinesList, setMachinesList] = React.useState(initialMachines);
  const [machineColors, setMachineColors] = React.useState({
    "M58-J-467": "#FF8C00",
    "M53-E-929": "#4682B4",
    "A35-J-924": "#32CD32",
  });
  const [newMachineName, setNewMachineName] = React.useState("");
  const [newMachineColor, setNewMachineColor] = React.useState("#FF8C00");
  const [editingMachine, setEditingMachine] = React.useState(null);
  const [editedMachineName, setEditedMachineName] = React.useState("");
  const [machineError, setMachineError] = React.useState(null);

  // Handlers
  const handleAddMachine = () => {
    setMachineError(null);
    if (newMachineName.trim() === "") {
      setMachineError({
        type: "warning",
        message: "ID vozila ne može biti prazan!",
      });
      return;
    }

    if (machinesList.includes(newMachineName.trim())) {
      setMachineError({
        type: "error",
        message: "Vozilo sa ovim ID-om već postoji!",
      });
      return;
    }

    setMachinesList([...machinesList, newMachineName.trim()]);
    setMachineColors(prev => ({
      ...prev,
      [newMachineName.trim()]: newMachineColor,
    }));
    setNewMachineName("");
  };

  const handleRemoveMachine = (machine) => {
    setMachinesList(machinesList.filter(m => m !== machine));
    setMachineColors(prev => {
      const newColors = { ...prev };
      delete newColors[machine];
      return newColors;
    });
  };

  const handleEditMachine = (machine) => {
    setEditingMachine(machine);
    setEditedMachineName(machine);
  };

  const handleSaveMachineEdit = () => {
    if (editedMachineName.trim() === "") {
      setMachineError({ type: "warning", message: "ID vozila ne može biti prazan!" });
      return;
    }

    if (editedMachineName !== editingMachine && 
        machinesList.includes(editedMachineName.trim())) {
      setMachineError({ type: "error", message: "ID već postoji!" });
      return;
    }

    const updated = machinesList.map(m => 
      m === editingMachine ? editedMachineName.trim() : m
    );
    
    setMachinesList(updated);
    
    if (editedMachineName !== editingMachine) {
      setMachineColors(prev => ({
        ...prev,
        [editedMachineName.trim()]: prev[editingMachine],
      }));
    }

    setEditingMachine(null);
  };

  return {
    machines: machinesList,
    machineColors,
    newMachineName,
    newMachineColor,
    editingMachine,
    editedMachineName,
    machineError,
    setNewMachineName,
    setNewMachineColor,
    setEditedMachineName,
    handleAddMachine,
    handleRemoveMachine,
    handleEditMachine,
    handleSaveMachineEdit,
    cancelEdit: () => setEditingMachine(null),
    getMachineColor: (machine) => machineColors[machine] || "#FF8C00"
  };
}