import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useFormContext } from 'react-hook-form';
import id from 'date-fns/locale/id';

function ProtocolRadioWithText(props) {
  const { name, onChange, label, id, disabled } = props;
  const [checked, setChecked] = useState(false);
  const [value, setValue] = useState('');
  const { register, getValues } = useFormContext();

  const textInput = document.getElementById(`${name}_${id}`);

  const onChangeHandler = {
    ...(onChange
      ? {
          ...register(name, {
            onChange: onChange,
          }),
        }
      : { ...register(name) }),
  };

  const textOnChange = (e) => {
    if (e.target.value) {
      setChecked(true);
      setValue(e.target.value);
    } else {
      setChecked(false);
      setValue('');
    }
  };

  useEffect(() => {
    if (checked === false) {
      setValue('');
    }
  }, [checked]);

  return (
    <div className="protocol__lbl-wrap wrap">
      <label className="radio2">
        <input
          type="radio"
          value={value}
          {...onChangeHandler}
          checked={checked}
        />
        <span>{label}</span>
      </label>
      <input
        disabled={disabled}
        type="text"
        className="protocol__field"
        placeholder="Напечатать конкретный тип"
        value={checked === false ? '' : value}
        id={`${name}_${id}`}
        // {...register(`${name}.type`, { onChange: onChange })}
        onChange={textOnChange}
      ></input>
    </div>
  );
}

ProtocolRadioWithText.propTypes = {
  name: PropTypes.string,
  onChange: PropTypes.func,
  label: PropTypes.string,
  id: PropTypes.number,
  disabled: PropTypes.bool,
};

export default ProtocolRadioWithText;
