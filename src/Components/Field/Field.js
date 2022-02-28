import React from 'react';

import PropTypes from 'prop-types';

import CommonField from 'Components/Fields/CommonField.js';
import DateField from 'Components/Fields/DateField.js';
import SelectField from 'Components/Fields/SelectField.js';
import PhoneField from 'Components/Fields/PhoneField';
import TextareaField from 'Components/Fields/TextareaField.js';
import RadioField from 'Components/Fields/RadioField.js';
import CheckBoxField from 'Components/Fields/CheckBoxField.js';


export const Field = (props) => {

    const { type } = props

    switch (type) {
        case 'date': return <DateField {...props} />
        case 'select': return <SelectField {...props} />
        case 'phone': return <PhoneField {...props} />
        case 'textarea': return <TextareaField {...props} />
        case 'radio': return <RadioField {...props} />
        case 'checkbox': return <CheckBoxField {...props} />
        default: return <CommonField {...props} />
    }
}

Field.propTypes = {
    label: PropTypes.string,
    name: PropTypes.string,
    register: PropTypes.func,
    className: PropTypes.string,
    errors: PropTypes.object.isRequired,
    onBlur: PropTypes.func,
    id: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    disabled: PropTypes.bool,
    value: PropTypes.any,
    type: PropTypes.oneOf([
        'date',
        'select',
        'phone',
        'textarea',
        'radio',
        'checkbox',
    ]),
    control: PropTypes.object,
    configs: PropTypes.any,
    options: PropTypes.arrayOf(PropTypes.shape({
        value: PropTypes.string.isRequired,
        id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired
    })),
    classNameLabel: PropTypes.string,
    tooltipMessage: PropTypes.string,
    onChange: PropTypes.func,
    pattern: PropTypes.string,
}

export default Field;
