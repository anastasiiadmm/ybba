import React from 'react';

import PropTypes from 'prop-types';

import CommonField from 'Components/Fields/CommonField.js';
import DateField from 'Components/Fields/DateField.js';
import SelectField from 'Components/Fields/SelectField.js';


export const Field = (props) => {

    const { type } = props

    switch (type) {
        case 'date': return <DateField {...props} />
        case 'select': return <SelectField {...props} />
        default: return <CommonField {...props} />
    }
}

Field.propTypes = {
    label: PropTypes.string,
    name: PropTypes.string,
    register: PropTypes.func,
    className: PropTypes.string,
    errors: PropTypes.object.isRequired,
    id: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    disabled: PropTypes.bool,
    value: PropTypes.any,
    type: PropTypes.string,
    control: PropTypes.object,
    configs: PropTypes.any,
    options: PropTypes.arrayOf(PropTypes.shape({
        value: PropTypes.string.isRequired,
        id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired
    }))
}

export default Field;