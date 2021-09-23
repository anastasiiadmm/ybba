import {store} from '../index.js';

export const isLogin = () => {
    const user = store.getState().auth.user
    return !!user
}

export const checkUserRole = role => {
    const user = store.getState().auth.user
    return user.role === role
}