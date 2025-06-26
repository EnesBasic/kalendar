import { createContext, useContext, useReducer } from 'react';

const ScheduleContext = createContext();

const initialState = {
  scheduleData: [],
  operators: [],
  machines: [],
  shifts: [],
  // ... other state
};

function scheduleReducer(state, action) {
  switch (action.type) {
    case 'SET_SCHEDULE_DATA':
      return { ...state, scheduleData: action.payload };
    // ... other actions
    default:
      return state;
  }
}

export function ScheduleProvider({ children }) {
  const [state, dispatch] = useReducer(scheduleReducer, initialState);

  return (
    <ScheduleContext.Provider value={{ state, dispatch }}>
      {children}
    </ScheduleContext.Provider>
  );
}

export function useScheduleContext() {
  return useContext(ScheduleContext);
}