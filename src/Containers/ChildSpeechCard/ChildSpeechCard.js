import React, { useRef, useEffect } from 'react';
import MainTitleBlock from 'Containers/MainDashboard/MainTitleBlock/MainTitleBlock.js';
import SidebarContainer from 'Components/SidebarContainer/SidebarContainer.js';
import SpeechCardView from 'Containers/Surveys/SpeechCardView/SpeechCardView.js';
import { useReactToPrint } from 'react-to-print';
import { useDispatch, useSelector } from 'react-redux';
import { getSpeechCard, surveysSelector } from 'redux/surveys/surveysSlice.js';

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
            {speechCard && (
                <SpeechCardView
                    ref={speechCardRef}
                    speechCard={speechCard}
                />
            )}
        </SidebarContainer>
    );
}

export default ChildSpeechCard;