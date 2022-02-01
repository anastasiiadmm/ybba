import React from 'react';
import PropTypes from 'prop-types';
import Field from 'Components/Field/Field.js';
import { relationOfProtocolToSpeechCard } from 'constants.js';

const SpeechCardFormField = (props) => {

    const {
        type
    } = props

    const inputFocusHandler = e => {
        const name = relationOfProtocolToSpeechCard[e.target.name]
        const element = document.querySelector(`[name="${name}"].protocolField`)

        if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
        }
    }

    switch (type) {
        case 'textarea': return <Field
            className='speech-card-form__area'
            classNameLabel='speech-card-form__lbl'
            id={props.name}
            onFocus={inputFocusHandler}
            {...props}
        />
        case 'number':
        case 'text': return <Field
            className='speech-card-form__field'
            classNameLabel='speech-card-form__lbl'
            id={props.name}
            onFocus={inputFocusHandler}
            {...props}
        />
        case 'radio': return <Field
            value={props.label.toLocaleLowerCase()}
            classNameLabel='radio2'
            onFocus={inputFocusHandler}
            {...props}
        />
        default: return <p>Field</p>
    }
}

SpeechCardFormField.propTypes = {
    type: PropTypes.oneOf([
        'textarea',
        'text',
        'radio',
        'number'
    ]),
    label: PropTypes.string,
    placeholder: PropTypes.string,
    register: PropTypes.func,
    name: PropTypes.string,
    errors: PropTypes.object,
    value: PropTypes.any,
    control: PropTypes.object,
    disabled: PropTypes.bool,
    onClick: PropTypes.func,
}

export default SpeechCardFormField;