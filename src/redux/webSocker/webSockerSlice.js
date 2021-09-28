import {createSlice} from '@reduxjs/toolkit';
import {DISCONNECT} from '../actionTypes';


const nameSpace = 'webSocket'

const INITIAL_STATE = {
    status: null
}

const webSocketSlice = createSlice({
    name: nameSpace,
    initialState: INITIAL_STATE,
    reducers: {
        clearWebSocket: state => {
            state.status = null
        }
    },
    extraReducers: {
        [DISCONNECT]: state => {
            state.status = DISCONNECT
        },
    }
})


export const {clearWebSocket} = webSocketSlice.actions
export const webSocketSelector = state => state.webSocket
export default webSocketSlice.reducer
