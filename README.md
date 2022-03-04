<h2 align="center">![hellobiba](src/assets/img/logo2.svg)</h2>
<h2 align="center">
[![Hellobiba React.js](https://awesome.re/mentioned-badge.svg)](https://gitlab.com/ybba/frontend)
</h2>

<h2 align="center"><a  href="https://diagnostika.pro/">Live Demo</a></h2>

Web Application for Diagnostic of speech development
====================================================

INSTALLATION
------------

Please make sure the release file is unpacked under a Web-accessible
directory. You shall see the following files and directories:

        dockerfiles/  
        public/    
        src/       
        README               
        package.json         
        jsconfig.json

REQUIREMENTS
------------
Platform: cross-platform solution, linux, windows, macOS, other.

Programming language used React JS

The service uses the following technologies:

        node -v version 16 and yarn
        yarn current version 0.1.0


BASE DEPENDENCIES
-----------------

        axios for networking.
        prop-types to type-check our components exposed properties.
        redux for state management.
        redux-thunk to dispatch asynchronous actions.
        react-router fully-featured routing library for the React JavaScript library
        react-router-dom fully-featured routing library for the React JavaScript library
        react-toastify for global notifications
        react-unity-webgl to help build games to the web
        material-ui & bootstrap for component styling.
        sentry to help developers write better software faster.
        firebase implements the client-side libraries used by applications using Firebase services
        date-fns for manipulating JavaScript dates in a browser & Node.js
        js-cookie for handling cookies
        js-sha256 for JavaScript supports UTF-8 encoding
        moment for encoding dates
        react-bootstrap for for component styling.
        react-flatpickr library for dates formats
        sweetalert2 for customization alerts
        react-hook-form built with performance, UX and DX in mind embraces native HTML form validation
        yup for forms validation
        react-i18next for localization components
        react-icomoon for using svg icons
        react-input-date-mask for customization date inputs
        react-perfect-scrollbar is a wrapper to allow use perfect-scrollbar in React
        react-phone-input-2 highly customizable phone input component with auto formatting.
        uuid to create a random UUID

QUICK START
-----------

        clone ybba project from gitlab repository https://gitlab.com/ybba/frontend.git 
        cd frontend

Set usage requirements endpoints into .env file:

        REACT_APP_API_URL=''
        REACT_APP_SENTRY_DSN=''
        REACT_APP_WS_URL=''
        REACT_APP_ROBOKASSA_MERCHANT_LOGIN=''
        REACT_APP_ROBOKASSA_PASSWORD=''
        REACT_APP_ENVIRONMENT=''

Next:

        RUN yarn install
        RUN yarn start

UPDATE RESULTS
-----------
V1.0.0 version, 04-03-2022