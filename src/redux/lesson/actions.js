import {createAction} from '@reduxjs/toolkit';

import {GET_LESSON, CHANGE_ACTIVE_GAME, CHANGE_LESSON_STATUS} from '../actionTypes';


export const getLesson = createAction(GET_LESSON)

export const changeActiveGame = createAction(CHANGE_ACTIVE_GAME)

export const changeLessonStatus = createAction(CHANGE_LESSON_STATUS)