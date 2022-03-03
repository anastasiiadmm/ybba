import React, { useEffect, useState } from 'react';

import { useForm, useWatch } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';

import { useHistory } from 'react-router';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';


import Questionnaire from 'Containers/Surveys/Questionnaire/Questionnaire.js';
import Container from 'Components/Container/Container.js';

import 'Containers/ParentQuestionnaire/parentQuestionnaire.css'
import { getProtocol, surveysSelector, updateProtocol } from 'redux/surveys/surveysSlice.js';
import { addClasses } from 'utils/addClasses/addClasses.js';
import { authSelector } from 'redux/auth/authSlice.js';
import ProtocolRow from 'Components/Surveys/ExaminationProtocol/ProtocolRow/ProtocolRow';

import logo2 from 'assets/img/logo2.svg'

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
    }, [history, protocol, reset, user.profile.id])

    return (
        <Container className='all-page2 overflow-hidden'>
            <div className={addClasses('form2 questionnaireBlock questionnaireScrollbar', {
                'centerContent': !protocol
            })}>
                {protocol ?
                    <>
                        <div className='form2__logo'>
                            <img src={logo2} alt='бибарыба.ру diagnostika.com' />
                        </div>
                        <h1 className='form2__title form2__title_qu'>Вопросы о развитии ребенка</h1>
                        <p className='form2__descr'>Это позволит более точно описать заключение и рекомендации.
                            На заполнение потребуется не более 15 минут.
                        </p>
                        <Questionnaire register={register} />
                        <ProtocolRow>
                            <Button component={Link} to='/' className='btn2'>Отправить ответы</Button>
                        </ProtocolRow>
                    </> : <Spinner animation='grow'/>
                }
            </div>
        </Container>
    );
}

export default ParentQuestionnaire;
