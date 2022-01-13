import React from 'react';

import WebSocket from 'Containers/WebSocket/WebSocket.js';
import LessonPage from 'Containers/LessonPage/LessonPage.js';
import { getLesson, resizeChildWebcam } from 'redux/lesson/actions.js';
import JitsiBlock from 'Components/JitsiBlock/JitsiBlock.js';

const Lesson = (props) => {
    const { lessonId } = props.match.params;
    const initMessages = [
        getLesson({ lesson_id: lessonId }),
        resizeChildWebcam({
            lesson_id: lessonId,
            is_parent_webcam_increased: false,
        }),
    ];

    return (
        <WebSocket onOpenMessages={initMessages}>
            <JitsiBlock>
                <LessonPage {...props} />
            </JitsiBlock>
        </WebSocket>
    );
};

export default Lesson;
