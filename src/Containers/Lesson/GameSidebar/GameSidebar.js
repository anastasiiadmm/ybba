import React, {useContext, useState} from 'react';

import PropTypes from 'prop-types';

import WebCam from '../../../Components/WebCam/WebCam';
import Button from '../../../Components/Button/Button';
import {addClasses} from '../../../utils/addClasses/addClasses';
import {LessonContext} from '../../../context/LessonContext/LessonContext';
import {gameActions, userRoles} from '../../../constants';
import {checkUserRole} from '../../../utils/user';
import Timer from '../../../Components/Timer/Timer';
import {strTimeToMoment} from '../../../utils/date/dateUtils';

import './gameSidebar.css';


const GameSidebar = (props) => {

    const {
        lesson, webcamOnClick, gameOnClick, onFinishLesson
    } = props

    const [state, setState] = useState({
        playing: false,
        mute: false
    })

    const games = lesson?.games
    const activeGame = lesson?.active_game_id

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
    const triggerMuteAction = () => triggerGameAction('')
    const triggerUnMuteAction = () => triggerGameAction(gameActions.MUTE_AUDIO)

    const handlePlayerClick = () => {
        setState(prevState => ({
            ...prevState,
            playing: !state.playing
        }))
        if (state.playing) {
            triggerPauseGame()
        } else {
            triggerStartGame()
        }
    }

    const handleMuteClick = () => {
        setState(prevState => ({
            ...prevState,
            mute: !state.mute
        }))
        if (state.playing) {
            triggerMuteAction() // fixed
        } else {
            triggerUnMuteAction() // fixed
        }
    }

    return (
        <>
            {lesson?.id && <WebCam meetingId={lesson.id} onClick={webcamOnClick}/>}
            {checkUserRole(userRoles.therapist) && (
                <div className='game__controls'>
                    <Button className='action-btn-control gameActionButton' onClick={triggerPrevAction}/>
                    <Button className='send-btn-control gameActionButton' onClick={triggerNextAction}/>
                    <Button className='btn-control btn-control_back gameActionButton' onClick={triggerPrevAction} />
                    <Button className={`btn-control ${state.playing ? "btn-control_pause" : "btn-control_play"} gameActionButton`} onClick={handlePlayerClick} />
                    <Button className='btn-control btn-control_restart gameActionButton' onClick={triggerGameRestart} />
                    <Button className='btn-control btn-control_forward gameActionButton' onClick={triggerNextAction} />
                    <Button className={`${state.mute ? "btn-control_mute btn-control_unmute" : "btn-control_mute"} gameActionButton`} onClick={handleMuteClick} />
                </div>
            )}
            {lesson && (
                <Timer
                    from={strTimeToMoment(lesson?.time_slot?.start_time)}
                    to={strTimeToMoment(lesson?.time_slot?.end_time)}
                />
            )}
            {checkUserRole(userRoles.therapist) && (
                <div className='game__info d-flex flex-column gameListContainer'>
                    <h5 className='game__info-title'>Список игр:</h5>
                    <ol className='game__lesson-list gameList'>
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
    lesson: PropTypes.shape({
        active_game_id: PropTypes.string,
        games: PropTypes.arrayOf(PropTypes.shape({
            display_name: PropTypes.string
        }))
    }).isRequired,
    gameOnClick: PropTypes.func,
    onFinishLesson: PropTypes.func,
    sendJsonToGame: PropTypes.func
}

export default GameSidebar;