import React, {useState, useEffect} from 'react';

import {useSelector} from 'react-redux';

import {lessonSelector} from '../../redux/lesson/lessonSlice';
import Unity, {UnityContext} from 'react-unity-webgl';
import {
    GAME_FILE_TYPE_LOADER,
    GAME_FILE_TYPE_DATA,
    GAME_FILE_TYPE_FRAMEWORK,
    GAME_FILE_TYPE_WASM
} from '../../constants';

import './gameContainer.css'


const GameContainer = () => {

    const [unityContext, setUnityContext] = useState(null)
    const {activeGame} = useSelector(lessonSelector)


    const getUrlToFile = fileType => {
        const gameLoaderFile = activeGame.files.find(file => file.file_type === fileType)
        return gameLoaderFile.path
    }
    const setNewUnityContext = () => {
        const newContext = new UnityContext({
            loaderUrl: getUrlToFile(GAME_FILE_TYPE_LOADER),
            dataUrl: getUrlToFile(GAME_FILE_TYPE_DATA),
            frameworkUrl: getUrlToFile(GAME_FILE_TYPE_FRAMEWORK),
            codeUrl: getUrlToFile(GAME_FILE_TYPE_WASM)
        })
        setUnityContext(newContext)
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
                <div className='gameContainerLoader'><span style={{width: '50%'}}/></div>
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