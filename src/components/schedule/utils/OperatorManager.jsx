import React from 'react';
import {
  OperatorManagerContainer,
  OperatorHeader,
  OperatorGrid,
  OperatorCard,
  OperatorAvatar,
  OperatorName,
  OperatorTitle,
  OperatorSkills,
  SkillBadge
} from './OperatorManager.styles';

const OperatorManager = ({ operators }) => {
  return (
    <OperatorManagerContainer>
      <OperatorHeader>
        <h2>Operator Management</h2>
        <button>Add Operator</button>
      </OperatorHeader>

      <OperatorGrid>
        {operators?.map(operator => (
          <OperatorCard key={operator.id} $isActive={operator.isActive}>
            <OperatorAvatar>
              {operator.name.charAt(0)}
            </OperatorAvatar>
            <OperatorName>{operator.name}</OperatorName>
            <OperatorTitle>{operator.title}</OperatorTitle>
            <OperatorSkills>
              {operator.skills?.map((skill, index) => (
                <SkillBadge 
                  key={index} 
                  $skillLevel={skill.level}
                >
                  {skill.name}
                </SkillBadge>
              ))}
            </OperatorSkills>
          </OperatorCard>
        ))}
      </OperatorGrid>
    </OperatorManagerContainer>
  );
};

export default OperatorManager;