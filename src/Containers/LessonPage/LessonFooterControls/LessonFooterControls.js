import React, { useCallback, useContext, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { gameActions, LESSON_STATUS_FINISHED } from 'constants.js';

import { JitsiContext } from 'context/JitsiContext/JitsiContext';
import { WsContext } from 'context/WsContext/WsContext';

import { clearLessonState, lessonSelector } from 'redux/lesson/lessonSlice';
import { changeLessonStatus } from 'redux/lesson/actions';
import { addClasses } from 'utils/addClasses/addClasses';

const LessonFooterControls = (props) => {
  const {
    toggleProtocolModal,
    switchChildWebcamSize,
    unityContext,
    lessonId,
    setIsMuted,
    isMuted,
    isStyleDebug,
  } = props;

  const { isParentWebcamIncreased } = useSelector(lessonSelector);
  const { sendWsAction } = useContext(WsContext);
  const { api } = useContext(JitsiContext);
  const dispatch = useDispatch();

  const [isTeacherHaveControlOnGame, setIsTeacherHaveControlOnGame] = useState(false);
  const [gameIsStarted, setGameIsStarted] = useState(false);

  const toggleMute = useCallback(async () => {
    if (api) {
      api.executeCommand('toggleAudio');
      await setIsMuted(!isMuted);
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
    triggerGameAction(gameActions.TEACHER_MOD, +!isTeacherHaveControlOnGame)
    setIsTeacherHaveControlOnGame(!isTeacherHaveControlOnGame)
  }

  const startGame = () => {
    triggerGameAction(gameActions.START_GAME);
    setGameIsStarted(true);
  }

  const onLessonFinish = async () => {
    // TODO event in props
    await toggleProtocolModal()
    await sendWsAction(
      changeLessonStatus({
        status: LESSON_STATUS_FINISHED,
        lesson_id: lessonId,
      })
    );
    await dispatch(clearLessonState());
  };

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
              'active': isTeacherHaveControlOnGame
            })}
            type='button'
            onClick={getGameControlForTeacher}
          />
        </div>

        <div>
          {gameIsStarted ? (
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
          <button
            className='gamef__volume'
            type='button'
            onClick={GameActionHandler(gameActions.START_GAME)}
          />
          <button
            className='gamef__music'
            type='button'
            onClick={GameActionHandler(gameActions.START_GAME)}
          />
          <button
            className='gamef__repeat-sound'
            type='button'
            onClick={GameActionHandler(gameActions.START_GAME)}
          />
          <button
            className='gamef__arrow-left'
            type='button'
            onClick={GameActionHandler(gameActions.START_GAME)}
          />
          <button
            className='gamef__arrow-right'
            type='button'
            onClick={GameActionHandler(gameActions.START_GAME)}
          />
          <div
            className='divider horizontal'
            style={{
              marginRight: '10px',
              marginLeft: '2px',
            }}
          />
          <button
            className='gamef__question'
            type='button'
            onClick={GameActionHandler(gameActions.START_GAME)}
          />

          {/*<button*/}
          {/*  className='gamef__next'*/}
          {/*  type='button'*/}
          {/*  onClick={GameActionHandler(gameActions.INTRO_SOUND)}*/}
          {/*>*/}
          {/*  Интро*/}
          {/*</button>*/}
          {/*<button*/}
          {/*  className='gamef__prev'*/}
          {/*  type='button'*/}
          {/*  onClick={GameActionHandler(gameActions.PREV_ACTION)}*/}
          {/*>*/}
          {/*  Ещё раз*/}
          {/*</button>*/}
          {/*<button*/}
          {/*  className='gamef__next'*/}
          {/*  type='button'*/}
          {/*  onClick={GameActionHandler(gameActions.NEXT_ACTION)}*/}
          {/*>*/}
          {/*  Далее*/}
          {/*</button>*/}

          {/*<button*/}
          {/*  className='gamef__finish'*/}
          {/*  type='button'*/}
          {/*  onClick={onLessonFinish}*/}
          {/*>*/}
          {/*  Завершить занятие*/}
          {/*</button>*/}
        </div>
      </div>
    </footer>
  );
};

export default LessonFooterControls;
