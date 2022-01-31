import React, { useCallback, useContext, useEffect, useRef, useState } from 'react';
import { ProgressBar } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import config from 'config.js';
import {
  envs,
  GAME_FILE_TYPE_DATA,
  GAME_FILE_TYPE_FRAMEWORK,
  GAME_FILE_TYPE_LOADER,
  GAME_FILE_TYPE_WASM, GAME_FOLDER_STREAMING_ASSETS, gameUserRoles,
  userRoles,
} from 'constants.js';
import { JitsiContext } from 'context/JitsiContext/JitsiContext';
import Unity, { UnityContext } from 'react-unity-webgl';
import { addClasses } from 'utils/addClasses/addClasses';
import { userSelector } from 'redux/user/userSlice';
import { checkUserRole } from 'utils/user';

const GameContainer = (props) => {
  const {
    setIsUnityInitialized,
    isUnityInitialized,
    setUnityContext,
    unityContext,
    lessonId,
    lesson,
    isStyleDebug,
  } = props;

  const { user } = useSelector(userSelector);

  const [unityLoadProgress, setUnityLoadProgress] = useState(0);

  const getFileUrl = useCallback((fileName) => {
    return lesson.game_build[fileName];
  }, [lesson]);

  const getUserDataForGame = useCallback(() => {
    return {
      nickName: user.email,
      roomId: lessonId,
      gameType: lesson.active_game_id,
      developmentMode: config.appEnvironment === envs.local,
      userRole: gameUserRoles[user.role],
    }
  }, [lesson, lessonId, user]);

  const updateGameJsonData = useCallback(() => {
    const userGameData = getUserDataForGame();
    unityContext.send('JavaHook', 'InitGame', JSON.stringify(userGameData));
  }, [getUserDataForGame, unityContext]);

  const setUnity = useCallback(async () => {
    if (lesson) {
      if (isUnityInitialized) {
        updateGameJsonData();
      } else {
        if (lesson.game_build) {
          const context = new UnityContext({
            loaderUrl: getFileUrl(GAME_FILE_TYPE_LOADER),
            dataUrl: getFileUrl(GAME_FILE_TYPE_DATA),
            frameworkUrl: getFileUrl(GAME_FILE_TYPE_FRAMEWORK),
            codeUrl: getFileUrl(GAME_FILE_TYPE_WASM),
            streamingAssetsUrl: getFileUrl(GAME_FOLDER_STREAMING_ASSETS)
          });
          await setUnityContext(context);
        }
      }
    }
  }, [getFileUrl, isUnityInitialized, lesson, updateGameJsonData]);

  useEffect(() => {
    if (unityContext) {
      unityContext.on('progress', (progress) => {
        setUnityLoadProgress(progress);
      });
      if (unityContext) {
        unityContext.on('GameInitialized', () => {
          updateGameJsonData();
          setIsUnityInitialized(true);
        });
      }
    }
  }, [user, lessonId, unityContext, updateGameJsonData]);


  useEffect(() => {
    setUnity();
  }, [lesson]);

  const canvasParent = useRef();

  return (
    <main
      className={addClasses('gamef__main', {
        'gamef__main_full': checkUserRole(userRoles.parent),
        'parentGameMain': checkUserRole(userRoles.parent),
        'therapistGameMain': checkUserRole(userRoles.therapist),
        'debug--border': isStyleDebug
      })}
    >
      <div className='gamef__work-space'>
        <div
          className={addClasses('gamef__work-space-in', {
            'd-flex justify-content-center': unityLoadProgress >= 1,
          })}
          ref={canvasParent}
          style={{
            backgroundColor: isStyleDebug ? 'teal' : 'transparent'
          }}
        >
          {unityContext && (
            <Unity
              unityContext={unityContext}
              style={{
                width: `${canvasParent.current.clientHeight / 9 * 16}px`,
                height: `${canvasParent.current.clientHeight}px`,
              }}
              className={addClasses('', {
                'd-none': unityLoadProgress < 1,
              })}
            />
          )}
          {unityLoadProgress < 1 && (
            <div style={{ marginTop: 'auto', marginBottom: 'auto' }}>
              <ProgressBar now={unityLoadProgress * 100}/>
            </div>
          )}
        </div>
      </div>
    </main>
  );
};

export default GameContainer;
