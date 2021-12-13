import React, { useCallback, useEffect, useState } from 'react';

import { BrowserPermissionsContext } from 'context/BrowserPermissionsContext/BrowserPermissionsContext';
import { permissionStates } from 'constants.js';

const BrowserPermissionsBlock = (props) => {
  const { children } = props;

  const [isCameraAllowed, setIsCameraAllowed] = useState(false);
  const [isMicrophoneAllowed, setIsMicrophoneAllowed] = useState(false);

  const checkIsCameraAllowed = async () => {
    await setIsCameraAllowed(true);
  };
  const checkIsCameraDenied = async () => {
    await setIsCameraAllowed(false);
  };
  const checkIsCameraPrompt = async () => {
    await checkCameraPermissions();
  };

  const checkIsMicrophoneAllowed = async () => {
    await setIsMicrophoneAllowed(true);
  };
  const checkIsMicrophoneDenied = async () => {
    await setIsMicrophoneAllowed(false);
  };
  const checkIsMicrophonePrompt = async () => {
    await checkMicrophonePermissions();
  };

  const checkCameraPermissions = useCallback(async () => {
    const cameraPermissions = await navigator.permissions.query({
      name: 'camera',
    });

    const permissionStateMapping = {
      [permissionStates.granted]: checkIsCameraAllowed,
      [permissionStates.prompt]: checkIsCameraDenied,
      [permissionStates.denied]: checkIsCameraPrompt,
    };

    await permissionStateMapping[cameraPermissions.state]();
  }, [checkIsCameraPrompt]);

  const checkMicrophonePermissions = useCallback(async () => {
    const microphonePermissions = await navigator.permissions.query({
      name: 'microphone',
    });

    const permissionStateMapping = {
      [permissionStates.granted]: checkIsMicrophoneAllowed,
      [permissionStates.prompt]: checkIsMicrophoneDenied,
      [permissionStates.denied]: checkIsMicrophonePrompt,
    };

    await permissionStateMapping[microphonePermissions.state]();
  }, [checkIsMicrophonePrompt]);

  // useEffect(() => {
  //     checkCameraPermissions()
  //     checkMicrophonePermissions()
  // }, [checkCameraPermissions, checkMicrophonePermissions, isCameraAllowed, isMicrophoneAllowed])

  const context = {
    isCameraAllowed,
    isMicrophoneAllowed,
  };

  return (
    <BrowserPermissionsContext.Provider value={context}>
      {children}
    </BrowserPermissionsContext.Provider>
  );
};

export default BrowserPermissionsBlock;
