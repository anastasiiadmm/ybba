import React from 'react';
import PropTypes from 'prop-types';
import SpeechCardTextField from './customFields/SpeechCardTextField';

function SpeechCardBlock(props) {
  const { children, title, blockTitle, listOfFields, onChange, classNames } =
    props;

  return (
    <div className="speech-card-form__block">
      {title && <h1 className="speech-card-form__title">{title}</h1>}
      {blockTitle && (
        <h3 className="speech-card-form__title-block">{blockTitle}</h3>
      )}

      {listOfFields &&
        listOfFields.map((field, fieldIndex) => {
          const typeOfFields = {
            text: (
              <SpeechCardTextField
                type="text"
                label={field.label}
                name={field.name}
                onChange={onChange}
                value={field.value}
              />
            ),
            textarea: (
              <SpeechCardTextField
                type="textarea"
                label={field.label}
                name={field.name}
                onChange={onChange}
              />
            ),
          };

          return typeOfFields[field.type];
        })}
      {children}
    </div>
  );
}

SpeechCardBlock.propTypes = {
  title: PropTypes.string,
  blockTitle: PropTypes.string,
  listOfFields: PropTypes.array,
  onChange: PropTypes.func,
};

export default SpeechCardBlock;
