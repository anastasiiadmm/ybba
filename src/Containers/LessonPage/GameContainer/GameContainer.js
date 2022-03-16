import React, { useCallback, useContext, useEffect, useMemo, useRef, useState } from 'react';
import { ProgressBar } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import config from 'config.js';
import {
  buttonVisibleStatuses,
  envs,
  GAME_FILE_TYPE_DATA,
  GAME_FILE_TYPE_FRAMEWORK,
  GAME_FILE_TYPE_LOADER,
  GAME_FILE_TYPE_WASM, GAME_FOLDER_STREAMING_ASSETS, gameUserRoles, IS_DISPLAY_RESTART, lessonProperties,
  userRoles,
} from 'constants.js';
import Unity, { UnityContext } from 'react-unity-webgl';
import { getGameLanguage } from 'utils/language/language';
import { addClasses } from 'utils/addClasses/addClasses';
import { isTestLesson } from 'utils/common/commonUtils';
import { checkUserRole } from 'utils/user';
import { authSelector } from 'redux/auth/authSlice';
import { LessonContext } from 'context/LessonContext/LessonContext';
import { JitsiContext } from 'context/JitsiContext/JitsiContext';

const GameContainer = (props) => {
  const { lesson } = props;

  const { user } = useSelector(authSelector);
  const { api } = useContext(JitsiContext);
  const {
    changeLessonContextProperty,
    isUnityInitialized,
    unityContext,
    isStyleDebug,
    lessonId,
  } = useContext(LessonContext);
  const canvasParent = useRef();

  const [unityLoadProgress, setUnityLoadProgress] = useState(0);
  const [gameHeight, setGameHeight] = useState(0);
  const [webcamHeight, setWebcamHeight] = useState(260);

  const gameWidth = useMemo(() => gameHeight / 9 * 16, [gameHeight]);

  const handleGameContainerResize = useCallback(() => {
    if (checkUserRole(userRoles.parent)) {
      setGameHeight(window.innerHeight);
      return
    }
    let proportionalWidth = 0;
    if (canvasParent.current.clientWidth <= 1060) {
      proportionalWidth = (1060 - canvasParent.current.clientWidth);
    }
    else proportionalWidth = 0;

    setGameHeight(window.innerHeight - 105 - webcamHeight - proportionalWidth);
    console.log(canvasParent.current.clientWidth, proportionalWidth);
  }, [canvasParent]);

  const setCurrentWebcamHeight = useCallback(() => {
    if (checkUserRole(userRoles.parent)) return setWebcamHeight(220);
    const bodyWidth = +document.body.clientWidth;
    bodyWidth <= 1440
      ? setWebcamHeight(140)
      : setWebcamHeight(220);
  }, []);

  const getFileUrl = useCallback((fileName) => {
    return lesson.game_build[fileName];
  }, [lesson]);

  const setIsMuted = useCallback((isMuted) => {
    changeLessonContextProperty(lessonProperties.IS_MUTED, isMuted);
  }, [changeLessonContextProperty]);

  const muteJitsiAudio = useCallback(async () => {
    const muted = await api.isAudioMuted();
    if (!muted) {
      api.executeCommand('toggleAudio');
      setIsMuted(true);
      changeLessonContextProperty(lessonProperties)
    }
  }, [api])

  const unMuteJitsiAudio = useCallback(async () => {
    const muted = await api.isAudioMuted()
    if (muted) {
      api.executeCommand('toggleAudio');
      setIsMuted(false);
    }
  }, [api]);

  const copyToClipboard = (text) => {
    navigator.clipboard?.writeText(text);
  }

  const updateButtonState = useCallback((buttonStates) => {
    console.log('ButtonStates', buttonStates);

    changeLessonContextProperty(buttonVisibleStatuses.IS_INTRO_BUTTON_VISIBLE, buttonStates.IntroButton);
    changeLessonContextProperty(buttonVisibleStatuses.IS_NEXT_BUTTON_VISIBLE, buttonStates.NextButton);
    changeLessonContextProperty(buttonVisibleStatuses.IS_PREV_BUTTON_VISIBLE, buttonStates.PrevButton);
    changeLessonContextProperty(buttonVisibleStatuses.IS_REPEAT_BUTTON_VISIBLE, buttonStates.RepeatButton);
    changeLessonContextProperty(lessonProperties.IS_DISPLAY_RESTART, !buttonStates.StartButton);
  }, [changeLessonContextProperty]);

  const userDataForGame = useMemo(() => {
    const playersNum = isTestLesson(lessonId) ? 1 : 2;

    return {
      nickName: user.email,
      roomId: lessonId,
      gameType: +lesson.active_game_id,
      // developmentMode: config.appEnvironment === envs.local,
      developmentMode: true,
      userRole: gameUserRoles[user.role],
      languageType: getGameLanguage(),
      playersNum,
    }
  }, [lesson?.active_game_id]);

  const callInitHook = useCallback(() => {
    console.log('UPDATE_GAME_JSON_DATA', userDataForGame);
    setTimeout(() => {
      console.log('JavaHook', 'InitGame', unityContext);
      unityContext.send('JavaHook', 'InitGame', JSON.stringify(userDataForGame));
    }, 100);
  }, [unityContext, userDataForGame]);

  const initUnityContext = useCallback(() => {
    console.log('initUnityContext', isUnityInitialized);
    if (!isUnityInitialized && lesson?.game_build) {
      const context = new UnityContext({
        loaderUrl: getFileUrl(GAME_FILE_TYPE_LOADER),
        dataUrl: getFileUrl(GAME_FILE_TYPE_DATA),
        frameworkUrl: getFileUrl(GAME_FILE_TYPE_FRAMEWORK),
        codeUrl: getFileUrl(GAME_FILE_TYPE_WASM),
        streamingAssetsUrl: getFileUrl(GAME_FOLDER_STREAMING_ASSETS)
      });
      changeLessonContextProperty(lessonProperties.UNITY_CONTEXT, context);
    }
  }, [getFileUrl, lesson?.game_build]);

  const handleUnityEvents = useCallback(() => {
    if (unityContext) {
      unityContext.on('progress', (progress) => {
        setUnityLoadProgress(progress);
      });
      unityContext.on('loaded', () => {
        console.log('GAME_LOADED', unityContext);
        changeLessonContextProperty(lessonProperties.IS_UNITY_INITIALIZED, true);
        callInitHook();
      });

      unityContext.on('GameInitialized', () => {
        console.log('GAME_INITIALIZED', unityContext);
      });
      unityContext.on('CopyLogData', (logData) => {
        console.log('COPY_LOG_DATA', logData);
        copyToClipboard(logData);
      });
      unityContext.on('MuteMicrophone', () => {
        muteJitsiAudio();
      });
      unityContext.on('UnMuteMicrophone', () => {
        unMuteJitsiAudio();
      });
      unityContext.on('UpdateButtonState', (data) => {
        updateButtonState(JSON.parse(data));
      });
    }
  }, [unityContext, muteJitsiAudio, unMuteJitsiAudio, updateButtonState]);

  useEffect(initUnityContext, [initUnityContext]);
  useEffect(handleUnityEvents, [unityContext, handleUnityEvents]);
  useEffect(() => {
    if (unityContext) callInitHook();
  }, [lesson?.active_game_id]);

  useEffect(() => {
    handleGameContainerResize();
    setCurrentWebcamHeight();

    window.addEventListener('resize', () => {
      handleGameContainerResize();
      setCurrentWebcamHeight();
    });
  }, [handleGameContainerResize]);

  return (
    <main
      className={addClasses('gamef__main', {
        'gamef__main_full': checkUserRole(userRoles.parent),
        'parentGameMain': checkUserRole(userRoles.parent),
        'therapistGameMain': checkUserRole(userRoles.therapist),
        'debug--border': isStyleDebug,
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
                width: `${gameWidth}px`,
                height: `${gameHeight}px`,
              }}
              className={addClasses('', {
                'd-none': unityLoadProgress < 1,
                'debug--border': isStyleDebug
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
