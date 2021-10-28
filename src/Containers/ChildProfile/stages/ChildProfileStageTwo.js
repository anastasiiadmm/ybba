import React, {useContext, useState, useEffect} from 'react';

import {useDispatch, useSelector} from 'react-redux';
import {useHistory} from 'react-router';

import FormField from 'Components/FormField/FormField';
import {ChildProfileContext} from 'context/ChildProfileContext/ChildProfileContext.js';
import StagesLinks from 'Containers/ChildProfile/StagesLinks/StagesLinks';
import Actions from 'Containers/ChildProfile/Actions/Actions';
import {getChild, childSelector, clearChildState, updateChildAdditionalInfo} from 'redux/child/childSlice.js';


const ChildProfileStageTwo = () => {

    const fields = [
        'id',
        'child_does_not_speak_or_speaks_poorly',
        'put_the_sound_p',
        'put_the_sound_l',
        'put_sizzling',
        'put_other_sounds',
        'speech_therapy_massage_required',
        'stuttering_correction',
        'speech_development_delay_correction',
        'correction_of_mental_retardation',
        'help_other_text'
    ]

    const {
        childId,
        stage
    } = useContext(ChildProfileContext)

    const [childAdditionalData, setChildAdditionalData] = useState(null)
    const [isOtherInputActive, setIsOtherInputActive] = useState(false)

    const dispatch = useDispatch()
    const history = useHistory()

    const {child, updateChildAdditionalInfoSuccess} = useSelector(childSelector)

    const checkboxChangeHandler = (e, name) => {
        setChildAdditionalData({...childAdditionalData, [name]: e.target.checked})
    };
    const textInputChangeHandler = e => {
        setChildAdditionalData({...childAdditionalData, [e.target.name]: e.target.value})
    };
    const otherCheckboxChangeHandler = e => {
        setChildAdditionalData({...childAdditionalData, help_other_text: ''})
        setIsOtherInputActive(e.target.checked)
    }

    const updateAdditionalData = async e => {
        e.preventDefault()

        await dispatch(updateChildAdditionalInfo({
            additionalDataId: childAdditionalData.id,
            additionalInfo: childAdditionalData
        }))
        await dispatch(clearChildState())
    }

    const canGoToNext = !!(
        childAdditionalData && (
            childAdditionalData.child_does_not_speak_or_speaks_poorly ||
            childAdditionalData.put_the_sound_p ||
            childAdditionalData.put_the_sound_l ||
            childAdditionalData.put_sizzling ||
            childAdditionalData.put_other_sounds ||
            childAdditionalData.speech_therapy_massage_required ||
            childAdditionalData.stuttering_correction ||
            childAdditionalData.speech_development_delay_correction ||
            childAdditionalData.correction_of_mental_retardation ||
            childAdditionalData.help_other_text
        )
    )

    useEffect(() => {
        if (updateChildAdditionalInfoSuccess) {
            history.push(`/child-profile/${childId}/${parseInt(stage) + 1}`)
        }
    }, [updateChildAdditionalInfoSuccess])

    useEffect(() => {
        if (child) {
            let newChildAdditionalData = {}
            fields.forEach(field => {
                newChildAdditionalData[field] = child.additional_information[field]
            })
            setChildAdditionalData(newChildAdditionalData)
            console.log(child.additional_information.help_other_text)
            if (child.additional_information.help_other_text) {
                setIsOtherInputActive(true)
            }
        }
    }, [child])

    useEffect(() => {
        dispatch(clearChildState())
        dispatch(getChild(childId))
    }, [])

    return (
        <>
            <form onSubmit={updateAdditionalData}>
                <div className="profile-child">
                    <StagesLinks/>
                    <div className="profile-child__survey">


                        {childAdditionalData && (
                            <div className="form form_inner">
                                <ul className="profile-child__check-list">
                                    <li>
                                        <FormField
                                            type="checkbox"
                                            label="Ребёнок не говорит или плохо говорит"
                                            id="check-1"
                                            value={childAdditionalData.child_does_not_speak_or_speaks_poorly}
                                            onChange={e => checkboxChangeHandler(e, 'child_does_not_speak_or_speaks_poorly')}
                                        />
                                    </li>
                                    <li>
                                        <FormField
                                            type="checkbox"
                                            label="Поставить звук Р"
                                            id="check-2"
                                            onChange={e => checkboxChangeHandler(e, 'put_the_sound_p')}
                                            value={childAdditionalData.put_the_sound_p}
                                        />
                                    </li>
                                    <li>
                                        <FormField
                                            type="checkbox"
                                            label="Поставить звук Л"
                                            id="check-3"
                                            onChange={e => checkboxChangeHandler(e, 'put_the_sound_l')}
                                            value={childAdditionalData.put_the_sound_l}
                                        />
                                    </li>
                                    <li>
                                        <FormField
                                            type="checkbox"
                                            label="Поставить шипящие"
                                            id="check-4"
                                            onChange={e => checkboxChangeHandler(e, 'put_sizzling')}
                                            value={childAdditionalData.put_sizzling}
                                        />
                                    </li>
                                    <li>
                                        <FormField
                                            type="checkbox"
                                            label="Поставить другие звуки"
                                            id="check-5"
                                            onChange={e => checkboxChangeHandler(e, 'put_other_sounds')}
                                            value={childAdditionalData.put_other_sounds}
                                        />
                                    </li>
                                    <li>
                                        <FormField
                                            type="checkbox"
                                            label="Требуется логопедический массаж"
                                            id="check-6"
                                            onChange={e => checkboxChangeHandler(e, 'speech_therapy_massage_required')}
                                            value={childAdditionalData.speech_therapy_massage_required}
                                        />
                                    </li>
                                    <li>
                                        <FormField
                                            type="checkbox"
                                            label="Коррекция заикания"
                                            id="check-7"
                                            onChange={e => checkboxChangeHandler(e, 'stuttering_correction')}
                                            value={childAdditionalData.stuttering_correction}
                                        />
                                    </li>
                                    <li>
                                        <FormField
                                            type="checkbox"
                                            label="Коррекция задержки речевого развития (ЗРР)"
                                            id="check-8"
                                            onChange={e => checkboxChangeHandler(e, 'speech_development_delay_correction')}
                                            value={childAdditionalData.speech_development_delay_correction}
                                        />
                                    </li>
                                    <li>
                                        <FormField
                                            type="checkbox"
                                            label="Коррекция задержки психического развития (ЗПР)"
                                            id="check-9"
                                            onChange={e => checkboxChangeHandler(e, 'correction_of_mental_retardation')}
                                            value={childAdditionalData.correction_of_mental_retardation}
                                        />
                                    </li>
                                    <li>
                                        <FormField
                                            type="checkbox"
                                            label="Другое"
                                            id="inp-other"
                                            onChange={otherCheckboxChangeHandler}
                                            value={isOtherInputActive}
                                        />
                                        <textarea
                                            className="form__area profile-child__area"
                                            value={childAdditionalData.help_other_text}
                                            name="help_other_text"
                                            onChange={textInputChangeHandler}
                                            disabled={!isOtherInputActive}
                                        />
                                    </li>
                                </ul>
                            </div>
                        )}
                    </div>
                </div>
                <Actions
                    isNextButtonActive={canGoToNext}
                />

            </form>
        </>
    );
}

export default ChildProfileStageTwo;