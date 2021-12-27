import React from 'react';
import PropTypes from 'prop-types';
import { Controller } from 'react-hook-form'
import { addClasses } from 'utils/addClasses/addClasses.js';

const RadioField = (props) => {

    const {
        label, name, classNameLabel, className, register, value: radioValue, control, disabled
    } = props
    
    return (
        <Controller
            control={control}
            name={name}
            render={(params) => {
                return (
                    <label className={addClasses(classNameLabel, {
                        'disabled': disabled
                    })}>
                        <input
                            type='radio'
                            className={className}
                            value={radioValue}
                            onChange={e => {
                                params.field.onChange(e.target.value)
                            }}
                            checked={String(radioValue) === String(params.field.value)}
                            disabled={disabled}
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
    control: PropTypes.object,
    disabled: PropTypes.bool,
}

export default RadioField;