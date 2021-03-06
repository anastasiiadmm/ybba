import React, { useCallback, useContext, useState } from 'react';
import { useSelector } from 'react-redux';
import { gameActions, lessonProperties } from 'constants.js';

import { LessonContext } from 'context/LessonContext/LessonContext';
import { JitsiContext } from 'context/JitsiContext/JitsiContext';

import { lessonSelector } from 'redux/lesson/lessonSlice';
import { addClasses } from 'utils/addClasses/addClasses';

const LessonFooterControls = (props) => {
  const { switchChildWebcamSize } = props;

  const { isParentWebcamIncreased } = useSelector(lessonSelector);
  const { api } = useContext(JitsiContext);
  const {
    changeLessonContextProperty,
    isTeacherHaveControlOnGame,
    isUnityInitialized,
    isDisplayRestart,
    isGameTipOpen,
    unityContext,
    isStyleDebug,
    isGameMuted,
    isMuted,
    isNextButtonVisible,
    isPrevButtonVisible,
    isRepeatButtonVisible,
  } = useContext(LessonContext);

  const setIsMuted = useCallback(async (isMuted) => {
    await changeLessonContextProperty(lessonProperties.IS_MUTED, isMuted);
  }, [changeLessonContextProperty]);

  const toggleMute = useCallback(async () => {
    if (api) {
      try {
        await setIsMuted(!isMuted);
        api.executeCommand('toggleAudio');
      } catch {
        const muted = await api.isAudioMuted();
        await setIsMuted(muted);
      }
    }
  }, [api, isMuted]);

  const triggerGameAction = (gameAction, arg) => {
    if (unityContext) {
      console.log('Triggered action:', gameAction);
      unityContext.send('JavaHook', gameAction, arg);
    }
  };

  const GameActionHandler = (gameAction) => {
    return () => triggerGameAction(gameAction);
  };

  const getGameControlForTeacher = () => {
    triggerGameAction(gameActions.TEACHER_MOD, +!isTeacherHaveControlOnGame);
    changeLessonContextProperty(
      lessonProperties.IS_TEACHER_HAVE_CONTROL_ON_GAME,
      !isTeacherHaveControlOnGame,
    );
  }

  const startGame = () => {
    triggerGameAction(gameActions.START_GAME);
    changeLessonContextProperty(lessonProperties.IS_DISPLAY_RESTART, true);
  }

  const toggleGameTip = () => {
    changeLessonContextProperty(lessonProperties.IS_GAME_TIP_OPEN, !isGameTipOpen);
  }
  const toggleGameMusic = () => {
    changeLessonContextProperty(lessonProperties.IS_GAME_MUTED, !isGameMuted);
    return isGameMuted
      ? triggerGameAction(gameActions.UN_MUTE_GAME_SOUND)
      : triggerGameAction(gameActions.MUTE_GAME_SOUND);
  }

  return (
    <footer className={addClasses('gamef__footer', {
      'debug--border': isStyleDebug
    })}>
      <div className='gamef__controls'>
        <div>
          <button
            type='button'
            className={addClasses('', {
              'check-game-button_active check-game-button__active':
                !isParentWebcamIncreased,
              'check-game-button_inactive check-game-button__inactive':
              isParentWebcamIncreased,
            })}
            onClick={() => switchChildWebcamSize(false)}
          />
          <button
            type='button'
            className={addClasses('', {
              'play-game-button_active play-game-button__active':
              isParentWebcamIncreased,
              'play-game-button_inactive play-game-button__inactive':
                !isParentWebcamIncreased,
            })}
            onClick={() => switchChildWebcamSize(true)}
          />

          <button
            className={addClasses('', {
              'gamef__microphone_muted': isMuted,
              'gamef__microphone': !isMuted,
            })}
            type='button'
            onClick={toggleMute}
          />
          <button
            className={addClasses('gamef__get-control', {
              'button-disabled': !isUnityInitialized,
              'active': isTeacherHaveControlOnGame,
            })}
            disabled={!isUnityInitialized}
            type='button'
            onClick={getGameControlForTeacher}
          />
        </div>

        <div>
          {isDisplayRestart ? (
            <button
              className='gamef__restart'
              type='button'
              onClick={GameActionHandler(gameActions.RESTART_GAME)}
            />
            ) : (
            <button
              className='gamef__start'
              type='button'
              onClick={() => startGame()}
            />
          )}
          {/*<button*/}
          {/*  className={addClasses('gamef__volume', {*/}
          {/*    'button-disabled': !isIntroButtonVisible,*/}
          {/*  })}*/}
          {/*  disabled={!isIntroButtonVisible}*/}
          {/*  type='button'*/}
          {/*  onClick={GameActionHandler(gameActions.INTRO_SOUND)}*/}
          {/*/>*/}
          <button
            className={addClasses('', {
              'gamef__unmute_music': !isGameMuted,
              'gamef__mute_music': isGameMuted,
            })}
            type='button'
            onClick={() => toggleGameMusic()}
          />
          <button
            className={addClasses('gamef__repeat-sound', {
              'button-disabled': !isRepeatButtonVisible,
            })}
            disabled={!isRepeatButtonVisible}
            type='button'
            onClick={GameActionHandler(gameActions.REPEAT)}
          />
          <button
            className={addClasses('gamef__arrow-left', {
              'button-disabled': !isPrevButtonVisible,
            })}
            disabled={!isPrevButtonVisible}
            type="button"
            onClick={GameActionHandler(gameActions.PREV_ACTION)}
          />
          <button
            className={addClasses('gamef__arrow-right', {
              'button-disabled': !isNextButtonVisible,
            })}
            disabled={!isNextButtonVisible}
            type='button'
            onClick={GameActionHandler(gameActions.NEXT_ACTION)}
          />
          <div
            className='divider horizontal'
            style={{
              marginRight: '10px',
              marginLeft: '2px',
            }}
          />
          <button
            className={addClasses('gamef__question', {
              'open': isGameTipOpen
            })}
            type='button'
            onClick={() => toggleGameTip()}
          />
        </div>
      </div>
    </footer>
  );
};

export default LessonFooterControls;
