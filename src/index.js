import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { CircularProgress } from '@mui/material';

import configureStore from 'redux/store.js'
import reportWebVitals from 'reportWebVitals';
import { initSentry } from 'sentry/sentry';
import FirebaseBlock from 'Containers/FirebaseBlock/FirebaseBlock.js';
import App from 'App.js';
import BrowserPermissionsBlock from 'Containers/BrowserPermissionsBlock/BrowserPermissionsBlock';

import translationsRu from 'assets/locales/ru/translationRu.json';
import translationsEn from 'assets/locales/en/translationsEn.json';

import 'assets/vendor/flatpickr/flatpickr'
import 'assets/vendor/flatpickr/ru'
import 'assets/vendor/flatpickr/flatpickr.min.css'
import 'assets/fonts/icomoon/icomoon.css'
import 'assets/vendor/slimselect/slimselect.min.css'
import 'index.css';
import 'common.css';
import 'react-toastify/dist/ReactToastify.css';

initSentry()
export const store = configureStore()

i18n
    .use(initReactI18next)
    .init({
        resources: {
            ru: { translation: translationsRu },
            en: { translation: translationsEn },
        },
        lng: 'ru',
        fallbackLng: 'ru',
        interpolation: { escapeValue: false }
    });



ReactDOM.render(
    <Suspense fallback={<CircularProgress />}>
        <React.StrictMode>
            <FirebaseBlock>
                <BrowserPermissionsBlock>
                    <Provider store={store}>
                        <BrowserRouter>
                            <App/>
                        </BrowserRouter>
                    </Provider>
                </BrowserPermissionsBlock>
            </FirebaseBlock>
        </React.StrictMode>
    </Suspense>,
    document.getElementById('root')
);

reportWebVitals();
