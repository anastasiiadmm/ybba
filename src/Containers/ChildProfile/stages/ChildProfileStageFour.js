import React, { useState, useEffect, useContext } from 'react';

import { useHistory } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';

import StagesLinks from 'Containers/ChildProfile/StagesLinks/StagesLinks';
import Actions from 'Containers/ChildProfile/Actions/Actions';
import FormField from 'Components/FormField/FormField';
import { updateChildAdditionalInfo, getChild, childSelector, clearChildState } from 'redux/child/childSlice.js';
import { ChildProfileContext } from 'context/ChildProfileContext/ChildProfileContext.js';


const ChildProfileStageFour = () => {

    const {
        childId,
        stage
    } = useContext(ChildProfileContext)

    const [data, setData] = useState(null)

    const { child, updateChildAdditionalInfoSuccess, errors } = useSelector(childSelector)

    const dispatch = useDispatch()
    const history = useHistory()

    const radioChangeHandler = value => {
        setData({ ...data, about_us: value, about_us_text: '' })
    }
    const inputChangeHandler = e => {
        setData({ ...data, [e.target.name]: e.target.value })
    }
    const addAboutUsData = async e => {
        e.preventDefault()
        if (child) {

            await dispatch(updateChildAdditionalInfo({
                additionalDataId: child.additional_information.id,
                additionalInfo: data
            }))
        }
    }

    const radioList = [
        'Социальные сети (ВКонтакте, Facebook)',
        'Поисковые системы',
        'От друзей',
        'Услышал по радио',
        'Реклама в интернете',
    ]

    const canGoToNextStage = (
        data?.about_us ||
        data?.about_us_text
    )

    useEffect(() => {
        if (updateChildAdditionalInfoSuccess) {
            history.push('/child-profile/')
            dispatch(clearChildState())
        }
    }, [dispatch, history, updateChildAdditionalInfoSuccess])

    useEffect(() => {
        if (child) {
            setData(child.additional_information)
        }
    }, [child])

    useEffect(() => {
        dispatch(getChild(childId))
    }, [childId, dispatch])

    return (
        <>
            <form onSubmit={addAboutUsData}>
                <div className='profile-child'>
                    <StagesLinks/>
                    <div className='profile-child__survey'>
                        <p className='profile-child__descr'>Как вы о нас узнали?</p>
                        {data && (
                            <ul className='profile-child__radio-list'>
                                {radioList.map((radio, index) => {
                                    return (
                                        <li>
                                            <FormField
                                                type='radio'
                                                label={radio}
                                                checked={data.about_us === radio}
                                                onChange={() => radioChangeHandler(radio)}
                                                id={`aboutUsRadio-${index}`}
                                            />
                                        </li>
                                    )
                                })}
                                <li>
                                    <FormField
                                        type='radio'
                                        label='Другое'
                                        checked={data.about_us === 'Другое'}
                                        onChange={() => radioChangeHandler('Другое')}
                                        id={`aboutUsRadio-228`}
                                    />
                                    <FormField
                                        type='text'
                                        className='field w-fix'
                                        id='fieldOther'
                                        disabled={data.about_us !== 'Другое'}
                                        onChange={inputChangeHandler}
                                        name='about_us_text'
                                        value={data.about_us_text}
                                        errors={errors}
                                    />
                                </li>
                            </ul>
                        )}
                    </div>
                </div>
                <Actions
                    isNextButtonActive={canGoToNextStage}
                    to={`/child-profile/${childId}/${parseInt(stage) - 1}`}
                />
            </form>
        </>
    );
}

export default ChildProfileStageFour;