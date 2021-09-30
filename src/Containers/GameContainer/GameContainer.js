import React, {useState, useEffect, useContext} from 'react';

import Unity, {UnityContext} from 'react-unity-webgl';

import {GameContext} from '../../context/GameContext/GameContext';
import {LessonContext} from '../../context/LessonContext/LessonContext';
import {
    GAME_FILE_TYPE_LOADER,
    GAME_FILE_TYPE_DATA,
    GAME_FILE_TYPE_FRAMEWORK,
    GAME_FILE_TYPE_WASM, userRoles
} from '../../constants';

import './gameContainer.css'
import {checkUserRole} from '../../utils/user';
import PropTypes from 'prop-types';


const GameContainer = (props) => {

    const {
        gameSessionId
    } = props

    const {activeGame} = useContext(GameContext)
    const {gameAction, triggerGameAction} = useContext(LessonContext)

    const [unityContext, setUnityContext] = useState(null)

    const getFileUrl = fileName => {
        return activeGame[fileName]
    }

    const setNewUnityContext = async () => {
        await setUnityContext(null)
        const newContext = new UnityContext({
            loaderUrl: getFileUrl(GAME_FILE_TYPE_LOADER),
            dataUrl: getFileUrl(GAME_FILE_TYPE_DATA),
            frameworkUrl: getFileUrl(GAME_FILE_TYPE_FRAMEWORK),
            codeUrl: getFileUrl(GAME_FILE_TYPE_WASM)
        })
        await setUnityContext(newContext)
    }

    useEffect(() => {
        if (activeGame) {
            setNewUnityContext()
        }
        // eslint-disable-next-line
    }, [activeGame])

    useEffect(() => {
        if (gameAction) {
            unityContext.send('WebData', gameAction)
        }
        triggerGameAction('')
        // eslint-disable-next-line
    }, [gameAction])

    useEffect(() => {
        let json = {}
        let interval
        if (checkUserRole(userRoles.therapist)) {
            json = {IsServer: true, Id: gameSessionId, FreeGame: false}
        }
        if (checkUserRole(userRoles.parent)) {
            json = {IsServer: false, Id: gameSessionId, FreeGame: false}
        }
        if (unityContext) {
            let tryCount = 0
            interval = setInterval(() => {
                tryCount += 1
                unityContext.send('WebData', 'ReadWebData', JSON.stringify(json))
                if (tryCount >= 100) {
                    clearInterval(interval)
                }
            }, 100)
        }

        return () => {
            clearInterval(interval)
        }
    }, [unityContext])

    if (!activeGame) {
        return <div className='gameContainerLoaderWrapper gameContainer'>
            <div className='gameContainerLoaderBlock'>
                <p className='game__loader-text'>Нет игр для урока</p>
            </div>
        </div>
    }

    if (!unityContext) {
        return <div className='gameContainerLoaderWrapper gameContainer'>
            <div className='gameContainerLoaderBlock'>
                <p className='game__loader-text'>Настраиваем игру</p>
            </div>
        </div>
    }

    return (
        <Unity
            unityContext={unityContext}
            className='game__screen'
        />
    );
}

GameContainer.propTypes = {
    gameSessionId: PropTypes.string.isRequired
}

export default GameContainer;