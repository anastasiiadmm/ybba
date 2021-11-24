import React from 'react';
import PropTypes from 'prop-types';
import { useFormContext } from 'react-hook-form';

function ProtocolTextAreaField(props) {
  const { name, onChange, label, type, placeholder, withBg } = props;

  const { register } = useFormContext();

  const onChangeHandler = {
    ...(onChange
      ? { ...register(name, { onChange: onChange }) }
      : { ...register(name) }),
  };

  const textAreaClassName = withBg ? 'protocol__area bg' : 'protocol__area';

  return (
    <>
      <label className="protocol__lbl">{label}</label>
      <textarea
        className={textAreaClassName}
        name={name}
        placeholder={placeholder}
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
};

export default ProtocolTextAreaField;
