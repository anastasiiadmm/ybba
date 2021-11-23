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