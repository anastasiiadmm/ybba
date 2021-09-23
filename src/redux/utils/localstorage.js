import {loginUser, logoutUser} from '../auth/authSlice';


export const localStorageKeyName = 'Ybba-state'

export const loadFromLocalStorage = () => {
    try {
        const serializedState = localStorage.getItem(localStorageKeyName);
        if (serializedState === null) {
            return undefined;
        }
        return JSON.parse(serializedState);
    } catch (e) {
        return undefined;
    }
};

export const saveToLocalStorage = state => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem(localStorageKeyName, serializedState);
    } catch (e) {
        console.log('Could not save state');
    }
};

const authActions = [String(loginUser.fulfilled), String(logoutUser)]

export const localStorageMiddleware = store => next => action => {
    let result = next(action);

    if (authActions.includes(action.type)) {
        saveToLocalStorage({
            auth: store.getState().auth
        });
    }
    return result;
};