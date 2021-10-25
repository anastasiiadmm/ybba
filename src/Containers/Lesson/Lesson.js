import React, {useState, useEffect, useCallback} from 'react';

import {useSelector, useDispatch} from 'react-redux';
import {useHistory} from 'react-router';

import Container from 'Components/Container/Container';
import GameMain from 'Containers/Lesson/GameMain/GameMain';
import GameSidebar from 'Containers/Lesson/GameSidebar/GameSidebar';
import {addClasses} from 'utils/addClasses/addClasses.js';
import {authSelector, refreshToken} from 'redux/auth/authSlice.js';
import {getLesson, changeActiveGame, changeLessonStatus} from 'redux/lesson/actions.js';
import {lessonSelector} from 'redux/lesson/lessonSlice.js';
import {LESSON_STATUS_FINISHED, userRoles} from 'constants.js';
import {GameContext} from 'context/GameContext/GameContext.js';
import {LessonContext} from 'context/LessonContext/LessonContext.js';
import {ReduxWebSocket} from 'utils/MyWebSocket/MyWebSocket.js';
import config from 'config';
import {webSocketSelector, clearWebSocket} from 'redux/webSocker/webSockerSlice.js';
import {DISCONNECT} from 'redux/actionTypes.js';
import {checkUserRole} from 'utils/user.js';

import Window from 'Components/Window/Window';
import SpeechCard from 'Containers/SpeechCard/SpeechCard';

import 'Containers/Lesson/lesson.css'


const Lesson = (props) => {

    const dispatch = useDispatch()
    const history = useHistory()

    const {tokens} = useSelector(authSelector)
    const {lesson, lessonFinished} = useSelector(lessonSelector)
    const {status} = useSelector(webSocketSelector)

    const {lessonId} = props.match.params

    const [sideBarIsWide, setSideBarIsWide] = useState(false)
    const [activeGame, setActiveGame] = useState(null)
    const [gameAction, triggerGameAction] = useState('')
    const [lastSentData, setLastSentData] = useState(null)
    const [ws, setWs] = useState(null)
    const [windowData, setWindowData] = useState()

    const gameContext = {activeGame, gameAction, triggerGameAction}
    const lessonContext = {gameAction, triggerGameAction}

    const connectToWs = useCallback(() => {
        if (ws) {
            ws.close()
        }
        const newWsConnection = new ReduxWebSocket(`${config.wsUrl}?token=${tokens.access}`);
        setWs(newWsConnection)
    }, [tokens.access])
    const sendWsAction = (action, setLastSent = true) => {
        if (ws && ws.readyState && ws.OPEN) {
            ws.sendWsAction(action)
            if (setLastSent) {
                setLastSentData(action)
            }
        }
    }

    const setWindowSizes = () => setSideBarIsWide(!sideBarIsWide)
    const onChangeActiveGame = game => {
        if (game.id !== activeGame) {
            sendWsAction(
                changeActiveGame({lesson_id: lesson.id, game_id: game.id})
            )
        }
    }
    const onLessonFinish = () => sendWsAction(
        changeLessonStatus({status: LESSON_STATUS_FINISHED, lesson_id: lessonId})
    )
    const refreshAccessToken = async () => {
        ws.onclose = () => console.log('Ws closed')
        ws.close()
        await dispatch(refreshToken())
        dispatch(clearWebSocket())
    }
    const openSpeechCard = () => {
        const speechCard = <SpeechCard
            child={lesson.student}
            uniqueSpeechCardId={lesson.id}
        />
        setWindowData(speechCard)
    }
    const onCloseSpeechCard = () => {
        setWindowData(null)
    }

    useEffect(() => {
        if (status === DISCONNECT) {
            refreshAccessToken()
        }
        // eslint-disable-next-line
    }, [status])

    useEffect(() => {
        if (ws) {
            ws.onopen = () => {
                sendWsAction(getLesson({lesson_id: lessonId}), false)
                console.log(lastSentData)
                if (lastSentData) {
                    sendWsAction(lastSentData)
                    setLastSentData(null)
                }
            };
            ws.onclose = async () => {
                console.log('ws closed');
                console.log('Try to reconnect ws')
                await setTimeout(() => {
                    connectToWs()
                }, 1000)
            }

            ws.onmessage = msg => {
                const action = JSON.parse(msg.data)
                if (action?.type) {
                    dispatch(action)
                }
            };

            ws.onerror = () => {
                ws.close()
            }
        }
    }, [ws])

    useEffect(() => {
        connectToWs()
    }, [tokens.access])

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
        dispatch(clearWebSocket())

        return () => {
            if (ws) {
                ws.onclose = () => console.log('ws closed!')
                ws.close();
            }
        };
        // eslint-disable-next-line
    }, []);

    return (
        <Container>
            {lesson && windowData && (
                <Window
                    handleClose={onCloseSpeechCard}
                >
                    {windowData}
                </Window>
            )}
            <LessonContext.Provider value={lessonContext}>
                <div className='game mainLessonWindow'>
                    <main
                        className={addClasses('game__main mainGame', {
                            'gameMainShort': sideBarIsWide || checkUserRole(userRoles.therapist)
                        })}
                    >
                        <GameContext.Provider value={gameContext}>
                            <GameMain
                                activeGame={activeGame}
                                gameSessionId={lessonId}
                                speechCardOnClick={openSpeechCard}
                            />
                        </GameContext.Provider>
                    </main>
                    <div
                        className={addClasses('game__sidebar lessonSidebar', {
                            'wideSidebar': sideBarIsWide || checkUserRole(userRoles.therapist)
                        })}
                    >
                        <GameSidebar
                            webcamOnClick={setWindowSizes}
                            lesson={lesson}
                            gameOnClick={onChangeActiveGame}
                            onFinishLesson={onLessonFinish}
                        />
                    </div>
                </div>
            </LessonContext.Provider>
        </Container>
    );
}

export default Lesson;