import PropTypes from 'prop-types';

import React from 'react';
import * as S from './HelpModal.styles';

function HelpModal({
  showHelpModal,
  activeManager,
  onClose
}) {
  const helpContent = {
    operators: {
      title: "Pomoć za Operatore",
      sections: [
        {
          title: "Dodavanje operatora",
          content: "Unesite ime operatora i izaberite boju..."
        },
        // More sections
      ]
    },
    // Other help content
  };

  return (
    <S.Modal show={showHelpModal} onClick={onClose}>
      <S.Content onClick={e => e.stopPropagation()}>
        <S.Header>
          <h2>{helpContent[activeManager]?.title || 'Pomoć'}</h2>
          <S.CloseButton onClick={onClose}>
            <i className="fas fa-times"/>
          </S.CloseButton>
        </S.Header>

        <S.Body>
          {helpContent[activeManager]?.sections?.map((section, index) => (
            <S.Section key={index}>
              <h3>{section.title}</h3>
              <p>{section.content}</p>
              {section.steps && (
                <ol>
                  {section.steps.map((step, i) => (
                    <li key={i}>{step}</li>
                  ))}
                </ol>
              )}
            </S.Section>
          ))}
        </S.Body>

        <S.Footer>
          <S.CloseButton onClick={onClose}>
            Zatvori
          </S.CloseButton>
        </S.Footer>
      </S.Content>
    </S.Modal>
  );
}
// PropTypes validation
HelpModal.propTypes = {
  // Add prop validation here
};
