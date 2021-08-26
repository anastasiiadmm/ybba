import {store} from "../redux/store.js";

export const isLogin = () => {
    const user = store.getState().user.user
    return !!user
}