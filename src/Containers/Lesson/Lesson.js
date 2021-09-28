import React, {useState, useEffect, useRef, useCallback} from 'react';

import {useSelector, useDispatch} from 'react-redux';
import {useHistory} from 'react-router';

import Container from '../../Components/Container/Container';
import GameMain from './GameMain/GameMain';
import GameSidebar from './GameSidebar/GameSidebar';
import {addClasses} from '../../utils/addClasses/addClasses';
import {authSelector, refreshToken} from '../../redux/auth/authSlice';
import {getLesson, changeActiveGame, changeLessonStatus} from '../../redux/lesson/actions';
import {lessonSelector} from '../../redux/lesson/lessonSlice';
import {LESSON_STATUS_FINISHED} from '../../constants';
import {GameContext} from '../../context/GameContext/GameContext';
import {LessonContext} from '../../context/LessonContext/LessonContext';
import {ReduxWebSocket} from '../../utils/MyWebSocket/MyWebSocket';
import config from '../../config';
import {webSocketSelector, clearWebSocket} from '../../redux/webSocker/webSockerSlice';
import {DISCONNECT} from '../../redux/actionTypes';

import './lesson.css'


const Lesson = (props) => {

    const ws = useRef(null);

    const dispatch = useDispatch()
    const history = useHistory()

    const {tokens} = useSelector(authSelector)
    const {lesson, lessonFinished} = useSelector(lessonSelector)
    const {status} = useSelector(webSocketSelector)

    const {lessonId} = props.match.params

    const [sideBarIsWide, setSideBarIsWide] = useState(false)
    const [activeGame, setActiveGame] = useState(null)
    const [gameAction, triggerGameAction] = useState('')

    const gameContext = {activeGame, gameAction, triggerGameAction}
    const lessonContext = {gameAction, triggerGameAction}

    const setWindowSizes = () => setSideBarIsWide(!sideBarIsWide)
    const onChangeActiveGame = game => {
        if (game.id !== activeGame) {
            ws.current.sendWsAction(
                changeActiveGame({lesson_id: lesson.id, game_id: game.id})
            )
        }
    }
    const onLessonFinish = () => ws.current.sendWsAction(
        changeLessonStatus({status: LESSON_STATUS_FINISHED, lesson_id: lessonId})
    )

    const connectToWs = useCallback(() => {
        ws.current = new ReduxWebSocket(`${config.wsUrl}?token=${tokens.access}`);
        ws.current.onopen = () => {
            ws.current.sendWsAction(
                getLesson({lesson_id: lessonId})
            )
        };
        ws.current.onclose = () => console.log('ws closed');

        ws.current.onmessage = msg => {
            const action = JSON.parse(msg.data)
            if (action?.type) {
                dispatch(action)
            }
        };

        ws.current.onerror = () => {
            ws.current.close()
        }
    }, [dispatch, lessonId, tokens.access])

    useEffect(() => {
        if (status === DISCONNECT) {
            if (ws.current) {
                ws.current.close()
            }
            dispatch(refreshToken())
        }
        // eslint-disable-next-line
    }, [status])

    useEffect(() => {
        connectToWs()
        // eslint-disable-next-line
    }, [tokens])

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
            if (ws.current) {
                ws.current.close();
            }
        };
        // eslint-disable-next-line
    }, []);

    return (
        <Container>
            <LessonContext.Provider value={lessonContext}>
                <div className='game mainLessonWindow'>
                    <main
                        className={addClasses('game__main mainGame', {
                            'gameMainShort': sideBarIsWide
                        })}
                    >
                        <GameContext.Provider value={gameContext}>
                            <GameMain activeGame={activeGame}/>
                        </GameContext.Provider>
                    </main>
                    <div
                        className={addClasses('game__sidebar lessonSidebar', {
                            'wideSidebar': sideBarIsWide
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