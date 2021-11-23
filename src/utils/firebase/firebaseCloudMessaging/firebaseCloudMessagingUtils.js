import { getToken as firebaseGetToken } from 'firebase/messaging';
import axiosApi from 'axios.js';

import { messaging } from 'firebase.js';
import { serverUrls } from 'constants.js';
import config from 'config.js';

const key = 'BCSrGOU83odHAyKA5tFmSvxUG2z17vgMPAgFFwbDblol0uKUxS8H5UdfDTpVFqlgVmhhcX07dW7cvjgqESb2dgw'

/**
 * Async function to get notification token from user
 * @param {function} setTokenFound setState function to update app state
 * @returns {Promise<void>}
 */
export const getToken = async (setTokenFound) => {
    try {
        const currentToken = await firebaseGetToken(messaging, { vapidKey: key })
        console.log('Asd', currentToken)
        if (currentToken) {
            console.log('Asd', 'current token for client: ', currentToken);
            await sendTokenToServer(currentToken)
            setTokenFound(true);
        } else {
            console.log('Asd', 'No registration token available. Request permission to generate one.');
            setTokenFound(false);
        }
    } catch (err) {
        console.log('Asd', 'An error occurred while retrieving token. ', err);
    }
}

/**
 * Async function to save user notification token on server
 * @param {string} token Notification token
 * @returns {Promise<any>}
 */
export const sendTokenToServer = async (token) => {
    const resp = await axiosApi.post('/devices/', {
        registration_id: token,
        type: 'web'
    }, { baseURL: serverUrls[config.appEnvironment] })

    return resp.data
}