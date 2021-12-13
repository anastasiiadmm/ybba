import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useFormContext } from 'react-hook-form';

function ProtocolCheckboxWithText(props) {
  const { name, onChange, label } = props;
  const [checked, setChecked] = useState(false);
  const { register, getValues } = useFormContext();

  const onChangeHandler = {
    ...(onChange
      ? {
          ...register(name, {
            onChange: (e) => {
              e.target.value ? setChecked(true) : setChecked(false);
              onChange(e);
            },
          }),
        }
      : { ...register(name) }),
  };

  // const checkHandler = ()=>{
  //   const value = getValues(name);
  // }
  return (
    <div className="protocol__lbl-wrap">
      <label className="check2">
        <input type="checkbox" checked={checked} />
        <span>{label}</span>
      </label>
      <input
        type="text"
        name={name}
        className="lbl-field"
        {...onChangeHandler}
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
