import React from 'react';

import WebSocket from 'Containers/WebSocket/WebSocket.js';
import LessonPage from 'Containers/LessonPage/LessonPage.js';
import { getLesson } from 'redux/lesson/actions.js';


const Lesson = (props) => {

    const { lessonId } = props.match.params

    const initMessages = [getLesson({ lesson_id: lessonId })]

    return (
        <WebSocket
            onOpenMessages={initMessages}
        >
            <LessonPage {...props}/>
        </WebSocket>
    );
}

export default Lesson;