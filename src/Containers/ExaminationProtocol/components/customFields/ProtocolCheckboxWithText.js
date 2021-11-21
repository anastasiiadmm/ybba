import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useFormContext } from 'react-hook-form';

function ProtocolCheckboxWithText(props) {
  const { name, onChange, label } = props;

  const { register } = useFormContext();

  const onChangeHandler = {
    ...(onChange
      ? { ...register(name, { onChange: onChange }) }
      : { ...register(name) }),
  };
  return (
    <div className="protocol__lbl-wrap">
      <label className="check2">
        <input
          value={label}
          type="checkbox"
          name={name}
          {...register(`${name}.main`, { onChange: onChange })}
        />
        <span>{label}</span>
      </label>
      <input
        type="text"
        className="lbl-field"
        {...register(`${name}.desc`, { onChange: onChange })}
      ></input>
    </div>
  );
}

ProtocolCheckboxWithText.propTypes = {
  name: PropTypes.string,
  onChange: PropTypes.func,
  label: PropTypes.string,
};

export default ProtocolCheckboxWithText;
