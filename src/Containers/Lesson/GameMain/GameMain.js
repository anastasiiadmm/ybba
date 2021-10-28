import React, {useState, useEffect} from 'react';

import PropTypes from 'prop-types';

import GameContainer from 'Containers/GameContainer/GameContainer';
import Button from 'Components/Button/Button';
import {checkUserRole} from 'utils/user.js';
import {userRoles} from 'constants.js';
import {addClasses} from 'utils/addClasses/addClasses.js';

import 'Containers/Lesson/GameMain/gameMain.css'


const GameMain = (props) => {

    const {
        gameSessionId, speechCardOnClick
    } = props

    const [notes, setNotes] = useState('')

    const lsKey = `${gameSessionId}-notes`

    const notesChangeHandler = e => {
        setNotes(e.target.value)
        localStorage.setItem(lsKey, e.target.value)
    }

    useEffect(() => {
        setNotes(
            localStorage.getItem(lsKey)
        )
    }, [])

    return (
        <>
            <div className={addClasses('game__block p-0', {
                'h-100': checkUserRole(userRoles.parent)
            })}>
                <div className={addClasses('game__work-space gameWrapper', {
                    'h-100': checkUserRole(userRoles.parent)
                })}>
                    <GameContainer
                        gameSessionId={gameSessionId}
                    />
                </div>
            </div>
            {checkUserRole(userRoles.therapist) && (
                <div className='notes game__notes'>
                    <div className='notes__top'>
                        <span className='notes__title'>Заметки</span>
                        <Button
                            className='notes__link border-0 bg-transparent'
                        >
                            Протокол обследования
                        </Button>
                        <Button
                            className='notes__link border-0 bg-transparent'
                            onClick={speechCardOnClick}
                        >
                            Речевая карта
                        </Button>
                    </div>
                    <div className='notes__field'>
                        <form action='#'>
                            <textarea
                                className='notes__area'
                                onChange={notesChangeHandler}
                                value={notes}
                            />
                        </form>
                    </div>
                </div>
            )}
        </>
    );
}

GameMain.propTypes = {
    gameSessionId: PropTypes.string.isRequired,
    speechCardOnClick: PropTypes.func
}

export default GameMain;