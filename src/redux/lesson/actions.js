import { createAction } from '@reduxjs/toolkit';

import { GET_LESSON, CHANGE_ACTIVE_GAME, CHANGE_LESSON_STATUS, RESIZE_CHILD_WEBCAM } from 'redux/actionTypes';


export const getLesson = createAction(GET_LESSON)

export const changeActiveGame = createAction(CHANGE_ACTIVE_GAME)

export const changeLessonStatus = createAction(CHANGE_LESSON_STATUS)

export const resizeChildWebcam = createAction(RESIZE_CHILD_WEBCAM)