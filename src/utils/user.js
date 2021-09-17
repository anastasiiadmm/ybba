import {store} from '../index.js';

export const isLogin = () => {
    const user = store.getState().auth.user
    return !!user
}