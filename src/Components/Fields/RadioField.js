import React from 'react';
import PropTypes from 'prop-types';
import { Controller } from 'react-hook-form'
import { addClasses } from 'utils/addClasses/addClasses.js';
import { resolve } from 'utils/resolve/resolve';

const RadioField = (props) => {

    const {
        label, name, classNameLabel, className, register, errors, value: radioValue, control, disabled
    } = props

    return (
        <Controller
            control={control}
            name={name}
            render={(params) => {
                return (
                    <label
                        className={addClasses(classNameLabel, {
                            'disabled': disabled
                        })}
                        name={name}
                    >
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
                        <span className={addClasses(className, {
                            'error': resolve(name, errors, '.')
                        })}>{label}</span>
                    </label>
                        <div className='form2__error'> {resolve(name, errors, '.')?.message} < /div>
                    </>

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