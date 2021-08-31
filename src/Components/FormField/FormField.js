import React from 'react';

import PropTypes from "prop-types";

import datepickerIcon from '../../assets/img/datepicker.svg'
import './formField.css'


const FormField = props => {
    const {
        type, onChange, className, name, required, label, value, pattern, id, maxLength, tooltipTitle, tooltipText,
        helpText, onClick, readOnly
    } = props

    const toolTip = <>
        {(tooltipTitle || tooltipText) && <>
            <div className="form__inp-info form__inp-info_left">
                {tooltipTitle && <b className="form__info-title">{tooltipTitle}</b>}
                {tooltipText && tooltipText}
            </div>
        </>}
    </>

    let field = <>
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
                maxLength={maxLength}
                readOnly={readOnly}
            />
            {helpText && <div className="form__passw-info">{helpText}</div>}
            {toolTip}
        </label>
    </>

    if (type === 'datepicker') {
        field = <>
            <label className="form__label">
                {label}
                <div className={`${className} datepickerBlock`}>
                    <input
                        type={type}
                        required={required}
                        className='datepicker'
                        name={name}
                        onChange={onChange}
                        value={value}
                        pattern={pattern}
                        id={id}
                        maxLength={maxLength}
                        readOnly={readOnly}
                    />
                    <div>
                        <button
                            className='datepickerButton'
                            type='button'
                            onClick={onClick}
                        >
                            <img
                                src={datepickerIcon}
                                alt="datepicker"
                                className='datepickerIcon'
                            />
                        </button>
                    </div>
                </div>
                {helpText && <div className="form__passw-info">{helpText}</div>}
                {toolTip}
            </label>
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
}

export default React.memo(FormField);