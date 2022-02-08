import React, { useCallback, useContext, useEffect, useRef, useState } from 'react';

const TherapistWebcam = (props) => {
  const {
    webcamHeight,
  } = props;

  const [isStreaming, setIsStreaming] = useState(false);
  const webcam = useRef();

  const getCurrentCamera = useCallback(async () => {
    const devices = await navigator.mediaDevices.enumerateDevices();
    const videoDevices = devices.filter(device => device.kind === 'videoinput');
    if (videoDevices && videoDevices.length) {
      return videoDevices[0];
    }
  }, [navigator.mediaDevices]);

  const getConstraints = useCallback(async () => {
    const camera = await getCurrentCamera();
    const currentDeviceID = camera?.deviceId;
    console.log(currentDeviceID, camera);

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
      // deviceId: {
      //   exact: currentDeviceID,
      // }
    }
  }, [getCurrentCamera]);

  const startStream = useCallback(async (constraints) => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia(constraints)
      console.log(constraints, stream);
      webcam.current.srcObject = stream;
      setIsStreaming(true);
      console.log('Stream is start');
    } catch (e) {
      console.error('Stop stream', e);
      setIsStreaming(false);
    }
  }, []);

  const startWebcamStreaming = useCallback(async () => {
    const constraints = await getConstraints();
    await startStream(constraints);
  }, [getConstraints, startStream]);

  useEffect(() => {
    if (navigator?.mediaDevices && webcam) {
      startWebcamStreaming();

      navigator.mediaDevices.ondevicechange = (event) => {
        console.log(event);
        startWebcamStreaming();
      }
    }
  }, [startStream, webcam]);

  return (
    <div className='webcam gamef__person-child'>
      <div className='therapist__webcam'>
        <video
          height={webcamHeight}
          ref={webcam}
          autoPlay
        />
        {!isStreaming && (
          <div className='webcam__placeholder'>
            Not found camera
          </div>
        )}
      </div>
    </div>
  );
};

export default TherapistWebcam;
