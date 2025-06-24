import React from 'react';
import * as S from './OperatorDragPanel.styles';

function OperatorDragPanel({
  operators,
  operatorColors,
  onDragStart,
  onDragEnd
}) {
  return (
    <S.Wrapper>
      <S.Header>
        <h4>Povuci Operatore na Raspored:</h4>
        <S.CountBadge>{operators.length} operatora</S.CountBadge>
      </S.Header>

      <S.OperatorList>
        {operators.map(operator => (
          <S.OperatorItem
            key={operator}
            draggable
            color={operatorColors[operator]}
            onDragStart={() => onDragStart(operator)}
            onDragEnd={onDragEnd}
            onTouchStart={() => onDragStart(operator)}
          >
            {operator}
          </S.OperatorItem>
        ))}
      </S.OperatorList>
    </S.Wrapper>
  );
}