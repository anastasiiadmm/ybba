import React from 'react';
import PropTypes from 'prop-types';
import { resolve } from 'utils/resolve/resolve.js';
import { Controller } from 'react-hook-form';
import { addClasses } from 'utils/addClasses/addClasses.js';

const CheckBoxField = (props) => {

    const {
        label, name, classNameLabel, className, errors, control, disabled
    } = props

    return (
        <Controller
            name={name}
            control={control}
            render={params => {
                return <>
                    <label
                        className={addClasses(classNameLabel, {
                            'disabled': disabled
                        })}
                    >
                        <input
                            type='checkbox'
                            className={className}
                            value={true}
                            onChange={(e) => {
                                params.field.onChange(e.target.checked)
                            }}
                            checked={params.field.value}
                            disabled={disabled}
                        />
                        <span className={addClasses(className, {
                            'error': resolve(name, errors, '.')
                        })}>{label}</span>
                    </label>
                    <div className='form2__error'> {resolve(name, errors, '.')?.message} < /div>
                </>
            }}
        />
    );
}

CheckBoxField.propTypes = {
    label: PropTypes.string,
    classNameLabel: PropTypes.string,
    className: PropTypes.string,
    value: PropTypes.string,
    control: PropTypes.object,
    errors: PropTypes.object,
    disabled: PropTypes.bool,
}

export default CheckBoxField;