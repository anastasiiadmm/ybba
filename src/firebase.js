import { initializeApp } from 'firebase/app';
import { getMessaging } from 'firebase/messaging';


const firebaseConfig = {
    apiKey: 'AIzaSyA_gpXPNGrNqE7TWj60e2nDd1tm1dMv4eU',
    authDomain: 'ybabiba-53c6b.firebaseapp.com',
    projectId: 'ybabiba-53c6b',
    storageBucket: 'ybabiba-53c6b.appspot.com',
    messagingSenderId: '318302609509',
    appId: '1:318302609509:web:66e5edc6a5e5e07a4b668c'
};

const firebaseApp = initializeApp(firebaseConfig);
export const messaging = getMessaging(firebaseApp);