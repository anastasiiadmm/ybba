import React, { useCallback, useContext, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { toast } from 'react-toastify';

import { defineUser, initSessionStack, stopSessionStackRecording } from 'utils/sessionstack/utils';
import { checkEnv } from 'utils/common/commonUtils';
import { checkUserRole } from 'utils/user';
import {
  envs,
  LESSON_STATUS_FINISHED,
  lessonProperties,
  lessonStatuses,
  userRoles,
} from 'constants.js';

import { clearLessonState, lessonSelector } from 'redux/lesson/lessonSlice';
import { changeLessonStatus, resizeChildWebcam } from 'redux/lesson/actions';
import { userSelector } from 'redux/user/userSlice';

import { BrowserPermissionsContext } from 'context/BrowserPermissionsContext/BrowserPermissionsContext';
import { LessonContext } from 'context/LessonContext/LessonContext';
import { WsContext } from 'context/WsContext/WsContext';

import Modal from 'Components/Modal/Modal';
import GameTipSidebar from './GameTipSidebar/GameTipSidebar';
import LessonFooterControls from './LessonFooterControls/LessonFooterControls';
import LessonSpeechCard from './LessonSpeechCard/LessonSpeechCard';
import ProtocolSidebar from './ProtocolSidebar/ProtocolSidebar';
import GameContainer from './GameContainer/GameContainer';
import GameCarousel from './GameCarousel/GameCarousel';
import LessonHeader from './LessonHeader/LessonHeader';
import './lessonPage.css';

const LessonPage = (props) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const { lesson, error } = useSelector(lessonSelector);
  const { user } = useSelector(userSelector);
  const { sendWsAction } = useContext(WsContext);
  const {
    changeLessonContextProperty,
    isUnityInitialized,
    isGameTipOpen,
    activeGame,
    lessonId,
  } = useContext(LessonContext);

  const [protocolModalIsOpen, setProtocolModalIsOpen] = useState(false);
  const toggleProtocolModal = async () => await setProtocolModalIsOpen(!protocolModalIsOpen);

  const { isMicrophoneAllowed, isCameraAllowed } = useContext(BrowserPermissionsContext);

  const onLessonFinish = async () => {
    await sendWsAction(
      changeLessonStatus({
        status: LESSON_STATUS_FINISHED,
        lesson_id: lessonId,
      })
    );
    await dispatch(clearLessonState());
  };

  const switchChildWebcamSize = (value) => {
    sendWsAction(
      resizeChildWebcam({
        lesson_id: lessonId,
        is_parent_webcam_increased: value,
      })
    );
  };

  const startSTRecording = useCallback(() => {
    if (!checkEnv(envs.local) && user) {
      initSessionStack();
      defineUser({
        userId: user?.id,
        email: user?.email,
        role: user?.role,
        displayName: user?.profile
          ? `${user?.profile.first_name} ${user?.profile.last_name}`
          : 'anonymous',
      });
    }
  }, [user]);
  const stopSTRecording = () => {
    if (!checkEnv(envs.local)) {
      stopSessionStackRecording();
    }
  };

  const setIsGameTipOpen = useCallback((isTipOpen) => {
    changeLessonContextProperty(
      lessonProperties.IS_GAME_TIP_OPEN,
      isTipOpen,
    )
  }, [changeLessonContextProperty]);

  useEffect(() => {
    if (lesson?.games && lesson?.active_game_id) {
      const active = lesson.games?.find((game) => {
        return game.game_type === parseInt(lesson.active_game_id)
      });
      changeLessonContextProperty(lessonProperties.ACTIVE_GAME, active);
    }
  }, [lesson]);

  useEffect(() => {
    startSTRecording();

    return () => stopSTRecording();
  }, [startSTRecording]);

  useEffect(() => {
    if (lesson && checkUserRole(userRoles.parent) && lesson.status === lessonStatuses.finished) {
      history.push('/')
    }
  }, [history, lesson])

  useEffect(() => {
    if (error) {
      history.push('/')
    }
  }, [error, history]);

  useEffect(() => {
    if (!isMicrophoneAllowed && !isCameraAllowed) {
      toast.info('?????????????????? ???????????? ?????? ???????????? ?? ?????????????????? ???? ?????????? ????????????????');
    }
  }, [isCameraAllowed, isMicrophoneAllowed]);

  useEffect(() => {
    dispatch(clearLessonState());
  }, [dispatch]);

  return (
    <>
      <Modal
        isOpen={protocolModalIsOpen}
        toggle={toggleProtocolModal}
        width={30}
      >
        <p>?????????????????? ?????????????????????? ???????? ?? ???????????????? ???????????????? ????????????????????, ?????????????? ?????????? ???????????????????????? ?????? ???????????????????? ?????????????? ??????????</p>
        <button className='protocol__submit' onClick={toggleProtocolModal}>OK</button>
      </Modal>

      <div className='gamef position-relative overflow-hidden'>
        {lesson && lesson.status !== lessonStatuses.finished && (
          <>
            <LessonHeader
              switchChildWebcamSize={switchChildWebcamSize}
              onLessonFinish={onLessonFinish}
              lesson={lesson}
            />
            <>
              <GameContainer lesson={lesson} />
              {checkUserRole(userRoles.therapist) && (
                <>
                  {lesson?.games?.length &&
                    <GameCarousel games={lesson.games} />
                  }
                  <LessonFooterControls
                    switchChildWebcamSize={switchChildWebcamSize}
                  />
                </>
              )}
            </>
          </>
        )}

        {lesson && lesson.status === lessonStatuses.finished && (
          <LessonSpeechCard
            lesson={lesson}
          />
        )}

        {checkUserRole(userRoles.therapist) &&
          <>
            {isGameTipOpen ? (
              <GameTipSidebar
                setIsGameTipOpen={setIsGameTipOpen}
                gameDescription={activeGame.description}
                gameName={activeGame.name}
              />
            ) : (
              <ProtocolSidebar
                  toggleProtocolModal={toggleProtocolModal}
                isUnityInitialized={isUnityInitialized}
                lesson={lesson}
              />
            )}
          </>
        }
      </div>
    </>
  );
};

export default LessonPage;
