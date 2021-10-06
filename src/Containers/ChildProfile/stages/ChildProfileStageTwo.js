import React, {useContext, useState} from 'react';

import FormField from '../../../Components/FormField/FormField';
import {ChildProfileContext} from '../../../context/ChildProfileContext/ChildProfileContext';


const ChildProfileStageTwo = () => {

    const {
        checkboxChangeHandler,
        textInputChangeHandler,
        childAdditionalData,
        setChildAdditionalData
    } = useContext(ChildProfileContext);

    const [isOtherInputActive, setIsOtherInputActive] = useState(false)

    const otherCheckboxChangeHandler = e => {
        setChildAdditionalData({...childAdditionalData, help_other_text: ''})
        setIsOtherInputActive(e.target.checked)
    }

    return (

        <ul className='profile-child__check-list'>
            <li>
                <FormField
                    type='checkbox'
                    label='Ребёнок не говорит или плохо говорит'
                    id='check-1'
                    value={childAdditionalData.child_does_not_speak_or_speaks_poorly}
                    onChange={checkboxChangeHandler}
                    name='child_does_not_speak_or_speaks_poorly'
                />
            </li>
            <li>
                <FormField
                    type='checkbox'
                    label='Поставить звук Р'
                    id='check-2'
                    onChange={checkboxChangeHandler}
                    value={childAdditionalData.put_the_sound_p}
                    name='put_the_sound_p'
                />
            </li>
            <li>
                <FormField
                    type='checkbox'
                    label='Поставить звук Л'
                    id='check-3'
                    onChange={checkboxChangeHandler}
                    value={childAdditionalData.put_the_sound_l}
                    name='put_the_sound_l'
                />
            </li>
            <li>
                <FormField
                    type='checkbox'
                    label='Поставить шипящие'
                    id='check-4'
                    onChange={checkboxChangeHandler}
                    value={childAdditionalData.put_sizzling}
                    name='put_sizzling'
                />
            </li>
            <li>
                <FormField
                    type='checkbox'
                    label='Поставить другие звуки'
                    id='check-5'
                    onChange={checkboxChangeHandler}
                    value={childAdditionalData.put_other_sounds}
                    name='put_other_sounds'
                />
            </li>
            <li>
                <FormField
                    type='checkbox'
                    label='Требуется логопедический массаж'
                    id='check-6'
                    onChange={checkboxChangeHandler}
                    value={childAdditionalData.speech_therapy_massage_required}
                    name='speech_therapy_massage_required'
                />
            </li>
            <li>
                <FormField
                    type='checkbox'
                    label='Коррекция заикания'
                    id='check-7'
                    onChange={checkboxChangeHandler}
                    value={childAdditionalData.stuttering_correction}
                    name='stuttering_correction'
                />
            </li>
            <li>
                <FormField
                    type='checkbox'
                    label='Коррекция задержки речевого развития (ЗРР)'
                    id='check-8'
                    onChange={checkboxChangeHandler}
                    value={childAdditionalData.speech_development_delay_correction}
                    name='speech_development_delay_correction'
                />
            </li>
            <li>
                <FormField
                    type='checkbox'
                    label='Коррекция задержки психического развития (ЗПР)'
                    id='check-9'
                    onChange={checkboxChangeHandler}
                    value={childAdditionalData.correction_of_mental_retardation}
                    name='correction_of_mental_retardation'
                />
            </li>
            <li>
                <FormField
                    type='checkbox'
                    label='Другое'
                    id='inp-other'
                    onChange={otherCheckboxChangeHandler}
                    value={isOtherInputActive}
                />
                <textarea
                    className='form__area profile-child__area'
                    value={childAdditionalData.help_other_text}
                    name='help_other_text'
                    onChange={textInputChangeHandler}
                    disabled={!isOtherInputActive}
                />
            </li>
        </ul>
    );
}

export default ChildProfileStageTwo;