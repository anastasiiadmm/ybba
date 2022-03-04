import React, { useEffect, useRef } from 'react';
import MainTitleBlock from 'Containers/MainDashboard/MainTitleBlock/MainTitleBlock.js';
import SidebarContainer from 'Components/SidebarContainer/SidebarContainer.js';
import SpeechCardView from 'Containers/Surveys/SpeechCardView/SpeechCardView.js';
import { useReactToPrint } from 'react-to-print';
import { useDispatch, useSelector } from 'react-redux';
import { clearSurveysState, getSpeechCard, surveysSelector } from 'redux/surveys/surveysSlice.js';
import { Spinner } from 'react-bootstrap';

import 'Containers/ChildSpeechCard/childSpeechCard.css'
import { toast } from 'react-toastify';
import { useHistory } from 'react-router';

const ChildSpeechCard = (props) => {

  const { childId } = props.match.params

  const speechCardRef = useRef(null)
  const dispatch = useDispatch()
  const history = useHistory()

  const { speechCard } = useSelector(surveysSelector)

  const handlePrint = useReactToPrint({
    content: () => speechCardRef.current
  })

  useEffect(() => {
    dispatch(getSpeechCard(childId))
  }, [childId, dispatch])

  useEffect(() => {
    if (speechCard && !speechCard.is_approved) {
      dispatch(clearSurveysState())
      history.push('/child-profile/')
      toast.warning('Речевая карта ещё не заполнена.')
    }
  }, [dispatch, history, speechCard])

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
        {speechCard && speechCard.is_approved ? (
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
