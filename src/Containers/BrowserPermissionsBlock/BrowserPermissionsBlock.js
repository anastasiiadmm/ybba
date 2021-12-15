import React, { useCallback, useEffect, useState } from 'react';

import { BrowserPermissionsContext } from 'context/BrowserPermissionsContext/BrowserPermissionsContext';
import { permissionStates } from 'constants.js';

const BrowserPermissionsBlock = (props) => {

    const {
        children
    } = props

    const [isCameraAllowed, setIsCameraAllowed] = useState(false)
    const [isMicrophoneAllowed, setIsMicrophoneAllowed] = useState(false)

    const checkIsCameraAllowed = async () => {
        await setIsCameraAllowed(true)
    }
    const checkIsCameraDenied = async () => {
        await setIsCameraAllowed(false)
    }
    const checkIsCameraPrompt = () => {
        setTimeout(async () => {
            await checkCameraPermissions()
        }, 1000)
    }

    const checkIsMicrophoneAllowed = async () => {
        await setIsMicrophoneAllowed(true)
    }
    const checkIsMicrophoneDenied = async () => {
        await setIsMicrophoneAllowed(false)
    }
    const checkIsMicrophonePrompt = () => {
        setTimeout(async () => {
            await checkMicrophonePermissions()
        }, 1000)
    }

    const checkCameraPermissions = useCallback(async () => {
        const cameraPermissions = await navigator.permissions.query({ name: 'camera' })

        const permissionStateMapping = {
            [permissionStates.granted]: checkIsCameraAllowed,
            [permissionStates.prompt]: checkIsCameraPrompt,
            [permissionStates.denied]: checkIsCameraDenied
        }

        await permissionStateMapping[cameraPermissions.state]()
    }, [checkIsCameraPrompt])

    const checkMicrophonePermissions = useCallback(async () => {
        const microphonePermissions = await navigator.permissions.query({ name: 'microphone' })

        const permissionStateMapping = {
            [permissionStates.granted]: checkIsMicrophoneAllowed,
            [permissionStates.prompt]: checkIsMicrophonePrompt,
            [permissionStates.denied]: checkIsMicrophoneDenied
        }

        await permissionStateMapping[microphonePermissions.state]()
    }, [checkIsMicrophonePrompt])

    useEffect(() => {
        checkCameraPermissions()
        checkMicrophonePermissions()
    }, [checkCameraPermissions, checkMicrophonePermissions, isCameraAllowed, isMicrophoneAllowed])

    const context = {
        isCameraAllowed,
        isMicrophoneAllowed,
    }

    return (
        <BrowserPermissionsContext.Provider value={context}>
            {children}
        </BrowserPermissionsContext.Provider>
    );
};

export default BrowserPermissionsBlock;
