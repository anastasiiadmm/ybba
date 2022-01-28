import React, { useRef, useEffect } from 'react';
import MainTitleBlock from 'Containers/MainDashboard/MainTitleBlock/MainTitleBlock.js';
import SidebarContainer from 'Components/SidebarContainer/SidebarContainer.js';
import SpeechCardView from 'Containers/Surveys/SpeechCardView/SpeechCardView.js';
import { useReactToPrint } from 'react-to-print';
import { useDispatch, useSelector } from 'react-redux';
import { getSpeechCard, surveysSelector } from 'redux/surveys/surveysSlice.js';
import { Spinner } from 'react-bootstrap';

import 'Containers/ChildSpeechCard/childSpeechCard.css'

const ChildSpeechCard = (props) => {

    const { childId } = props.match.params

    const speechCardRef = useRef(null)
    const dispatch = useDispatch()

    const { speechCard } = useSelector(surveysSelector)

    const handlePrint = useReactToPrint({
        content: () => speechCardRef.current
    })

    useEffect(() => {
        dispatch(getSpeechCard(childId))
    }, [childId, dispatch])

    return (
        <SidebarContainer>
            <MainTitleBlock
                leftTitle='Речевая карта'
                rightTitle={
                    <button
                        className='link-download border-0'
                        onClick={handlePrint}
                    >Скачать</button>
                }
            />
            {speechCard ? (
                <SpeechCardView
                    ref={speechCardRef}
                    speechCard={speechCard}
                />
            ) : (
                <div className='w-100 h-100 d-flex align-items-center justify-content-center'>
                    <Spinner animation='grow'/>
                </div>
            )}
        </SidebarContainer>
    );
};

export default ChildSpeechCard;