import React from 'react';
import PropTypes from 'prop-types';
import { useFormContext } from 'react-hook-form';

function ProtocolRadioField(props) {
  const { name, onChange, label, checked, value } = props;

  const { register } = useFormContext();

  const onChangeHandler = {
    ...(onChange
      ? { ...register(name, { onChange: onChange }) }
      : { ...register(name) }),
  };

  return (
    <div className="protocol__lbl-wrap">
      <label className="radio2">
        <input
          type="radio"
          name={name}
          value={value}
          {...onChangeHandler}
          checked={checked}
        />
        <span>{label}</span>
      </label>
    </div>
  );
}

ProtocolRadioField.propTypes = {
  name: PropTypes.string,
  onChange: PropTypes.func,
  label: PropTypes.string,
  type: PropTypes.string,
  checked: PropTypes.bool,
  value: PropTypes.string,
};

export default ProtocolRadioField;
