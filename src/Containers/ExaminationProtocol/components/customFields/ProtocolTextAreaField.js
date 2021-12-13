import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useFormContext } from 'react-hook-form';
import { addClasses } from 'utils/addClasses/addClasses.js';

function ProtocolTextAreaField(props) {
  const { name, onChange, label, placeholder, withBg, validationErrorMessage } =
    props;

  const { register } = useFormContext();

  const onChangeHandler = {
    ...(onChange
      ? { ...register(name, { onChange: onChange }) }
      : { ...register(name) }),
  };

  const textAreaClassName = withBg ? 'protocol__area bg' : 'protocol__area';
  // const validationCheck = () => {
  //   return validationErrorMessage != null && validationErrorMessage[name]?.message
  //     ? true
  //     : false;
  // };
  return (
    <>
      <label className="protocol__lbl">{label}</label>
      <textarea
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
};

export default ProtocolTextAreaField;
