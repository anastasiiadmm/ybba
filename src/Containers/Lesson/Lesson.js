import React, { useEffect, useState } from 'react';

import WebSocket from 'Containers/WebSocket/WebSocket.js';
import LessonPage from 'Containers/LessonPage/LessonPage.js';
import { getLesson, resizeChildWebcam } from 'redux/lesson/actions.js';
import { useDispatch } from 'react-redux';
import { fetchLesson } from 'redux/lesson/lessonSlice';

const Lesson = (props) => {
  const { lessonId } = props.match.params;
  const dispatch = useDispatch();
  dispatch(fetchLesson(lessonId));
  //   console.log(testFetch);
  const initMessages = [
    getLesson({ lesson_id: lessonId }),
    resizeChildWebcam({
      lesson_id: lessonId,
      is_parent_webcam_increased: false,
    }),
  ];

  return (
    <WebSocket onOpenMessages={initMessages}>
      <LessonPage {...props} />
    </WebSocket>
  );
};

export default Lesson;
