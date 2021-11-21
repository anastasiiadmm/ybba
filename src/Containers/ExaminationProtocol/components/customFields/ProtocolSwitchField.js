import React from 'react';
import PropTypes from 'prop-types';
import { useFormContext } from 'react-hook-form';

function ProtocolSwitchField(props) {
  const { name, onChange, checked } = props;

  const { register } = useFormContext();

  const onChangeHandler = {
    ...(onChange
      ? { ...register(name, { onChange: onChange }) }
      : { ...register(name) }),
  };
  return (
    <span className="switch2">
      <label className="switch2__plus">
        <input
          type="radio"
          className="switch2__input"
          name={name}
          value="true"
          {...onChangeHandler}
          checked={checked}
        />
        <span>+</span>
      </label>
      <label className="switch2__minus">
        <input
          type="radio"
          className="switch2__input"
          name={name}
          value="false"
          {...onChangeHandler}
          checked={checked}
        />
        <span>&ndash;</span>
      </label>
    </span>
  );
}

ProtocolSwitchField.propTypes = {
  name: PropTypes.string,
  onChange: PropTypes.func,
};

export default ProtocolSwitchField;
