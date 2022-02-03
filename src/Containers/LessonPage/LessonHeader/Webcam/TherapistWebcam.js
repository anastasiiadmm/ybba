import React, { useCallback, useEffect, useRef } from 'react';

const TherapistWebcam = (props) => {
  const {
    webcamHeight,
  } = props;

  const webcam = useRef();

  const getCurrentCamera = useCallback(async () => {
    const devices = await navigator.mediaDevices.enumerateDevices();
    const videoDevices = devices.filter(device => device.kind === 'videoinput');
    if (videoDevices && videoDevices.length) {
      return videoDevices[0];
    }
  }, [navigator.mediaDevices]);

  const getConstraints = useCallback(async () => {
    const currentDeviceID = (await getCurrentCamera())?.id || '';

    if (navigator?.mediaDevices) {
      return {
        video: {
          width: {
            min: 1280,
            ideal: 1920,
            max: 2560,
          },
          height: {
            min: 720,
            ideal: 1080,
            max: 1440
          },
        },
        deviceId: {
          exact: currentDeviceID,
        }
      }
    }
  }, [getCurrentCamera]);

  const startStream = useCallback(async (constraints) => {
    console.log(webcam.current.srcObject);
    webcam.current.srcObject = await navigator.mediaDevices.getUserMedia(constraints);
  }, []);

  const startWebcamStreaming = useCallback(async () => {
    const constraints = await getConstraints();
    await startStream(constraints);
  }, [getConstraints, startStream]);

  useEffect(() => {
    startWebcamStreaming();
  }, [startStream, webcam]);

  return (
    <div className='webcam gamef__person-child'>
      <div className='therapist__webcam'>
        <video
          height={webcamHeight}
          ref={webcam}
          autoPlay
        />
      </div>
    </div>
  );
};

export default TherapistWebcam;
