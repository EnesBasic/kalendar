import React from 'react';
import ScheduleRow from './ScheduleRow';
import { generateDatesForWeek } from '../utils/dateUtils';
import { dayAbbreviations } from '../constants/timeConfig';
import * as S from './ScheduleTable.styles';

function ScheduleTable({
  scheduleData,
  machines,
  shifts,
  operators,
  operatorColors,
  shiftColors,
  isEditing,
  activeFilters,
  dateFilter,
  shiftFilter,
  operatorFilter,
  machineFilter,
  onCellChange,
  onShiftChange,
  highlightedOperator,
  dragTarget,
  onDragEnter,
  onDrop,
  loading,
  viewMode
}) {
  const weekDates = generateDatesForWeek((selectedWeek && selectedWeek.dateRange) || []);
  const filteredData = getFilteredData();

  if (loading) {
    return <div>Loading schedule...</div>;
  }

  if (!scheduleData || !Array.isArray(scheduleData)) {
    return <div>No schedule data available.</div>;
  }

  return (
    <S.TableWrapper>
      <S.Table>
        <S.TableHead>
          <S.TableRow>
            <S.TableHeader>DATUM</S.TableHeader>
            <S.TableHeader>D</S.TableHeader>
            <S.TableHeader>S</S.TableHeader>
            {machines.map(machine => (
              <S.MachineHeader 
                key={machine}
                color={machineColors[machine]}
              >
                {machine}
              </S.MachineHeader>
            ))}
          </S.TableRow>
        </S.TableHead>

        <S.TableBody>
          {activeFilters > 0 ? (
            <FilteredView filteredData={filteredData} />
          ) : (
            <RegularView 
              weekDates={weekDates}
              shifts={shifts}
              // ... other props
            />
          )}
        </S.TableBody>
      </S.Table>
    {/* <table border="1" cellPadding="8">
      <thead>
        <tr>
          <th>Time</th>
          <th>Event</th>
        </tr>
      </thead>
      <tbody>
        {Array.isArray(data) && data.map((item, idx) => (
          <tr key={idx}>
            <td>{item.time}</td>
            <td>{item.event}</td>
          </tr>
        ))}
      </tbody>
    </table> */}
    </S.TableWrapper>
  );
}

function RegularView({ weekDates, shifts, /* ... */ }) {
  return weekDates.map(dateInfo => (
    <React.Fragment key={dateInfo.date}>
      {shifts.map((shift, shiftIndex) => (
        <ScheduleRow
          key={`${dateInfo.date}-${shift}`}
          dateInfo={dateInfo}
          shift={shift}
          shiftIndex={shiftIndex}
          // ... pass all needed props
        />
      ))}
    </React.Fragment>
  ));
}

function FilteredView({ filteredData }) {
  return filteredData?.map(dateEntry => (
    <React.Fragment key={dateEntry.date}>
      {dateEntry.shifts.map(shiftEntry => (
        <FilteredRow
          key={`${dateEntry.date}-${shiftEntry.time}`}
          dateEntry={dateEntry}
          shiftEntry={shiftEntry}
          // ... pass needed props
        />
      ))}
    </React.Fragment>
  ));
}

export default ScheduleTable;

// Usage example (to be removed or commented out in the actual component file)
// <ScheduleTable
//   scheduleData={mockData}
//   machines={[]}
//   shifts={[]}
//   operators={[]}
//   operatorColors={{}}
//   shiftColors={{}}
//   isEditing={false}
//   activeFilters={{}}
//   dateFilter={null}
//   loading={false}
//   viewMode="daily"
//   // Remove these if not supported:
//   // onSort={vi.fn()}
//   // sortBy=""
//   // sortDirection="asc"
//   // searchTerm=""
//   // onSearchTermChange={vi.fn()}
// />