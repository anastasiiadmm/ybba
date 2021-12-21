import React, { useEffect, useState } from 'react';

import { useForm, useWatch } from 'react-hook-form';

import Questionnaire from 'Containers/Surveys/Questionnaire/Questionnaire.js';
import Container from 'Components/Container/Container.js';

import 'Containers/ParentQuestionnaire/parentQuestionnaire.css'
import { useDispatch, useSelector } from 'react-redux';
import { getProtocol, surveysSelector, updateProtocol } from 'redux/surveys/surveysSlice.js';
import { Spinner } from 'react-bootstrap';
import { addClasses } from 'utils/addClasses/addClasses.js';
import { authSelector } from 'redux/auth/authSlice.js';
import { useHistory } from 'react-router';

const ParentQuestionnaire = (props) => {

    const { childId } = props.match.params

    const dispatch = useDispatch()
    const history = useHistory()

    const { protocol } = useSelector(surveysSelector)
    const { user } = useSelector(authSelector)

    let timer = null

    const { register, formState: { errors }, reset, setValue, control, watch, getValues } = useForm()
    const data = useWatch({ control })

    useEffect(() => {
        if (protocol) {
            clearTimeout(timer)
            timer = setTimeout(() => {
                const formData = { ...data }
                formData.lesson = data.lesson.id
                dispatch(updateProtocol({
                    protocolId: protocol.id,
                    newData: formData,
                }))
            }, 1000)
        }
        return () => clearTimeout(timer)
    }, [data])

    useEffect(() => {
        dispatch(getProtocol(childId))
    }, [childId, dispatch])

    useEffect(() => {
        if (protocol) {
            if (protocol.parent.id !== user.profile.id) {
                history.push('/')
            }
            reset(protocol)
        }
    }, [protocol])

    return (
        <Container className='overflow-hidden'>
            <div className={addClasses('questionnaireBlock questionnaireScrollbar', {
                'centerContent': !protocol
            })}>
                {protocol ?
                    <Questionnaire register={register} /> :
                    <Spinner animation='grow'/>
                }
            </div>
        </Container>
    );
}

export default ParentQuestionnaire;