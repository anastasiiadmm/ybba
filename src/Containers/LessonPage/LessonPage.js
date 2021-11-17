import React, { useState, useEffect, useContext, useCallback, useRef } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import Unity, { UnityContext } from 'react-unity-webgl';
import { ProgressBar } from 'react-bootstrap';

import { lessonSelector, clearLessonState } from 'redux/lesson/lessonSlice.js';
import { changeActiveGame, changeLessonStatus, resizeChildWebcam } from 'redux/lesson/actions.js';
import {
    LESSON_STATUS_FINISHED,
    GAME_FILE_TYPE_LOADER,
    GAME_FILE_TYPE_DATA,
    GAME_FILE_TYPE_FRAMEWORK,
    GAME_FILE_TYPE_WASM,
    gameActions,
    userRoles
} from 'constants.js';
import { WsContext } from 'context/WsContext/WsContext.js';
import { addClasses } from 'utils/addClasses/addClasses.js';
import Webcam from 'Containers/LessonPage/Webcam/Webcam.js';
import Timer from 'Containers/LessonPage/Timer/Timer.js';
import Notes from 'Containers/LessonPage/Notes/Notes.js';
import { checkUserRole } from 'utils/user.js';
import Drag from 'Components/Drag/Drag.js';
import JitsiBlock from 'Components/JitsiBlock/JitsiBlock.js';

import 'Containers/LessonPage/lessonPage.css'


const LessonPage = (props) => {

    const { sendWsAction } = useContext(WsContext)

    const dispatch = useDispatch()
    const history = useHistory()

    const { lesson, lessonFinished, isParentWebcamIncreased } = useSelector(lessonSelector)

    const { lessonId } = props.match.params

    const [activeGame, setActiveGame] = useState(null)
    const [unityContext, setUnityContext] = useState(null)
    const [unityLoadProgress, setUnityLoadProgress] = useState(0)

    const onChangeActiveGame = game => {
        if (game.id !== activeGame.id) {
            setUnityLoadProgress(0)
            sendWsAction(
                changeActiveGame({ lesson_id: lesson.id, game_id: game.id })
            )
        }
    }
    const onLessonFinish = async () => {
        await sendWsAction(changeLessonStatus({ status: LESSON_STATUS_FINISHED, lesson_id: lessonId }))
        await dispatch(clearLessonState())
    }
    const triggerGameAction = (gameAction) => {
        if (unityContext) {
            console.log('Triggered action:', gameAction)
            unityContext.send('WebData', gameAction)
        }
    }
    const GameActionHandler = (gameAction) => {
        return () => triggerGameAction(gameAction)
    }

    const getFileUrl = useCallback(fileName => {
        return activeGame[fileName]
    }, [activeGame])

    const setUnity = useCallback(async () => {
        if (activeGame) {
            await setUnityContext(null)
            const context = new UnityContext({
                loaderUrl: getFileUrl(GAME_FILE_TYPE_LOADER),
                dataUrl: getFileUrl(GAME_FILE_TYPE_DATA),
                frameworkUrl: getFileUrl(GAME_FILE_TYPE_FRAMEWORK),
                codeUrl: getFileUrl(GAME_FILE_TYPE_WASM)
            })
            await setUnityContext(context)
        }
    }, [activeGame, getFileUrl])

    const sendJsonToGame = useCallback(jsonData => {
        unityContext.send('WebData', 'ReadWebData', JSON.stringify(jsonData))
    }, [unityContext])

    const sendJsonToGameWithTimeout = useCallback(jsonData => {
        setTimeout(() => {
            sendJsonToGame(jsonData)
        }, 1000)
    }, [sendJsonToGame])

    const switchChildWebcamSize = (value) => {
        sendWsAction(resizeChildWebcam({
            lesson_id: lessonId,
            is_parent_webcam_increased: value
        }))
    }

    const getCanvasWidth = parentHeight => {
        return (parentHeight / 9) * 16
    }

    const webcamComponentProps = {
        meetingId: lessonId,
        lessonId: lessonId,
        switchChildWebcamSize
    }
    const webcamComponent = checkUserRole(userRoles.parent)
        ? <Drag>
            <Webcam
                {...webcamComponentProps}
            />
        </Drag>
        : <Webcam
            {...webcamComponentProps}
        />

    useEffect(() => {
        dispatch(clearLessonState())
    }, [dispatch])

    useEffect(() => {
        setUnity()
    }, [activeGame, setUnity])

    useEffect(() => {
        if (lesson) {
            const active = lesson.games.find(game => game.id === lesson.active_game_id)
            setActiveGame(active)
        }
    }, [lesson])

    useEffect(() => {
        if (lessonFinished) {
            history.push('/')
        }
    }, [lessonFinished, history])

    useEffect(() => {
        if (unityContext) {
            unityContext.on('progress', progress => {
                setUnityLoadProgress(progress)
            })

            let json = {}

            if (checkUserRole(userRoles.therapist)) {
                json = { IsServer: true, Id: lessonId, FreeGame: false }
            }
            if (checkUserRole(userRoles.parent)) {
                json = { IsServer: false, Id: lessonId, FreeGame: false }
            }
            if (unityContext) {
                // Controlling of sending JSON data to game
                unityContext.on('ReadJavaData', async () => {
                    sendJsonToGameWithTimeout(json)
                })
            }
        }
    }, [lessonId, sendJsonToGameWithTimeout, unityContext])

    const canvasParent = useRef()

    return (
        <div className='gamef position-relative'>
            <header
                className={addClasses('gamef__head position-relative', {
                    'gamef__head_teacher': checkUserRole(userRoles.therapist),
                    'gamef__head_child': checkUserRole(userRoles.parent)
                })}
            >
                {lesson?.time_slot && (
                    <Timer
                        startTime={lesson.time_slot.start_time}
                        endTime={lesson.time_slot.end_time}
                    />
                )}
                <JitsiBlock>
                    {webcamComponent}
                </JitsiBlock>
            </header>
            <main
                className={addClasses('gamef__main', {
                    'gamef__main_full': checkUserRole(userRoles.parent),
                    'parentGameMain': checkUserRole(userRoles.parent),
                    'therapistGameMain': checkUserRole(userRoles.therapist)
                })}
            >
                <div className='gamef__work-space'>
                    <div
                        className={addClasses('gamef__work-space-in', {
                            'd-flex justify-content-center': unityLoadProgress >= 1
                        })}
                        ref={canvasParent}
                    >
                        {unityContext && (
                            <Unity
                                unityContext={unityContext}
                                style={{
                                    width: `${getCanvasWidth(canvasParent.current.clientHeight)}px`,
                                    height: `${canvasParent.current.clientHeight}px`
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
                                {lesson?.games.length && lesson.games.map((game, index) => {
                                    return (
                                        <div
                                            className={addClasses('gamef__preview gameItem', {
                                                'active': game?.id === activeGame?.id
                                            })}
                                            onClick={() => onChangeActiveGame(game)}
                                        >
                                            <img src={game.preview} className='gamef__preview-img' alt='Game'/>
                                            <div className='gamef__preview-info'>
                                                <span>Игра {index + 1}</span>
                                                <p>{game.display_name}</p>
                                            </div>
                                        </div>
                                    )
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
                                'check-game-button_active check-game-button__active': !isParentWebcamIncreased,
                                'check-game-button_inactive check-game-button__inactive': isParentWebcamIncreased
                            })}
                            onClick={() => switchChildWebcamSize(false)}
                        />
                        <button
                            type='button'
                            className={addClasses('', {
                                'play-game-button_active play-game-button__active': isParentWebcamIncreased,
                                'play-game-button_inactive play-game-button__inactive': !isParentWebcamIncreased
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
            {checkUserRole(userRoles.therapist) && (
                <div className='gamef__sidebar'>
                    <div className='gamef__sidebar-in'>
                        <Notes
                            lessonId={lessonId}
                        />
                    </div>
                </div>
            )}
        </div>
    );
}

export default LessonPage;