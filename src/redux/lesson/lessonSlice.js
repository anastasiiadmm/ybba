import {createSlice} from '@reduxjs/toolkit';


const nameSpace = 'lesson'

const INITIAL_STATE = {
    activeGame: null
}

const lessonSlice = createSlice({
    name: nameSpace,
    initialState: INITIAL_STATE,
    reducers: { },
    extraReducers: { },
})


export const {} = lessonSlice.actions
export const lessonSelector = state => state.lesson
export default lessonSlice.reducer
