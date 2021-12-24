import React, { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { Spinner, Button } from 'react-bootstrap';

import { surveysSelector, getProtocol, getSpeechCard } from 'redux/surveys/surveysSlice.js';
import ExaminationProtocol from 'Containers/Surveys/ExaminationProtocol/ExaminationProtocol.js';
import SpeechCard from 'Containers/Surveys/SpeechCard/SpeechCard.js';

import 'Containers/Surveys/EditSurveys/editSurveys.css'
import { examinationProtocolStatuses } from 'constants.js';

const EditSurveys = (props) => {

    const { childId } = props.match.params

    const { protocol, speechCard } = useSelector(surveysSelector)
    const dispatch = useDispatch()

    const onProtocolSubmit = data => {
        console.log('asd protocol', data)
    }

    const onSpeechCardSubmit = data => {
        console.log('asd speech card', data)
    }

    const scrollToEndOfProtocol = () => {
        const finishProtocolButton = document.querySelector('#finish-protocol')
        finishProtocolButton.scrollIntoView({ behavior: 'smooth' });
    }

    useEffect(() => {
        dispatch(getProtocol(childId))
        dispatch(getSpeechCard(childId))
    }, [childId, dispatch])

    return (
        <div className='gamef position-relative overflow-hidden'>
            <div className='speechCardBlock'>
                {speechCard ?
                    <SpeechCard
                        speechCard={speechCard}
                        onSubmit={onSpeechCardSubmit}
                    /> :
                    <div className='h-100 w-100 d-flex align-items-center justify-content-center'>
                        <Spinner animation='grow'/>
                    </div>
                }
            </div>
            <div className='gamef__sidebar'>
                <div className='gamef__sidebar-in overflow-scroll customScrollbar'>
                    {protocol && protocol.lesson ?
                        <>
                            {protocol.status !== examinationProtocolStatuses.closed && (
                                <Button
                                    variant='outline-primary'
                                    className='skipButton'
                                    onClick={scrollToEndOfProtocol}
                                >
                                    Пропустить протокол
                                </Button>
                            )}
                            <ExaminationProtocol
                                protocol={protocol}
                                lesson={protocol.lesson}
                                onSubmit={onProtocolSubmit}
                            />
                        </> :
                        <div className='h-100 w-100 d-flex align-items-center justify-content-center'>
                            <Spinner animation='grow'/>
                        </div>
                    }
                </div>
            </div>
        </div>
    );
}

export default EditSurveys;