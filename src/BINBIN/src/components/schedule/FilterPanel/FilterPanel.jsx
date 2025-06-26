import React from 'react';
import * as S from './FilterPanel.styles';

function FilterPanel({
  showFilterPanel,
  activeFilters,
  dateFilter,
  shiftFilter,
  operatorFilter,
  machineFilter,
  weekDates,
  shifts,
  operators,
  machines,
  onDateFilterChange,
  onShiftFilterChange,
  onOperatorFilterChange,
  onMachineFilterChange,
  onResetFilters
}) {
  return (
    <S.Wrapper show={showFilterPanel}>
      <S.Header>
        <h3>Opcije Filtera</h3>
        <S.ResetButton onClick={onResetFilters}>
          Poništi Sve Filtere
        </S.ResetButton>
      </S.Header>

      <S.FilterGrid>
        <S.FilterGroup>
          <label>Datum</label>
          <S.Select 
            value={dateFilter}
            onChange={onDateFilterChange}
          >
            <option value="">Svi Datumi</option>
            {weekDates.map(date => (
              <option key={date.date} value={date.date}>
                {date.date} ({date.day})
              </option>
            ))}
          </S.Select>
        </S.FilterGroup>

        {/* Repeat for other filters */}
      </S.FilterGrid>

      {activeFilters > 0 && (
        <S.ActiveFilters>
          <span>Aktivni Filteri: </span>
          {dateFilter && <S.FilterBadge>Datum: {dateFilter}</S.FilterBadge>}
          {/* Other active filters */}
        </S.ActiveFilters>
      )}
    </S.Wrapper>
  );
}