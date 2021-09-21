import React from 'react';

import PropTypes from 'prop-types';

import WebCam from '../../../Components/WebCam/WebCam';
import Button from '../../../Components/Button/Button';
import {addClasses} from '../../../utils/addClasses/addClasses';

import './gameSidebar.css';


const GameSidebar = (props) => {

    const {
        lesson, webcamOnClick, gameOnClick, onFinishLesson
    } = props

    const games = lesson?.games
    const activeGame = lesson?.active_game_id

    const gameClickHandler = game => {
        gameOnClick(game)
    }
    const finishLessonClickHandler = () => {
        onFinishLesson()
    }

    return (
        <>
            <WebCam meetingId='123123' onClick={webcamOnClick}/>
            <div className='game__controls'>
                <Button className='btn-control btn-control_back' />
                <Button className='btn-control btn-control_play' />
                <Button className='btn-control btn-control_pause' />
                <Button className='btn-control btn-control_restart' />
                <Button className='btn-control btn-control_forward' />
            </div>
            <div className='game__progress'>
                <div className='game__progress-line'>
                    <span className='game__progress-point' style={{width: '50%'}}/>
                </div>
                <div className='game__progress-time'>18:00</div>
            </div>
            <div className='game__info d-flex flex-column'>
                <h5 className='game__info-title'>Название занятия</h5>
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
                    className='game__info-bottom mt-auto'
                    onClick={finishLessonClickHandler}
                >
                    <button className='btn-complete' type='button'>Завершить занятие</button>
                </div>
            </div>
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