import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axiosApi from '../../axios';

import {
  GET_LESSON,
  GET_LESSON_ERROR,
  CHANGE_ACTIVE_GAME,
  CHANGE_LESSON_STATUS,
  RESIZE_CHILD_WEBCAM,
} from 'redux/actionTypes';

const nameSpace = 'lesson';

const INITIAL_STATE = {
  activeGame: null,
  lesson: null,
  lesson_id: null,
  error: null,
  lessonFinished: false,
  isParentWebcamIncreased: false,
};

const lessonSlice = createSlice({
  name: nameSpace,
  initialState: INITIAL_STATE,
  reducers: {
    clearLessonState: () => INITIAL_STATE,
  },
  extraReducers: {
    [GET_LESSON]: (state, { payload }) => {
      state.lesson = payload.lesson;
    },
    [GET_LESSON_ERROR]: (state, { payload }) => {
      state.error = payload.message;
    },

    [CHANGE_ACTIVE_GAME]: (state, { payload }) => {
      state.lesson = payload.lesson;
    },

    [CHANGE_LESSON_STATUS]: (state, { payload }) => {
      state.lesson = { ...state.lesson, status: payload.status };
      state.lessonFinished = true;
    },
    [RESIZE_CHILD_WEBCAM]: (state, { payload }) => {
      state.isParentWebcamIncreased = payload;
    },
  },
});

export const { clearLessonState } = lessonSlice.actions;
export const lessonSelector = (state) => state.lesson;
export default lessonSlice.reducer;
