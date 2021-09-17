import React from 'react';

import PropTypes from 'prop-types';

import {validationMessagesMapping} from '../../mappings/validationErrors';

import PhoneInput from 'react-phone-input-2';
import ReactInputDateMask from 'react-input-date-mask';

import './formField.css'


const FormField = props => {
    const {
        type, onChange, className, name, required, label, value, pattern, id, maxLength, tooltipTitle, tooltipText,
        helpText, readOnly, errors, disabled, mask, showMaskOnFocus, showMaskOnHover
    } = props

    const toolTip = <>
        {(tooltipTitle || tooltipText) && <>
            <div className='form__inp-info form__inp-info_left'>
                {tooltipTitle && <b className='form__info-title'>{tooltipTitle}</b>}
                {tooltipText && tooltipText}
            </div>
        </>}
    </>

    let fieldErrors = null

    if (errors && typeof errors === 'object' && name in errors) {
        fieldErrors = errors[name]
        console.log(errors)
    }

    let field = <>
        <label className='form__label'>
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
                maxLength={maxLength}
                readOnly={readOnly}
                disabled={disabled}
            />
            {fieldErrors && fieldErrors.map(error => {
                return (
                    <div className='fieldErrorText'>
                        {validationMessagesMapping[error]}
                    </div>
                )
            })}
            {helpText && <div className='form__passw-info'>{helpText}</div>}
            {toolTip}
        </label>
    </>

    if (type === 'datepicker') {
        field = <>
            <label className='form__label'>
                {label}
                <ReactInputDateMask
                    mask={mask}
                    showMaskOnFocus={showMaskOnFocus}
                    showMaskOnHover={showMaskOnHover}
                    onChange={onChange}
                    type={type}
                    required={required}
                    className={className}
                    name={name}
                    value={value}
                    pattern={pattern}
                    id={id}
                    maxLength={maxLength}
                    readOnly={readOnly}
                    disabled={disabled}
                />
                {helpText && <div className='form__passw-info'>{helpText}</div>}
                {toolTip}
            </label>
        </>
    }

    if (type === 'phone') {
        field = <>
            <PhoneInput
                inputClass={className}
                country={'ru'}
                value={value}
                onChange={onChange}
                specialLabel={label}
            />
        </>
    }

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
    id: PropTypes.string,
    maxLength: PropTypes.string,
    tooltipTitle: PropTypes.string,
    tooltipText: PropTypes.string,
    helpText: PropTypes.string,
    onClick: PropTypes.func,
    readOnly: PropTypes.bool,
    errors: PropTypes.any,
    disabled: PropTypes.bool,
    mask: PropTypes.string,
    showMaskOnFocus: PropTypes.bool,
    showMaskOnHover: PropTypes.bool
}

export default React.memo(FormField);