import {store} from '../index.js';

export const isLogin = () => {
    const user = store.getState().user.user
    return !!user
}