import React from 'react';
import { Spinner } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { examinationProtocolStatuses, userRoles } from 'constants.js';

import { surveysSelector } from 'redux/surveys/surveysSlice';
import { addClasses } from 'utils/addClasses/addClasses';
import { checkUserRole } from 'utils/user';

import SpeechCard from 'Containers/Surveys/SpeechCard/SpeechCard';
import Timer from '../LessonHeader/Timer/Timer';

const LessonSpeechCard = (props) => {
  const {
    lesson,
  } = props;

  const history = useHistory();

  const { protocol, speechCard } = useSelector(surveysSelector);

  const onSpeechCardFinish = () => {
    history.push('/')
  }

  return (
    <div
      className={addClasses('w-100 d-flex', {
        'align-items-center justify-content-center': !speechCard
      })}
      style={{ height: '100vh' }}
    >
      {protocol && (
        protocol.status === examinationProtocolStatuses.open ||
        checkUserRole(userRoles.parent)
      ) ?
        <h1 className='text-white'>Урок завершен</h1> :
        (speechCard ?
            <>
              <div className='speach-card-form__timer'>
                <Timer
                  startTime={lesson.time_slot.start_time}
                  endTime={lesson.time_slot.end_time}
                />
              </div>
              <SpeechCard
                speechCard={speechCard}
                onSubmit={onSpeechCardFinish}
                lesson={lesson}
              />
            </> :
            <Spinner animation='grow' variant='light'/>
        )
      }
    </div>
  );
};

export default LessonSpeechCard;
