import { initializeApp } from 'firebase/app';
import { getMessaging, getToken as firebaseGetToken } from 'firebase/messaging';


const firebaseConfig = {
    apiKey: 'AIzaSyD7-7BAb7UxrHT_m_yABMglwY4S3tYfzLY',
    authDomain: 'my-own-ybba-project.firebaseapp.com',
    projectId: 'my-own-ybba-project',
    storageBucket: 'my-own-ybba-project.appspot.com',
    messagingSenderId: '98621943831',
    appId: '1:98621943831:web:74f4320d2b429256d32c52'
};

const firebaseApp = initializeApp(firebaseConfig);
export const messaging = getMessaging(firebaseApp);

const key = 'BCSrGOU83odHAyKA5tFmSvxUG2z17vgMPAgFFwbDblol0uKUxS8H5UdfDTpVFqlgVmhhcX07dW7cvjgqESb2dgw'

export const getToken = async (setTokenFound) => {
    try {
        const currentToken = await firebaseGetToken(messaging, { vapidKey: key })
        console.log('Asd', currentToken)
        if (currentToken) {
            console.log('Asd', 'current token for client: ', currentToken);
            setTokenFound(true);
        } else {
            console.log('Asd', 'No registration token available. Request permission to generate one.');
            setTokenFound(false);
        }
    } catch (err) {
        console.log('Asd', 'An error occurred while retrieving token. ', err);
    }
}