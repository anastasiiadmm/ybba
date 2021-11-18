import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import configureStore from 'redux/store.js'
import reportWebVitals from 'reportWebVitals';
import { initSentry } from 'sentry/sentry';
import App from 'App.js';
import BrowserPermissionsBlock from 'Containers/BrowserPermissionsBlock/BrowserPermissionsBlock';

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

ReactDOM.render(
    <React.StrictMode>
        <BrowserPermissionsBlock>
            <Provider store={store}>
                <BrowserRouter>
                    <ToastContainer
                        position='top-right'
                        autoClose={5000}
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover
                    >
                        <App/>
                    </ToastContainer>
                </BrowserRouter>
            </Provider>
        </BrowserPermissionsBlock>
    </React.StrictMode>,
    document.getElementById('root')
);

reportWebVitals();
