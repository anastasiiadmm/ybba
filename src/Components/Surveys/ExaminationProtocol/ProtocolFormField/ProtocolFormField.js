import React from 'react';
import PropTypes from 'prop-types';
import Field from 'Components/Field/Field.js';
import CheckBoxWithField
    from 'Components/Surveys/ExaminationProtocol/ProtocolFormField/Fields/CheckBoxWithField/CheckBoxWithField.js';
import { lowercaseFirstLetter } from 'utils/common/commonUtils.js';

const ProtocolFormField = (props) => {

    const {
        type
    } = props

    switch (type) {
        case 'textarea': return <Field
            {...props}
            className='protocol__area bg protocolField'
            classNameLabel='protocol__lbl'
            id={props.name}
        />
        case 'number':
        case 'text': return <Field
            className='protocol__field protocolField'
            classNameLabel='protocol__lbl'
            id={props.name}
            {...props}
        />
        case 'radio': return <Field
            value={lowercaseFirstLetter(props.label)}
            classNameLabel='radio2 protocolField'
            className='protocolField'
            {...props}
        />
        case 'checkbox': return <Field
            classNameLabel='check2'
            className='protocolField'
            {...props}
        />
        case 'checkboxWithField': return <CheckBoxWithField
            classNameLabel='check2'
            className='protocolField'
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
        'checkbox',
        'checkboxWithField'
    ]),
    label: PropTypes.string,
    placeholder: PropTypes.string,
    register: PropTypes.func,
    name: PropTypes.string,
    errors: PropTypes.object,
    value: PropTypes.any,
    control: PropTypes.object,
    disabled: PropTypes.bool
}

export default ProtocolFormField;