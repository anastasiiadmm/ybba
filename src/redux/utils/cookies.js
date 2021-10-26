import Cookies from 'js-cookie';

import { loginUser, logoutUser, refreshToken } from 'redux/auth/authSlice.js';


export const cookieName = 'Ybba-state'

/**
 * getFromCookie tries to get user data form cookies
 * @returns {any|undefined}
 */
export const getFromCookie = () => {
    try {
        const serializedState = Cookies.get(cookieName);
        if (serializedState === null) {
            return undefined;
        }
        return JSON.parse(serializedState);
    } catch (e) {
        return undefined;
    }
}

/**
 * setToLocalstorage sets data to cookie
 * @param {object} state State which will be set into cookie
 */
export const setToCookie = state => {
    try {
        const serializedState = JSON.stringify(state);
        Cookies.set(cookieName, serializedState);
    } catch (e) {
        console.log('Could not save state');
    }
}

const authActions = [String(loginUser.fulfilled), String(logoutUser), String(refreshToken.fulfilled)]

export const cookieMiddleware = store => next => action => {
    let result = next(action);

    if (authActions.includes(action.type)) {
        setToCookie({
            auth: store.getState().auth
        });
    }
    return result;
};