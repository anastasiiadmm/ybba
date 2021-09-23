import {createSlice} from '@reduxjs/toolkit';

import {GET_LESSON, GET_LESSON_ERROR, CHANGE_ACTIVE_GAME, CHANGE_LESSON_STATUS} from '../actionTypes';
import {LESSON_STATUS_FINISHED} from '../../constants';


const nameSpace = 'lesson'

const INITIAL_STATE = {
    activeGame: null,
    lesson: null,
    error: null,
    lessonFinished: false
}

const lessonSlice = createSlice({
    name: nameSpace,
    initialState: INITIAL_STATE,
    reducers: { },
    extraReducers: {
        [GET_LESSON]: (state, {payload}) => {
            state.lesson = payload.lesson
        },
        [GET_LESSON_ERROR]: (state, {payload}) => {
            state.error = payload.message
        },

        [CHANGE_ACTIVE_GAME]: (state, {payload}) => {
            state.lesson = payload.lesson
        },

        [CHANGE_LESSON_STATUS]: (state, {payload}) => {
            if (payload.status === LESSON_STATUS_FINISHED) {
                state.lesson = null
                state.lessonFinished = true
            }
        }
    },
})


export const lessonSelector = state => state.lesson
export default lessonSlice.reducer
