import PropTypes from "prop-types";
import React from 'react';

const FormField = props => {
    const {
        type, onChange, className, name, required, label, value, pattern, id
    } = props

    const field = (
        <label className="form__label">
            {label}
            <input
                type={type}
                className={className}
                required={required}
                name={name}
                onChange={onChange}
                value={value}
                pattern={pattern}
                id={id}
            />
        </label>
    )

    return field;
}

FormField.propTypes = {
    type: PropTypes.string.isRequired,
    onChange: PropTypes.func,
    className: PropTypes.string,
    name: PropTypes.string,
    required: PropTypes.bool,
    label: PropTypes.string,
    value: PropTypes.any,
    pattern: PropTypes.string,
    id: PropTypes.string
}

export default React.memo(FormField);