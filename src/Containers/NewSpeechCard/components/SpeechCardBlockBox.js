import React from 'react';
import PropTypes from 'prop-types';
import SpeechCardTextField from './customFields/SpeechCardTextField';

function SpeechCardBlockBox(props) {
  const { children, boxTitle, listOfFields, onChange } = props;

  return (
    <div className="speech-card-form__box">
      <p className="speech-card-form__title-box">{boxTitle}</p>
      {listOfFields &&
        listOfFields.map((field, fieldIndex) => {
          const typeOfFields = {
            text: (
              <SpeechCardTextField
                type="text"
                label={field.label}
                name={field.name}
                onChange={onChange}
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
    </div>
  );
}

SpeechCardBlockBox.propTypes = {
  boxTitle: PropTypes.string,
  listOfFields: PropTypes.array,
};

export default SpeechCardBlockBox;
