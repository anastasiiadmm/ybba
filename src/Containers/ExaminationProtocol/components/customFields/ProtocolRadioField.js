import React from 'react';
import PropTypes from 'prop-types';
import { useFormContext } from 'react-hook-form';
import { addClasses } from 'utils/addClasses/addClasses.js';

function ProtocolRadioField(props) {
  const { name, onChange, label, checked, value, validationErrorMessage } =
    props;

  const { register, getValues } = useFormContext();

  const valueHandler = (value) => {
    const currentValue = getValues(name);
    if (`${value}`.toLowerCase() === `${currentValue}`) {
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
    <div className="protocol__lbl-wrap">
      <label
        className={addClasses('radio2', {
          validation_message:
            validationErrorMessage != null
              ? validationErrorMessage.length
              : null,
        })}
      >
        <input
          type="radio"
          name={name}
          value={`${value}`.toLowerCase()}
          {...onChangeHandler}
          checked={valueHandler(value)}
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
  validationErrorMessage: PropTypes.string,
};

export default ProtocolRadioField;
