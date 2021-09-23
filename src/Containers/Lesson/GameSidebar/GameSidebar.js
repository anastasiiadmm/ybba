import React, {useContext, useState, useEffect} from 'react';

import PropTypes from 'prop-types';

import WebCam from '../../../Components/WebCam/WebCam';
import Button from '../../../Components/Button/Button';
import {addClasses} from '../../../utils/addClasses/addClasses';
import {LessonContext} from '../../../context/LessonContext/LessonContext';
import {gameActions, userRoles} from '../../../constants';
import {checkUserRole} from '../../../utils/user';
import Timer from '../../../Components/Timer/Timer';

import './gameSidebar.css';


const GameSidebar = (props) => {

    const {
        lesson, webcamOnClick, gameOnClick, onFinishLesson
    } = props

    const games = lesson?.games
    const activeGame = lesson?.active_game_id

    const [timerData, setTimerData] = useState(null)
    const {triggerGameAction} = useContext(LessonContext)

    const gameClickHandler = game => {
        gameOnClick(game)
    }
    const finishLessonClickHandler = () => {
        onFinishLesson()
    }

    const triggerPrevAction = () => triggerGameAction(gameActions.PREV_ACTION)
    const triggerStartGame = () => triggerGameAction('')
    const triggerPauseGame = () => triggerGameAction(gameActions.PAUSE_GAME)
    const triggerGameRestart = () => triggerGameAction(gameActions.RESTART_GAME)
    const triggerNextAction = () => triggerGameAction(gameActions.NEXT_ACTION)


    useEffect(() => {
        const now = new Date()
        setTimerData({
            from: new Date(
                now.getFullYear(),
                now.getMonth(),
                now.getDate(),
                1,
                30,
                0
            ),
            to: new Date(
                now.getFullYear(),
                now.getMonth(),
                now.getDate(),
                23,
                10,
                0
            )
        })
    }, [])

    return (
        <>
            {lesson?.id && <WebCam meetingId={lesson.id} onClick={webcamOnClick}/>}
            {checkUserRole(userRoles.therapist) && (
                <div className='game__controls'>
                    <Button className='btn-control btn-control_back gameActionButton' onClick={triggerPrevAction} />
                    <Button className='btn-control btn-control_play gameActionButton' onClick={triggerStartGame} />
                    <Button className='btn-control btn-control_pause gameActionButton' onClick={triggerPauseGame} />
                    <Button className='btn-control btn-control_restart gameActionButton' onClick={triggerGameRestart} />
                    <Button className='btn-control btn-control_forward gameActionButton' onClick={triggerNextAction} />
                </div>
            )}
            {timerData && (
                <Timer
                    from={timerData.from}
                    to={timerData.to}
                />
            )}
            {checkUserRole(userRoles.therapist) && (
                <div className='game__info d-flex flex-column h-100'>
                    <h5 className='game__info-title'>Список игр:</h5>
                    <ol className='game__lesson-list'>
                        {games && games.map(game => {
                            return <li
                                className={addClasses('game__lesson-item gameListItem', {
                                    'activeGame': game.id === activeGame
                                })}
                                onClick={() => gameClickHandler(game)}
                            >
                                {game.display_name}
                            </li>
                        })}
                    </ol>
                    <div
                        className='game__info-bottom mt-auto finishLessonArea'
                        onClick={finishLessonClickHandler}
                    >
                        <button
                            className='btn-complete' type='button'
                        >
                            Завершить занятие
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}

GameSidebar.propTypes = {
    webcamOnClick: PropTypes.func,
    lesson: PropTypes.object.isRequired,
    gameOnClick: PropTypes.func,
    onFinishLesson: PropTypes.func
}

export default GameSidebar;