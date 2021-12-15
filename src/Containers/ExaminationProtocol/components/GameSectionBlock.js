import React from 'react';
import PropTypes from 'prop-types';
import ProtocolBlock from './ProtocolBlock';

function GameSectionBlock({
  gameTitle,
  title,
  titleBlock,
  subtitleBlock,
  subtitleBlock2,
  gameFields,
  gameReviewFields,
  sectionReviewFields,
  sectionReviewTitle,
  fieldTypes,
  titleBlockSpan,
  placeholder,
  secondPlaceholder,
  inputChangeHandler,
  validationErrors,
}) {
  return (
    <>
      <p className="protocol__title-game">{gameTitle}</p>
      <ProtocolBlock
        validationErrors={validationErrors}
        title={title}
        titleBlock={titleBlock}
        subtitleBlock={subtitleBlock}
        subtitleBlock2={subtitleBlock2}
        titleBlockSpan={titleBlockSpan}
        listOfFields={gameFields}
        fieldTypes={fieldTypes}
        placeholder={placeholder}
        secondPlaceholder={secondPlaceholder}
        inputChangeHandler={inputChangeHandler}
      />
      <ProtocolBlock
        validationErrors={validationErrors}
        listOfFields={gameReviewFields}
        fieldTypes={fieldTypes}
        inputChangeHandler={inputChangeHandler}
        secondPlaceholder={secondPlaceholder}
      >
        <p className="protocol__result-title">Варианты заключения:</p>
      </ProtocolBlock>
      {sectionReviewFields && (
        <ProtocolBlock
          validationErrors={validationErrors}
          title={sectionReviewTitle}
          listOfFields={sectionReviewFields}
          fieldTypes={fieldTypes}
          secondPlaceholder={secondPlaceholder}
          inputChangeHandler={inputChangeHandler}
        >
          <p className="protocol__result-title">Варианты заключения:</p>
        </ProtocolBlock>
      )}
    </>
  );
}

GameSectionBlock.propTypes = {
  title: PropTypes.string,
  titleBlock: PropTypes.string,
  titleBlockSpan: PropTypes.string,
  subtitle: PropTypes.string,
  subtitleBlock: PropTypes.string,
  subtitleBlock2: PropTypes.string,
  sectionReviewTitle: PropTypes.string,
  placeholder: PropTypes.string,
  secondPlaceholder: PropTypes.string,
  gameFields: PropTypes.array,
  gameReviewFields: PropTypes.array,
  sectionReviewFields: PropTypes.array,
  fieldTypes: PropTypes.object,
  inputChangeHandler: PropTypes.func,
};

export default GameSectionBlock;
