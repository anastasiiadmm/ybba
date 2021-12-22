import React, { useState, useEffect, useContext, useCallback, useRef, } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import Unity, { UnityContext } from 'react-unity-webgl';
import { ProgressBar, Spinner } from 'react-bootstrap';
import { toast } from 'react-toastify';

import { lessonSelector, clearLessonState } from 'redux/lesson/lessonSlice.js';
import { changeActiveGame, changeLessonStatus, resizeChildWebcam, } from 'redux/lesson/actions.js';
import {
    LESSON_STATUS_FINISHED,
    GAME_FILE_TYPE_LOADER,
    GAME_FILE_TYPE_DATA,
    GAME_FILE_TYPE_FRAMEWORK,
    GAME_FILE_TYPE_WASM,
    gameActions,
    userRoles,
    envs,
    frontUrls,
    lessonStatuses,
    examinationProtocolStatuses,
} from 'constants.js';
import { WsContext } from 'context/WsContext/WsContext.js';
import { addClasses } from 'utils/addClasses/addClasses.js';
import Webcam from 'Containers/LessonPage/Webcam/Webcam.js';
import Timer from 'Containers/LessonPage/Timer/Timer.js';
import { checkUserRole } from 'utils/user.js';
import Drag from 'Components/Drag/Drag.js';
import JitsiBlock from 'Components/JitsiBlock/JitsiBlock.js';
import { initSessionStack, defineUser, stopSessionStackRecording, } from 'utils/sessionstack/utils.js';
import { authSelector } from 'redux/auth/authSlice.js';
import { checkEnv } from 'utils/common/commonUtils.js';
import { BrowserPermissionsContext } from 'context/BrowserPermissionsContext/BrowserPermissionsContext';
import { sendNotificationToMe } from 'redux/notifications/notificationsSlice.js';
import config from 'config.js';

import 'Containers/LessonPage/lessonPage.css';
import {
    getProtocol,
    surveysSelector,
    getSpeechCard,
    updateProtocol,
    closeProtocol,
    createSpeechCard
} from 'redux/surveys/surveysSlice.js';
import ExaminationProtocol from 'Containers/Surveys/ExaminationProtocol/ExaminationProtocol.js';
import SpeechCard from 'Containers/Surveys/SpeechCard/SpeechCard.js';

const LessonPage = (props) => {
    const { isMicrophoneAllowed, isCameraAllowed } = useContext(
        BrowserPermissionsContext
    );

    const { sendWsAction } = useContext(WsContext);

    const dispatch = useDispatch();
    const history = useHistory();

    const { lesson, isParentWebcamIncreased } = useSelector(lessonSelector);
    const { user } = useSelector(authSelector);
    const { protocol, speechCard } = useSelector(surveysSelector)

    const { lessonId } = props.match.params;

    const [activeGame, setActiveGame] = useState(null);
    const [unityContext, setUnityContext] = useState(null);
    const [unityLoadProgress, setUnityLoadProgress] = useState(0);

    const onChangeActiveGame = (game) => {
        if (game.id !== activeGame.id) {
            setUnityLoadProgress(0);
            sendWsAction(
                changeActiveGame({ lesson_id: lesson.id, game_id: game.id })
            );
        }
    };
    const onLessonFinish = async () => {
        await sendWsAction(
            changeLessonStatus({
                status: LESSON_STATUS_FINISHED,
                lesson_id: lessonId,
            })
        );
        await dispatch(clearLessonState());
    };
    const triggerGameAction = (gameAction) => {
        if (unityContext) {
            console.log('Triggered action:', gameAction);
            unityContext.send('WebData', gameAction);
        }
    };
    const GameActionHandler = (gameAction) => {
        return () => triggerGameAction(gameAction);
    };

    const getFileUrl = useCallback(
        (fileName) => {
            return activeGame[fileName];
        },
        [activeGame]
    );

    const setUnity = useCallback(async () => {
        if (activeGame) {
            await setUnityContext(null);
            const context = new UnityContext({
                loaderUrl: getFileUrl(GAME_FILE_TYPE_LOADER),
                dataUrl: getFileUrl(GAME_FILE_TYPE_DATA),
                frameworkUrl: getFileUrl(GAME_FILE_TYPE_FRAMEWORK),
                codeUrl: getFileUrl(GAME_FILE_TYPE_WASM),
            });
            await setUnityContext(context);
        }
    }, [activeGame, getFileUrl]);

    const sendJsonToGame = useCallback(
        (jsonData) => {
            unityContext.send('WebData', 'ReadWebData', JSON.stringify(jsonData));
        },
        [unityContext]
    );

    const sendJsonToGameWithTimeout = useCallback(
        (jsonData) => {
            setTimeout(() => {
                sendJsonToGame(jsonData);
            }, 1000);
        },
        [sendJsonToGame]
    );

    const switchChildWebcamSize = (value) => {
        sendWsAction(
            resizeChildWebcam({
                lesson_id: lessonId,
                is_parent_webcam_increased: value,
            })
        );
    };

    const startSTRecording = useCallback(() => {
        if (!checkEnv(envs.local)) {
            initSessionStack();
            defineUser({
                userId: user.id,
                email: user.email,
                role: user.role,
                displayName: user?.profile
                    ? `${user.profile.first_name} ${user.profile.last_name}`
                    : 'anonymous',
            });
        }
    }, [user]);

    const stopSTRecording = () => {
        if (!checkEnv(envs.local)) {
            stopSessionStackRecording();
        }
    };

    const sendChildrenQuestionnaireNotification = useCallback(() => {
        const children = user.profile.children;
        children.forEach((child) => {
            const link = `<a href="${
                frontUrls[config.appEnvironment]
            }/questionnaire/${child.id}">Перейти к анкете</a>`;
            const title = 'Анкета ребёнка';
            const body = `Пожалуйста, ответьте на вопросы о развитии ребенка (${link})`;

            dispatch(sendNotificationToMe({ title, body }));
        });
    }, [dispatch, user]);

    const webcamComponentProps = {
        meetingId: lessonId,
        lessonId: lessonId,
        switchChildWebcamSize,
    };

    const onProtocolFinish = async data => {
        if (lesson.status !== lessonStatuses.finished) {
            toast.warning('Сначала завершите занятие')
        } else {
            dispatch(closeProtocol())
            await dispatch(createSpeechCard({
                childId: protocol.child.id,
                speechCardData: data
            }))
            await dispatch(updateProtocol({
                protocolId: protocol.id,
                newData: {
                    status: examinationProtocolStatuses.closed,
                    lesson: lesson.id
                },
            }))
            if (lesson?.student?.id) {
                await dispatch(getSpeechCard(lesson.student.id))
            }
        }
    }

    const onSpeechCardFinish = () => {
        console.log(123413243132)
        history.push('/')
    }

    const webcamComponent = checkUserRole(userRoles.parent) ? (
        <Drag>
            <Webcam {...webcamComponentProps} />
        </Drag>
    ) : (
        <Webcam {...webcamComponentProps} />
    );

    useEffect(() => {
        dispatch(clearLessonState());
    }, [dispatch]);

    useEffect(() => {
        setUnity();
    }, [activeGame, setUnity]);

    useEffect(() => {
        if (lesson) {
            const active = lesson?.games?.find(
                (game) => game.id === lesson.active_game_id
            );
            setActiveGame(active);
        }
    }, [lesson]);

    useEffect(() => {
        if (unityContext) {
            unityContext.on('progress', (progress) => {
                setUnityLoadProgress(progress);
            });

            let json = {};

            if (checkUserRole(userRoles.therapist)) {
                json = { IsServer: true, Id: lessonId, FreeGame: false };
            }
            if (checkUserRole(userRoles.parent)) {
                json = { IsServer: false, Id: lessonId, FreeGame: false };
            }
            if (unityContext) {
                // Controlling of sending JSON data to game
                unityContext.on('ReadJavaData', async () => {
                    sendJsonToGameWithTimeout(json);
                });
            }
        }
    }, [lessonId, sendJsonToGameWithTimeout, unityContext]);

    useEffect(() => {
        startSTRecording();

        return () => stopSTRecording();
    }, [startSTRecording]);

    useEffect(() => {
        if (!isMicrophoneAllowed && !isCameraAllowed) {
            toast.info('Разрешите доступ для камеры и микрофона на вашем браузере');
        }
    }, [isCameraAllowed, isMicrophoneAllowed]);

    useEffect(() => {
        if (lesson && lesson?.student?.id) {
            dispatch(getProtocol(lesson.student.id))
        }
    }, [dispatch, lesson])

    useEffect(() => {
        if (lesson && lesson?.student?.id && protocol && protocol.status === examinationProtocolStatuses.closed) {
            dispatch(getSpeechCard(lesson.student.id))
        }
    }, [dispatch, lesson, protocol])

    useEffect(() => {
        if (lesson && checkUserRole(userRoles.parent) && lesson.status === lessonStatuses.finished) {
            history.push('/')
            sendChildrenQuestionnaireNotification()
        }
    }, [history, lesson, sendChildrenQuestionnaireNotification])

    const canvasParent = useRef();

    return (
        <div className='gamef position-relative overflow-hidden'>
            {lesson && lesson.status !== lessonStatuses.finished && (
                <>
                    <header
                        className={addClasses('gamef__head position-relative', {
                            gamef__head_teacher: checkUserRole(userRoles.therapist),
                            gamef__head_child: checkUserRole(userRoles.parent),
                        })}
                    >
                        {((lesson?.status !== lessonStatuses.finished &&
                            checkUserRole(userRoles.parent)) ||
                            checkUserRole(userRoles.therapist)) &&
                        lesson?.time_slot && (
                            <Timer
                                startTime={lesson.time_slot.start_time}
                                endTime={lesson.time_slot.end_time}
                            />
                        )}
                        <JitsiBlock>{webcamComponent}</JitsiBlock>
                    </header>
                    <>
                        <main
                            className={addClasses('gamef__main', {
                                gamef__main_full: checkUserRole(userRoles.parent),
                                parentGameMain: checkUserRole(userRoles.parent),
                                therapistGameMain: checkUserRole(userRoles.therapist),
                            })}
                        >
                            <div className='gamef__work-space'>
                                <div
                                    className={addClasses('gamef__work-space-in', {
                                        'd-flex justify-content-center': unityLoadProgress >= 1,
                                    })}
                                    ref={canvasParent}
                                >
                                    {unityContext && (
                                        <Unity
                                            unityContext={unityContext}
                                            style={{
                                                width: '100%',
                                                height: `${canvasParent.current.clientHeight}px`,
                                            }}
                                            className={addClasses('', {
                                                'd-none': unityLoadProgress < 1,
                                            })}
                                        />
                                    )}
                                    {unityLoadProgress < 1 && (
                                        <div style={{ marginTop: 'auto', marginBottom: 'auto' }}>
                                            <ProgressBar now={unityLoadProgress * 100}/>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </main>
                        {checkUserRole(userRoles.therapist) && (
                            <footer className='gamef__footer'>
                                <div className='gamef__previews-wrap'>
                                    <div className='gamef__previews gamesLitsScrollbar'>
                                        <div className='gamef__previews-inner w-100'>
                                            {lesson?.games.length &&
                                            lesson.games.map((game, index) => {
                                                return (
                                                    <div
                                                        className={addClasses('gamef__preview gameItem', {
                                                            active: game?.id === activeGame?.id,
                                                        })}
                                                        onClick={() => onChangeActiveGame(game)}
                                                    >
                                                        <img
                                                            src={game.preview}
                                                            className='gamef__preview-img'
                                                            alt='Game'
                                                            style={{ opacity: '.6' }}
                                                        />
                                                        <div className='gamef__preview-info'>
                                                            <span>Игра {index + 1}</span>
                                                            <p>{game.display_name}</p>
                                                        </div>
                                                    </div>
                                                );
                                            })}
                                        </div>
                                        {/*<button className='gamef__preview-next' type='button'/>*/}
                                        {/*<button className='gamef__preview-prev' type='button'/>*/}
                                    </div>
                                </div>
                                <div className='gamef__controls'>
                                    <button
                                        className='gamef__pause'
                                        type='button'
                                        onClick={GameActionHandler(gameActions.PAUSE_GAME)}
                                    />
                                    <button
                                        className='gamef__restart'
                                        type='button'
                                        onClick={GameActionHandler(gameActions.RESTART_GAME)}
                                    />
                                    <button
                                        className='gamef__microphone'
                                        type='button'
                                        onClick={GameActionHandler(gameActions.MUTE_AUDIO)}
                                    />
                                    <button
                                        type='button'
                                        className={addClasses('', {
                                            'check-game-button_active check-game-button__active':
                                                !isParentWebcamIncreased,
                                            'check-game-button_inactive check-game-button__inactive':
                                            isParentWebcamIncreased,
                                        })}
                                        onClick={() => switchChildWebcamSize(false)}
                                    />
                                    <button
                                        type='button'
                                        className={addClasses('', {
                                            'play-game-button_active play-game-button__active':
                                            isParentWebcamIncreased,
                                            'play-game-button_inactive play-game-button__inactive':
                                                !isParentWebcamIncreased,
                                        })}
                                        onClick={() => switchChildWebcamSize(true)}
                                    />
                                    <button
                                        className='gamef__next'
                                        type='button'
                                        onClick={GameActionHandler(gameActions.NEXT_ACTION)}
                                    >
                                        Следующее действие
                                    </button>
                                    <button
                                        className='gamef__prev'
                                        type='button'
                                        onClick={GameActionHandler(gameActions.PREV_ACTION)}
                                    >
                                        Предыдущее действие
                                    </button>
                                    <button
                                        className='gamef__finish'
                                        type='button'
                                        onClick={onLessonFinish}
                                    >
                                        Завершить занятие
                                    </button>
                                </div>
                            </footer>
                        )}
                    </>
                </>
            )}
            {lesson && lesson.status === lessonStatuses.finished && (
                <div
                    className={addClasses('w-100 d-flex', {
                        'align-items-center justify-content-center': !speechCard
                    })}
                    style={{ height: '100vh' }}
                >
                    {((protocol && protocol.status !== examinationProtocolStatuses.closed) || checkUserRole(userRoles.parent)) ?
                        <h1 className='text-white'>Урок завершен</h1> :
                        (speechCard ?
                                <>
                                    <div className='speach-card-form__timer'>
                                        <Timer
                                            startTime={lesson.time_slot.start_time}
                                            endTime={lesson.time_slot.end_time}
                                        />
                                    </div>
                                    <SpeechCard speechCard={speechCard} onSubmit={onSpeechCardFinish}/>
                                </> :
                                <Spinner animation='grow' variant='light'/>
                        )
                    }
                </div>
            )}
            {checkUserRole(userRoles.therapist) && (
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
                        {/*<Notes lessonId={lessonId}/>*/}
                    </div>
                </div>
            )}
        </div>
    );
};

export default LessonPage;
