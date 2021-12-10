// The service worker for firebase cloud messaging. !!! WORKS ONLY AFTER BUILD !!!

importScripts('https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js');

firebase.initializeApp({
    apiKey: 'AIzaSyA_gpXPNGrNqE7TWj60e2nDd1tm1dMv4eU',
    authDomain: 'ybabiba-53c6b.firebaseapp.com',
    projectId: 'ybabiba-53c6b',
    storageBucket: 'ybabiba-53c6b.appspot.com',
    messagingSenderId: '318302609509',
    appId: '1:318302609509:web:66e5edc6a5e5e07a4b668c'
});

const messaging = firebase.messaging();