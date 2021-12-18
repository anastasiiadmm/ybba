import React from 'react';
import PropTypes from 'prop-types';
import { Controller } from 'react-hook-form'

const RadioField = (props) => {

    const {
        label, name, classNameLabel, className, register, value: radioValue, control
    } = props
    
    return (
        <Controller
            control={control}
            name={name}
            render={(params) => {
                return (
                    <label className={classNameLabel}>
                        <input
                            type='radio'
                            className={className}
                            value={radioValue}
                            onChange={e => {
                                params.field.onChange(e.target.value)
                            }}
                            checked={String(radioValue) === String(params.field.value)}
                        />
                        <span>{label}</span>
                    </label>
                )
            }}
        />
    );
}

RadioField.propTypes = {
    label: PropTypes.string,
    name: PropTypes.string,
    register: PropTypes.func,
    classNameLabel: PropTypes.string,
    className: PropTypes.string,
    value: PropTypes.string,
    control: PropTypes.object
}

export default RadioField;