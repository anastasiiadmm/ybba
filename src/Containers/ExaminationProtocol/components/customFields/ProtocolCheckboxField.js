import React from 'react';
import PropTypes from 'prop-types';
import { useFormContext } from 'react-hook-form';

function ProtocolCheckboxField(props) {
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
        <input value={label} type="checkbox" name={name} {...onChangeHandler} />
        <span>{label}</span>
      </label>
    </div>
  );
}

ProtocolCheckboxField.propTypes = {
  name: PropTypes.string,
  onChange: PropTypes.func,
  label: PropTypes.string,
};

export default ProtocolCheckboxField;
