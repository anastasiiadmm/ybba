import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useFormContext } from 'react-hook-form';
import { addClasses } from 'utils/addClasses/addClasses.js';

function ProtocolTextField(props) {
  const {
    name,
    onChange,
    label,
    placeholder,
    validationErrorMessage,
    disabled,
    withBG,
  } = props;

  const { register } = useFormContext();

  const onChangeHandler = {
    ...(onChange
      ? { ...register(name, { onChange: onChange }) }
      : { ...register(name) }),
  };

  const textFieldClassName = withBG ? 'protocol__field bg' : 'protocol__field';

  return (
    <>
      <label className="protocol__lbl">{label}</label>
      <input
        disabled={disabled}
        type="text"
        className={addClasses(textFieldClassName, {
          validation_message:
            validationErrorMessage != null
              ? validationErrorMessage.length
              : null,
        })}
        name={name}
        placeholder={
          // validationErrorMessage != null
          //   ? `${validationErrorMessage}: ${placeholder}`
          //   :
          placeholder
        }
        {...onChangeHandler}
      />
    </>
  );
}

ProtocolTextField.propTypes = {
  name: PropTypes.string,
  onChange: PropTypes.func,
  label: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  validationErrorMessage: PropTypes.string,
  disabled: PropTypes.bool,
  withBG: PropTypes.bool,
};

export default ProtocolTextField;
