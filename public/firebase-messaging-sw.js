importScripts('https://www.gstatic.com/firebasejs/3.9.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/3.9.0/firebase-messaging.js');

var config = {
    apiKey: 'AIzaSyD7-7BAb7UxrHT_m_yABMglwY4S3tYfzLY',
    authDomain: 'my-own-ybba-project.firebaseapp.com',
    projectId: 'my-own-ybba-project',
    storageBucket: 'my-own-ybba-project.appspot.com',
    messagingSenderId: '98621943831',
    appId: '1:98621943831:web:74f4320d2b429256d32c52'
};
firebase.initializeApp(config);


const messaging = firebase.messaging();