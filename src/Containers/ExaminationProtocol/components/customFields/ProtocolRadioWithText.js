import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useFormContext } from 'react-hook-form';

function ProtocolRadioWithText(props) {
  const { name, onChange, label, checked, value } = props;

  const { register } = useFormContext();

  const onChangeHandler = {
    ...(onChange
      ? { ...register(name, { onChange: onChange }) }
      : { ...register(name) }),
  };
  return (
    <div className="protocol__lbl-wrap wrap">
      <label className="radio2">
        <input type="radio" name={name} value={checked} checked={checked} />
        <span>{label}</span>
      </label>
      <input
        type="text"
        className="protocol__field"
        placeholder="Напечатать конкретный тип"
        {...register(`${name}.type`, { onChange: onChange })}
      ></input>
    </div>
  );
}

ProtocolRadioWithText.propTypes = {
  name: PropTypes.string,
  onChange: PropTypes.func,
  label: PropTypes.string,
};

export default ProtocolRadioWithText;
