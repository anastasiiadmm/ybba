import React, { useState, useEffect, useCallback } from 'react';

import { FirebaseContext } from 'context/Firebase/FirebaseContext.js';
import { permissionStates } from 'constants.js';
import { getToken } from 'utils/firebase/firebaseCloudMessaging/firebaseCloudMessagingUtils.js';


const FirebaseBlock = (props) => {

    const {
        children
    } = props

    const [isTokenFound, setIsTokenFound] = useState(false)

    const checkIsNotificationsAllowed = async () => {
        await setIsTokenFound(true)
    }
    const checkIsNotificationsDenied = async () => {
        await setIsTokenFound(false)
        await getToken(setIsTokenFound)
    }
    const checkIsNotificationsPrompt = async () => {
        await setIsTokenFound(false)
        await getToken(setIsTokenFound)
    }

    const checkNotifications = useCallback(async () => {
        const permission = await navigator.permissions.query({ name: 'notifications' })

        const permissionStateMapping = {
            [permissionStates.granted]: checkIsNotificationsAllowed,
            [permissionStates.prompt]: checkIsNotificationsPrompt,
            [permissionStates.denied]: checkIsNotificationsDenied
        }

        await permissionStateMapping[permission.state]()
    }, [])

    useEffect(() => {
        checkNotifications()
    }, [checkNotifications])

    const context = {
        firebaseNotificationsAllowed: isTokenFound
    }

    return (
        <FirebaseContext.Provider value={context}>
            {children}
        </FirebaseContext.Provider>
    );
}

export default FirebaseBlock;