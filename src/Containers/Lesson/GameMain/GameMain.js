import React from 'react';

import PropTypes from 'prop-types';

import GameContainer from '../../GameContainer/GameContainer';
import Button from '../../../Components/Button/Button';
import {checkUserRole} from '../../../utils/user';

import {userRoles} from '../../../constants';
import './gameMain.css'


const GameMain = (props) => {

    const {
        gameSessionId
    } = props

    return (
        <>
            <div className='game__block p-0'>
                <div className='game__work-space gameWrapper'>
                    <GameContainer
                        gameSessionId={gameSessionId}
                    />
                </div>
            </div>
            {checkUserRole(userRoles.therapist) && (
                <div className='notes game__notes'>
                    <div className='notes__top'>
                        <span className='notes__title'>Заметки</span>
                        <Button className='notes__link border-0 bg-transparent'>Протокол обследования</Button>
                        <Button className='notes__link border-0 bg-transparent'>Речевая карта</Button>
                    </div>
                    <div className='notes__field'>
                        <form action='#'>
                            <textarea className='notes__area'/>
                            <Button className='notes__btn' type='submit'/>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
}

GameMain.propTypes = {
    gameSessionId: PropTypes.string.isRequired
}

export default GameMain;