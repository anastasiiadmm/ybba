import React, {useState, useEffect, useRef} from 'react';

import {useSelector, useDispatch} from 'react-redux';
import {useHistory} from 'react-router';

import Container from '../../Components/Container/Container';
import GameMain from './GameMain/GameMain';
import GameSidebar from './GameSidebar/GameSidebar';
import {addClasses} from '../../utils/addClasses/addClasses';
import {authSelector} from '../../redux/auth/authSlice';
import {getLesson, changeActiveGame, changeLessonStatus} from '../../redux/lesson/actions';
import {lessonSelector} from '../../redux/lesson/lessonSlice';
import {LESSON_STATUS_FINISHED} from '../../constants';

import './lesson.css'
import {GameContext} from '../../context/GameContext/GameContext';


const Lesson = (props) => {

    const ws = useRef(null);

    const dispatch = useDispatch()
    const history = useHistory()

    const {tokens} = useSelector(authSelector)
    const {lesson} = useSelector(lessonSelector)

    const {lessonId} = props.match.params

    const [sideBarIsWide, setSideBarIsWide] = useState(false)
    const [activeGame, setActiveGame] = useState(null)

    const gameContext = {activeGame}

    const setWindowSizes = () => setSideBarIsWide(!sideBarIsWide)
    const onChangeActiveGame = game => sendWsAction(changeActiveGame({lesson_id: lesson.id, game_id: game.id}))
    const sendWsAction = action => {
        if ((ws.current.readyState === WebSocket.OPEN)) {
            ws.current.send(JSON.stringify(action))
        }
    }
    const onLessonFinish = () => {
        sendWsAction(changeLessonStatus({status: LESSON_STATUS_FINISHED, lesson_id: lessonId}))
        history.push('/')
    }

    useEffect(() => {
        if (lesson) {
            const active = lesson.games.find(game => game.id === lesson.active_game_id)
            setActiveGame(active)
        }
    }, [lesson])

    useEffect(() => {
        ws.current = new WebSocket(`ws://172.29.77.31:3000/ws?token=${tokens.access}`);
        ws.current.onopen = () => {
            console.log(123423143214231)
            sendWsAction(getLesson({lesson_id: lessonId}))
        };
        ws.current.onclose = () => console.log('ws closed');
        ws.current.onmessage = msg => {
            const action = JSON.parse(msg.data)
            if (action?.type) {
                dispatch(action)
            }
        };

        return () => {
            ws.current.close();
        };
        // eslint-disable-next-line
    }, []);

    return (
        <Container>
            <div className='game mainLessonWindow'>
                <main
                    className={addClasses('game__main mainGame', {
                        'gameMainShort': sideBarIsWide
                    })}
                >
                    <GameContext.Provider value={gameContext}>
                        <GameMain activeGame={activeGame} />
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
        </Container>
    );
}

export default Lesson;