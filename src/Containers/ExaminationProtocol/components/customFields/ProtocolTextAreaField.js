import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useFormContext } from 'react-hook-form';
import { addClasses } from 'utils/addClasses/addClasses.js';

function ProtocolTextAreaField(props) {
  const {
    name,
    onChange,
    label,
    placeholder,
    withBg,
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

  const textAreaClassName = withBG ? 'protocol__area bg' : 'protocol__area';

  return (
    <>
      <label className="protocol__lbl">{label}</label>
      <textarea
        disabled={disabled}
        className={addClasses(textAreaClassName, {
          validation_message:
            validationErrorMessage != null
              ? validationErrorMessage.length
              : null,
        })}
        name={name}
        placeholder={
          validationErrorMessage != null
            ? `${validationErrorMessage}: ${placeholder}`
            : placeholder
        }
        {...onChangeHandler}
      />
    </>
  );
}

ProtocolTextAreaField.propTypes = {
  name: PropTypes.string,
  onChange: PropTypes.func,
  label: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  validationErrorMessage: PropTypes.string,
  disabled: PropTypes.bool,
  withBG: PropTypes.bool,
};

export default ProtocolTextAreaField;
