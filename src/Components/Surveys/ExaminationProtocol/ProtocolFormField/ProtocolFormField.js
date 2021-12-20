import React from 'react';
import PropTypes from 'prop-types';
import Field from 'Components/Field/Field.js';

const ProtocolFormField = (props) => {

    const {
        type
    } = props

    switch (type) {
        case 'textarea': return <Field
            {...props}
            className='protocol__area bg'
            classNameLabel='protocol__lbl'
            id={props.name}
        />
        case 'number':
        case 'text': return <Field
            className='protocol__field'
            classNameLabel='protocol__lbl'
            id={props.name}
            {...props}
        />
        case 'radio': return <Field
            value={props.label.toLocaleLowerCase()}
            classNameLabel='radio2'
            {...props}
        />
        case 'checkbox': return <Field
            classNameLabel='check2'
            {...props}
        />
        default: return <p>Field</p>
    }
}

ProtocolFormField.propTypes = {
    type: PropTypes.oneOf([
        'textarea',
        'text',
        'radio',
        'number',
        'checkbox'
    ]),
    label: PropTypes.string,
    placeholder: PropTypes.string,
    register: PropTypes.func,
    name: PropTypes.string,
    errors: PropTypes.object,
    value: PropTypes.any,
    control: PropTypes.object
}

export default ProtocolFormField;