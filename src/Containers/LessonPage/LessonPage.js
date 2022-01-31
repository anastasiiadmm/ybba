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
    GAME_FOLDER_STREAMING_ASSETS,
    gameActions,
    userRoles,
    envs,
    lessonStatuses,
    examinationProtocolStatuses,
    gameUserRoles,
} from 'constants.js';
import { WsContext } from 'context/WsContext/WsContext.js';
import { addClasses } from 'utils/addClasses/addClasses.js';
import Webcam from 'Containers/LessonPage/Webcam/Webcam.js';
import Timer from 'Containers/LessonPage/Timer/Timer.js';
import { checkUserRole } from 'utils/user.js';
import Drag from 'Components/Drag/Drag.js';
import Modal from 'Components/Modal/Modal';
import { initSessionStack, defineUser, stopSessionStackRecording, } from 'utils/sessionstack/utils.js';
import { authSelector } from 'redux/auth/authSlice.js';
import { checkEnv } from 'utils/common/commonUtils.js';
import { BrowserPermissionsContext } from 'context/BrowserPermissionsContext/BrowserPermissionsContext';

import 'Containers/LessonPage/lessonPage.css';
import {
    getProtocol,
    surveysSelector,
    getSpeechCard,
    closeProtocol,
    moveDataFromProtocolToSpeechCard
} from 'redux/surveys/surveysSlice.js';
import ExaminationProtocol from 'Containers/Surveys/ExaminationProtocol/ExaminationProtocol.js';
import SpeechCard from 'Containers/Surveys/SpeechCard/SpeechCard.js';
import config from 'config.js';
import { JitsiContext } from 'context/JitsiContext/JitsiContext.js';
import { startJitsiRecording, stopJitsiRecording } from 'utils/jitsi/utils.js';


const LessonPage = (props) => {
    const { isMicrophoneAllowed, isCameraAllowed } = useContext(
        BrowserPermissionsContext
    );
    const { api } = useContext(JitsiContext)

    const { sendWsAction } = useContext(WsContext);

    const dispatch = useDispatch();
    const history = useHistory();

    const { lesson, isParentWebcamIncreased, error } = useSelector(lessonSelector);
    const { user } = useSelector(authSelector);
    const { protocol, speechCard } = useSelector(surveysSelector)

    const { lessonId } = props.match.params;

    const [activeGame, setActiveGame] = useState(null);
    const [unityContext, setUnityContext] = useState(null);
    const [unityLoadProgress, setUnityLoadProgress] = useState(0);
    const [isMuted, setIsMuted] = useState(false);
    const [isTeacherHaveControlOnGame, setIsTeacherHaveControlOnGame] = useState(false);
    const [isUnityInitialized, setIsUnityInitialized] = useState(false);

    const [carouselIsVisible, setCarouselIsVisible] = useState(true);
    const toggleCarousel = async () => await setCarouselIsVisible(!carouselIsVisible);

    const [protocolModalIsOpen, setProtocolModalIsOpen] = useState(false);
    const toggleProtocolModal = async () => await setProtocolModalIsOpen(!protocolModalIsOpen);

    const onChangeActiveGame = (game) => {
        if (!activeGame || (game.id !== activeGame.id)) {
            sendWsAction(
                changeActiveGame({ lesson_id: lesson.id, game_id: game.game_type })
            );
        }
    };
    const onLessonFinish = async () => {
        await toggleProtocolModal()
        await sendWsAction(
            changeLessonStatus({
                status: LESSON_STATUS_FINISHED,
                lesson_id: lessonId,
            })
        );
        await dispatch(clearLessonState());
    };
    const triggerGameAction = (gameAction, arg) => {
        if (unityContext) {
            console.log('Triggered action:', gameAction);
            unityContext.send('JavaHook', gameAction, arg);
        }
    };
    const GameActionHandler = (gameAction) => {
        return () => triggerGameAction(gameAction);
    };
    const getGameControlForTeacher = () => {
        triggerGameAction(gameActions.TEACHER_MOD, +!isTeacherHaveControlOnGame)
        setIsTeacherHaveControlOnGame(!isTeacherHaveControlOnGame)
    }

    const getFileUrl = useCallback((fileName) => {
        return lesson.game_build[fileName];
    }, [lesson]);

    const setMuted = useCallback(async () => {
        const muted = await api.isAudioMuted()
        await setIsMuted(muted)
    }, [api])

    const toggleMute = useCallback(async () => {
        if (api) {
            api.executeCommand('toggleAudio')
            await setIsMuted(!isMuted)
        }
    }, [api, isMuted])

    const muteJitsiAudio = useCallback(async () => {
        const muted = await api.isAudioMuted()
        if (!muted) {
            api.executeCommand('toggleAudio')
            setIsMuted(true)
        }
    }, [api])

    const unMuteJitsiAudio = useCallback(async () => {
        const muted = await api.isAudioMuted()
        if (muted) {
            api.executeCommand('toggleAudio')
            setIsMuted(false)
        }
    }, [api])

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

    const webcamComponentProps = {
        meetingId: lessonId,
        lessonId: lessonId,
        switchChildWebcamSize,
    };

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

    const onSpeechCardFinish = () => {
        history.push('/')
    }

    const webcamComponent = checkUserRole(userRoles.parent) ? (
        <Drag>
            <Webcam {...webcamComponentProps} />
        </Drag>
    ) : (
        <Webcam {...webcamComponentProps} />
    );

    const startRecording = useCallback(() => {
        if (api && !checkEnv(envs.local)) {
            startJitsiRecording(api)
        }
    }, [api])

    const stopRecording = useCallback(() => {
        if (api && !checkEnv(envs.local)) {
            stopJitsiRecording(api)
        }
    }, [api])

    const getUserDataForGame = useCallback(() => {
        return {
            nickName: user.email,
            roomId: lessonId,
            gameType: lesson.active_game_id,
            developmentMode: config.appEnvironment === envs.local,
            userRole: gameUserRoles[user.role],
        }
    }, [lesson, lessonId, user])

    const updateGameJsonData = useCallback(() => {
        const userGameData = getUserDataForGame()
        unityContext.send('JavaHook', 'InitGame', JSON.stringify(userGameData))
    }, [getUserDataForGame, unityContext])

    const setUnity = useCallback(async () => {
        if (lesson) {
            if (isUnityInitialized) {
                updateGameJsonData()
            } else {
                if (lesson.game_build) {
                    const context = new UnityContext({
                        loaderUrl: getFileUrl(GAME_FILE_TYPE_LOADER),
                        dataUrl: getFileUrl(GAME_FILE_TYPE_DATA),
                        frameworkUrl: getFileUrl(GAME_FILE_TYPE_FRAMEWORK),
                        codeUrl: getFileUrl(GAME_FILE_TYPE_WASM),
                        streamingAssetsUrl: getFileUrl(GAME_FOLDER_STREAMING_ASSETS)
                    });
                    await setUnityContext(context);
                }
            }
        }
    }, [getFileUrl, isUnityInitialized, lesson, updateGameJsonData]);

    useEffect(() => {
        startRecording()
        return () => {
            stopRecording()
        }
    }, [api, startRecording, stopRecording])

    useEffect(() => {
        if (api) {
            setMuted()
        }
    }, [api, setMuted])

    useEffect(() => {
        dispatch(clearLessonState());
    }, [dispatch]);

    useEffect(() => {
        setUnity();
    }, [lesson]);

    useEffect(() => {
        if (lesson) {
            const active = lesson?.games?.find((game) => {
                return game.game_type === parseInt(lesson.active_game_id)
            });
            setActiveGame(active);
        }
    }, [lesson]);

    useEffect(() => {
        if (unityContext) {
            unityContext.on('progress', (progress) => {
                setUnityLoadProgress(progress);
            });
            if (unityContext) {
                unityContext.on('GameInitialized', () => {
                    updateGameJsonData()
                    setIsUnityInitialized(true)
                })
                unityContext.on('MuteMicrophone', () => {
                    muteJitsiAudio()
                })
                unityContext.on('UnMuteMicrophone', () => {
                    unMuteJitsiAudio()
                })
            }
        }
    }, [user, lessonId, sendJsonToGameWithTimeout, unityContext, muteJitsiAudio, unMuteJitsiAudio, updateGameJsonData]);

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
        if (lesson && lesson?.student?.id && !isUnityInitialized) {
            dispatch(getProtocol(lesson.student.id))
        }
    }, [dispatch, isUnityInitialized, lesson])

    useEffect(() => {
        if (lesson && protocol && protocol.status === examinationProtocolStatuses.closed) {
            dispatch(getSpeechCard(lesson.student.id))
        }
    }, [dispatch, lesson, protocol])

    useEffect(() => {
        if (lesson && checkUserRole(userRoles.parent) && lesson.status === lessonStatuses.finished) {
            history.push('/')
        }
    }, [history, lesson])

    useEffect(() => {
        if (error) {
            history.push('/')
        }
    }, [error, history])

    const canvasParent = useRef();

    return (
        <>
            <Modal
                isOpen={protocolModalIsOpen}
                toggle={toggleProtocolModal}
                width={30}
            >
                <p>Заполните пропущенные поля и выберите варианты заключения, которые будут использованы для заполнения речевой карты</p>
                <button className='protocol__submit' onClick={toggleProtocolModal}>OK</button>
            </Modal>
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
                        {webcamComponent}
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
                                                width: `${canvasParent.current.clientHeight / 9 * 16}px`,
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
                          <>
                              <div className={addClasses('gamef__previews-wrap', {
                                  'hide': !carouselIsVisible,
                              })}>
                                  <div className='gamef__previews gamesLitsScrollbar'>
                                      <div className='gamef__under-carousel'>
                                          <div className='gamef__carousel-buttons'>
                                              <button
                                                className={addClasses('gamef__hide-carousel', {
                                                    'hide': !carouselIsVisible,
                                                })}
                                                type='button'
                                                onClick={() => toggleCarousel()}
                                              />
                                          </div>
                                      </div>
                                      <div className='gamef__previews-inner w-100'>
                                          {lesson?.games.length &&
                                            lesson.games.map((game, index) => {
                                                return (
                                                  <button
                                                    className={addClasses('gamef__preview gameItem', {
                                                        active: game?.game_type === activeGame?.game_type,
                                                    })}
                                                    onClick={() => onChangeActiveGame(game)}
                                                  >
                                                      <img
                                                        src={game.preview}
                                                        className='gamef__preview-img'
                                                        alt='Game'
                                                      />
                                                      <div className='gamef__preview-info'>
                                                          <span>Игра {index + 1}</span>
                                                          <p>{game.name}</p>
                                                      </div>
                                                  </button>
                                                );
                                            })}
                                      </div>
                                      {/*<button className='gamef__preview-next' type='button'/>*/}
                                      {/*<button className='gamef__preview-prev' type='button'/>*/}
                                  </div>
                              </div>
                              <footer className='gamef__footer'>
                                  <div className='gamef__controls'>
                                      <button
                                        className='gamef__restart'
                                        type='button'
                                        onClick={GameActionHandler(gameActions.RESTART_GAME)}
                                      />
                                      <button
                                        className={addClasses('', {
                                            'gamef__microphone_muted': isMuted,
                                            'gamef__microphone': !isMuted,
                                        })}
                                        type='button'
                                        onClick={toggleMute}
                                      />
                                      <button
                                        className={addClasses('gamef__get-control', {
                                            'active': isTeacherHaveControlOnGame
                                        })}
                                        type='button'
                                        onClick={getGameControlForTeacher}
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
                                        onClick={GameActionHandler(gameActions.INTRO_SOUND)}
                                      >
                                          Интро
                                      </button>
                                      <button
                                        className='gamef__prev'
                                        type='button'
                                        onClick={GameActionHandler(gameActions.PREV_ACTION)}
                                      >
                                          Ещё раз
                                      </button>
                                      <button
                                        className='gamef__next'
                                        style={{ marginLeft: '0', marginRight: 'auto' }}
                                        type='button'
                                        onClick={GameActionHandler(gameActions.NEXT_ACTION)}
                                      >
                                          Далее
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
                          </>
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
                    {protocol && (
                        protocol.status === examinationProtocolStatuses.open || checkUserRole(userRoles.parent)
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
        </>
    );
};

export default LessonPage;
