import React from 'react';

import GameContainer from '../../GameContainer/GameContainer';
import Button from '../../../Components/Button/Button';

import './gameMain.css'


const GameMain = () => {

    return (
        <>
            <div className='game__block'>
                <div className='game__work-space'>
                    <GameContainer/>
                </div>
            </div>
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
        </>
    );
}

export default GameMain;