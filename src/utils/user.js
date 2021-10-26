import { store } from '../index.js';

/**
 * Returns true if user login
 * @returns {boolean}
 */
export const isLogin = () => {
    const user = store.getState().auth.user
    return !!user
}

/**
 * Function checks role of user
 * @param {string} role Role of user to check
 * @returns {boolean} True if "role" parameter equals role of current login user
 */
export const checkUserRole = role => {
    const user = store.getState().auth.user
    return user?.role === role
}