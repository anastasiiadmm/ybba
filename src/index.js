import React from 'react';
import ReactDOM from 'react-dom';

import {Provider} from 'react-redux'

import {BrowserRouter} from 'react-router-dom';
import configureStore from './redux/store.js'
import reportWebVitals from './reportWebVitals';
import App from './App';
import {initSentry} from './sentry/sentry';

import './assets/fonts/icomoon/icomoon.css'
import './assets/vendor/slimselect/slimselect.min.css'
import './index.css';


initSentry()
export const store = configureStore()

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <App/>
            </BrowserRouter>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

reportWebVitals();
