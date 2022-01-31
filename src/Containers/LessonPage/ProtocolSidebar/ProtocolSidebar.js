import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { examinationProtocolStatuses, lessonStatuses } from 'constants.js';
import {
  closeProtocol, getProtocol,
  getSpeechCard,
  moveDataFromProtocolToSpeechCard,
  surveysSelector,
} from 'redux/surveys/surveysSlice';

import ExaminationProtocol from 'Containers/Surveys/ExaminationProtocol/ExaminationProtocol';
import { Spinner } from 'react-bootstrap';

const ProtocolSidebar = (props) => {
  const {
    isUnityInitialized,
    lesson,
  } = props;

  const { protocol } = useSelector(surveysSelector);

  const dispatch = useDispatch();
  const onProtocolFinish = async data => {
    if (lesson.status !== lessonStatuses.finished) {
      toast.warning('Сначала завершите занятие')
    } else {
      await dispatch(moveDataFromProtocolToSpeechCard({
        childId: protocol.child.id,
        data: data
      }))
      await dispatch(closeProtocol())
      if (lesson?.student?.id) {
        await dispatch(getSpeechCard(lesson.student.id))
      }
    }
  }

  useEffect(() => {
    if (lesson && lesson?.student?.id && !isUnityInitialized) {
      dispatch(getProtocol(lesson.student.id))
    }
  }, [dispatch, isUnityInitialized, lesson])

  useEffect(() => {
    if (lesson && protocol && protocol.status === examinationProtocolStatuses.closed) {
      dispatch(getSpeechCard(lesson.student.id))
    }
  }, [dispatch, lesson, protocol])

  return (
    <div className='gamef__sidebar'>
      <div className='gamef__sidebar-in overflow-scroll customScrollbar'>
        {protocol && lesson ?
          <ExaminationProtocol
            protocol={protocol}
            lesson={lesson}
            onSubmit={onProtocolFinish}
          /> :
          <div className='h-100 w-100 d-flex align-items-center justify-content-center'>
            <Spinner animation='grow'/>
          </div>}
      </div>
    </div>
  );
};

export default ProtocolSidebar;
