import React from 'react';
import PropTypes from 'prop-types';
import { useFormContext } from 'react-hook-form';

function ProtocolSwitchField(props) {
  const { name, onChange, checked, disabled } = props;

  const { register, getValues } = useFormContext();

  const valueHandler = (value) => {
    const currentValue = getValues(name);
    if (value === `${currentValue}`) {
      return 'on';
    } else {
      return checked;
    }
  };

  const onChangeHandler = {
    ...(onChange
      ? { ...register(name, { onChange: onChange }) }
      : { ...register(name) }),
  };
  return (
    <span className="switch2">
      <label className="switch2__plus">
        <input
          disabled={disabled}
          type="radio"
          className="switch2__input"
          name={name}
          value="true"
          {...onChangeHandler}
          checked={valueHandler('true')}
        />
        <span>+</span>
      </label>
      <label className="switch2__minus">
        <input
          disabled={disabled}
          type="radio"
          className="switch2__input"
          name={name}
          value="false"
          {...onChangeHandler}
          checked={valueHandler('false')}
        />
        <span>&ndash;</span>
      </label>
    </span>
  );
}

ProtocolSwitchField.propTypes = {
  name: PropTypes.string,
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
};

export default ProtocolSwitchField;
