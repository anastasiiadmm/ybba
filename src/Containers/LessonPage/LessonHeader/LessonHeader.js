import React, { useCallback, useContext, useEffect } from 'react';
import { envs, lessonStatuses, userRoles } from 'constants.js';
import { JitsiContext } from 'context/JitsiContext/JitsiContext';

import { startJitsiRecording, stopJitsiRecording } from 'utils/jitsi/utils';
import { addClasses } from 'utils/addClasses/addClasses';
import { checkEnv } from 'utils/common/commonUtils';
import { checkUserRole } from 'utils/user';

import Drag from 'Components/Drag/Drag';
import Webcam from './Webcam/Webcam';
import Timer from './Timer/Timer';

const LessonHeader = (props) => {
  const { api } = useContext(JitsiContext);

  const {
    switchChildWebcamSize,
    onLessonFinish,
    setIsMuted,
    lessonId,
    lesson,
    isStyleDebug,
  } = props;

  const webcamComponentProps = {
    meetingId: lessonId,
    lessonId: lessonId,
    switchChildWebcamSize,
  };

  const startRecording = useCallback(() => {
    if (api && !checkEnv(envs.local)) {
      startJitsiRecording(api);
    }
  }, [api]);
  const stopRecording = useCallback(() => {
    if (api && !checkEnv(envs.local)) {
      stopJitsiRecording(api);
    }
  }, [api]);

  const setMuted = useCallback(async () => {
    const muted = await api.isAudioMuted();
    await setIsMuted(muted);
  }, [api]);

  useEffect(() => {
    startRecording();
    return () => {
      stopRecording();
    }
  }, [api, startRecording, stopRecording]);

  useEffect(() => {
    if (api) {
      setMuted();
    }
  }, [api, setMuted]);

  const webcamComponent = checkUserRole(userRoles.parent) ? (
    <Drag>
      <Webcam {...webcamComponentProps} />
    </Drag>
  ) : (
    <Webcam {...webcamComponentProps} />
  );

  return (
    <header
      className={addClasses('gamef__head position-relative', {
        'gamef__head_teacher': checkUserRole(userRoles.therapist),
        'gamef__head_child': checkUserRole(userRoles.parent),
        'debug--border': isStyleDebug
      })}
    >
      {((lesson?.status !== lessonStatuses.finished &&
         checkUserRole(userRoles.parent)) ||
         checkUserRole(userRoles.therapist)) &&
         lesson?.time_slot && (
          <Timer
            startTime={lesson.time_slot.start_time}
            endTime={lesson.time_slot.end_time}
            onLessonFinish={onLessonFinish}
          />
        )}
      {webcamComponent}
      {checkUserRole(userRoles.therapist) && (
        <div
          className={addClasses('webcam gamef__person-child', {
            'debug--border': isStyleDebug
          })}
          style={{
            height: '260px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          2-nd web camera
        </div>
      )}
    </header>
  );
};

export default LessonHeader;
