import React, {useState, useEffect, useContext} from 'react';
import Unity, {UnityContext} from 'react-unity-webgl';
import {GameContext} from '../../context/GameContext/GameContext';
import {
    GAME_FILE_TYPE_LOADER,
    GAME_FILE_TYPE_DATA,
    GAME_FILE_TYPE_FRAMEWORK,
    GAME_FILE_TYPE_WASM
} from '../../constants';

import './gameContainer.css'


const GameContainer = () => {

    const {activeGame} = useContext(GameContext)

    const [unityContext, setUnityContext] = useState(null)

    const getFileUrl = fileName => {
        return activeGame[fileName].replace('localhost', '172.29.77.31')
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

export default GameContainer;