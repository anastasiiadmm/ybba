import React from 'react';
import PropTypes from 'prop-types';
import { useFormContext } from 'react-hook-form';

function SpeechCardTextField(props) {
  const { label, value, type, onChange, name, className } = props;

  const { register } = useFormContext();

  const onChangeHandler = {
    ...(onChange
      ? { ...register(name, { onChange: onChange }) }
      : { ...register(name) }),
  };

  return (
    <div className="speech-card-form__row">
      <label className="speech-card-form__lbl">{label}</label>
      {type === 'text' ? (
        <input
          type="text"
          className={className ? className : 'speech-card-form__field'}
          value={value}
          {...onChangeHandler}
        />
      ) : (
        <textarea
          className={className ? className : 'speech-card-form__area'}
          {...onChangeHandler}
        />
      )}
    </div>
  );
}

SpeechCardTextField.propTypes = {
  type: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  className: PropTypes.string,
};

export default SpeechCardTextField;
