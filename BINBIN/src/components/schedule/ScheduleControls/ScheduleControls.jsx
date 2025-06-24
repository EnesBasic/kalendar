import React from 'react';
import * as S from './ScheduleControls.styles';

function ScheduleControls({
  isEditing,
  onBack,
  onSave,
  onCancel,
  onToggleEdit,
  onToggleSearch,
  showSearch,
  searchTerm,
  onSearch,
  onClearSearch,
  highlightedOperator,
  onToggleFilterPanel,
  showFilterPanel,
  activeFilters
}) {
  return (
    <S.ControlsContainer>
      <S.BackButton onClick={onBack}>
        <i className="fas fa-arrow-left"/>
      </S.BackButton>

      <S.MainControls>
        {isEditing ? (
          <>
            <S.SaveButton onClick={onSave}>
              <i className="fas fa-save"/>
            </S.SaveButton>
            <S.CancelButton onClick={onCancel}>
              <i className="fas fa-times"/>
            </S.CancelButton>
          </>
        ) : null}
      </S.MainControls>

      <S.RightControls>
        <S.FilterButton
          active={showFilterPanel || activeFilters > 0}
          onClick={onToggleFilterPanel}
        >
          <i className="fas fa-filter"/>
          {activeFilters > 0 && (
            <S.Badge>{activeFilters}</S.Badge>
          )}
        </S.FilterButton>

        <S.SearchButton
          active={showSearch}
          onClick={onToggleSearch}
        >
          <i className="fas fa-search"/>
        </S.SearchButton>

        <S.EditButton
          active={isEditing}
          onClick={onToggleEdit}
        >
          <i className={`fas fa-${isEditing ? 'times' : 'edit'}`}/>
        </S.EditButton>
      </S.RightControls>

      {showSearch && (
        <S.SearchContainer>
          <S.SearchInput
            value={searchTerm}
            onChange={onSearch}
            placeholder="Pretraži operatore..."
          />
          {searchTerm && (
            <S.ClearSearch onClick={onClearSearch}>
              <i className="fas fa-times"/>
            </S.ClearSearch>
          )}
          {highlightedOperator && (
            <S.HighlightBadge
              color={getOperatorColor(highlightedOperator)}
            >
              {highlightedOperator}
            </S.HighlightBadge>
          )}
        </S.SearchContainer>
      )}
    </S.ControlsContainer>
  );
}