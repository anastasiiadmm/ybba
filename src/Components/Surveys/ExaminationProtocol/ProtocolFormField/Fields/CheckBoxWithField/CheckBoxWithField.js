import React from 'react';
import { resolve } from 'utils/resolve/resolve.js';
import { Controller } from 'react-hook-form';
import PropTypes from 'prop-types';
import { addClasses } from 'utils/addClasses/addClasses.js';

const CheckBoxWithField = (props) => {

    const {
        name, control, classNameLabel, className, label, errors, defaultValue, disabled
    } = props

    return <>
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
                                params.field.onChange(e.target.checked ? params.field.value || defaultValue : '')
                            }}
                            checked={params.field.value}
                            disabled={disabled}
                        />
                        <span>{label}</span>
                    </label>
                    <input
                        type='text'
                        className='lbl-field'
                        onChange={params.field.onChange}
                        value={params.field.value}
                    />
                    <div className='form2__error'> {resolve(name, errors, '.')?.message} < /div>
                </>
            }}
        />
    </>
}

CheckBoxWithField.propTypes = {
    name: PropTypes.string,
    control: PropTypes.object,
    classNameLabel: PropTypes.string,
    className: PropTypes.string,
    label: PropTypes.string,
    errors: PropTypes.object,
    defaultValue: PropTypes.string,
    disabled: PropTypes.bool
}

export default CheckBoxWithField;