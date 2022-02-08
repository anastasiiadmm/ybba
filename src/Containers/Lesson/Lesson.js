import React, { useCallback, useEffect, useMemo, useState } from 'react';

import WebSocket from 'Containers/WebSocket/WebSocket.js';
import LessonPage from 'Containers/LessonPage/LessonPage.js';
import { getLesson, resizeChildWebcam } from 'redux/lesson/actions.js';
import JitsiBlock from 'Components/JitsiBlock/JitsiBlock.js';
import { LessonContext } from 'context/LessonContext/LessonContext';
import {
    ACTIVE_GAME,
    IS_DISPLAY_RESTART, IS_GAME_MUTED, IS_GAME_TIP_OPEN, IS_MUTED,
    IS_TEACHER_HAVE_CONTROL_ON_GAME,
    IS_UNITY_INITIALIZED, UNITY_CONTEXT,
} from 'constants.js';

const Lesson = (props) => {
    const { lessonId } = props.match.params;
    const initMessages = [
        getLesson({ lesson_id: lessonId }),
        resizeChildWebcam({
            lesson_id: lessonId,
            is_parent_webcam_increased: false,
        }),
    ];

    // If true => add `border: 2px solid red` to main elements
    const [isStyleDebug, setIsStyleDebug] = useState(false);

    const [unityContext, setUnityContext] = useState(null);
    const [activeGame, setActiveGame] = useState(null);
    const [isTeacherHaveControlOnGame, setIsTeacherHaveControlOnGame] = useState(false);
    const [isUnityInitialized, setIsUnityInitialized] = useState(false);
    const [isDisplayRestart, setIsDisplayRestart] = useState(false);
    const [isGameTipOpen, setIsGameTipOpen] = useState(false);
    const [isGameMuted, setIsGameMuted] = useState(false);
    const [isMuted, setIsMuted] = useState(false);

    const listOfSets = useMemo(() => ({
        [UNITY_CONTEXT]: setUnityContext,
        [ACTIVE_GAME]: setActiveGame,
        [IS_TEACHER_HAVE_CONTROL_ON_GAME]: setIsTeacherHaveControlOnGame,
        [IS_UNITY_INITIALIZED]: setIsUnityInitialized,
        [IS_DISPLAY_RESTART]: setIsDisplayRestart,
        [IS_GAME_TIP_OPEN]: setIsGameTipOpen,
        [IS_GAME_MUTED]: setIsGameMuted,
        [IS_MUTED]: setIsMuted,
    }), []);

    const changeLessonContextProperty = useCallback((lessonContextProperty, newValue) => {
        console.log(lessonContextProperty);
        listOfSets[lessonContextProperty](newValue);
    }, [listOfSets]);

    const lessonContext = {
        changeLessonContextProperty,

        unityContext,
        activeGame,
        isTeacherHaveControlOnGame,
        isUnityInitialized,
        isDisplayRestart,
        isGameTipOpen,
        isGameMuted,
        isMuted,

        isStyleDebug,
        lessonId,
    }

    return (
        <WebSocket onOpenMessages={initMessages}>
            <JitsiBlock>
                <LessonContext.Provider value={lessonContext}>
                    <LessonPage {...props} />
                </LessonContext.Provider>
            </JitsiBlock>
        </WebSocket>
    );
};

export default Lesson;
