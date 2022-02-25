import React, { useCallback, useEffect, useMemo, useState } from 'react';

import WebSocket from 'Containers/WebSocket/WebSocket.js';
import LessonPage from 'Containers/LessonPage/LessonPage.js';
import { getLesson, resizeChildWebcam } from 'redux/lesson/actions.js';
import JitsiBlock from 'Components/JitsiBlock/JitsiBlock.js';
import { LessonContext } from 'context/LessonContext/LessonContext';
import {
    ACTIVE_GAME,
    IS_DISPLAY_RESTART,
    IS_GAME_MUTED,
    IS_GAME_TIP_OPEN,
    IS_INTRO_BUTTON_VISIBLE,
    IS_MUTED,
    IS_NEXT_BUTTON_VISIBLE,
    IS_PREV_BUTTON_VISIBLE, IS_REPEAT_BUTTON_VISIBLE,
    IS_TEACHER_HAVE_CONTROL_ON_GAME,
    IS_UNITY_INITIALIZED,
    UNITY_CONTEXT,
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
    const [isStyleDebug] = useState(false);

    const [unityContext, setUnityContext] = useState(null);
    const [activeGame, setActiveGame] = useState(null);
    const [isTeacherHaveControlOnGame, setIsTeacherHaveControlOnGame] = useState(false);
    const [isUnityInitialized, setIsUnityInitialized] = useState(false);
    const [isDisplayRestart, setIsDisplayRestart] = useState(false);
    const [isGameTipOpen, setIsGameTipOpen] = useState(false);
    const [isGameMuted, setIsGameMuted] = useState(false);
    const [isMuted, setIsMuted] = useState(false);

    const [isIntroButtonVisible, setIsIntroButtonVisible] = useState(true);
    const [isNextButtonVisible, setIsNextButtonVisible] = useState(true);
    const [isPrevButtonVisible, setIsPrevButtonVisible] = useState(true);
    const [isRepeatButtonVisible, setIsRepeatButtonVisible] = useState(true);

    const listOfSets = useMemo(() => ({
        [UNITY_CONTEXT]: setUnityContext,
        [ACTIVE_GAME]: setActiveGame,
        [IS_TEACHER_HAVE_CONTROL_ON_GAME]: setIsTeacherHaveControlOnGame,
        [IS_UNITY_INITIALIZED]: setIsUnityInitialized,
        [IS_DISPLAY_RESTART]: setIsDisplayRestart,
        [IS_GAME_TIP_OPEN]: setIsGameTipOpen,
        [IS_GAME_MUTED]: setIsGameMuted,
        [IS_MUTED]: setIsMuted,
        [IS_INTRO_BUTTON_VISIBLE]: setIsIntroButtonVisible,
        [IS_NEXT_BUTTON_VISIBLE]: setIsNextButtonVisible,
        [IS_PREV_BUTTON_VISIBLE]: setIsPrevButtonVisible,
        [IS_REPEAT_BUTTON_VISIBLE]: setIsRepeatButtonVisible,
    }), []);

    const changeLessonContextProperty = useCallback((lessonContextProperty, newValue) => {
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

        isIntroButtonVisible,
        isNextButtonVisible,
        isPrevButtonVisible,
        isRepeatButtonVisible,

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
