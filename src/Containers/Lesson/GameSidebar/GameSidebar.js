import React from 'react';

import PropTypes from 'prop-types';

import WebCam from '../../../Components/WebCam/WebCam';
import Button from '../../../Components/Button/Button';


const GameSidebar = (props) => {

    const {webcamOnClick} = props

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
            <div className='game__info'>
                <h5 className='game__info-title'>Название занятия</h5>
                <ol className='game__lesson-list'>
                    <li className='game__lesson-item'>Биба #3</li>
                    <li className='game__lesson-item'>Мультфильм #1</li>
                    <li className='game__lesson-item'>Мультфильм #2</li>
                </ol>
                <div className='game__info-bottom'>
                    <button className='btn-complete' type='button'>Завершить занятие</button>
                </div>
            </div>
        </>
    );
}

GameSidebar.propTypes = {
    webcamOnClick: PropTypes.func,
}

export default GameSidebar;