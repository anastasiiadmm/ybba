import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import axiosApi from 'axios';
import { toQueryParams } from 'utils/url/toQueryParams.js';


const nameSpace = 'lessons'

const INITIAL_STATE = {
    children: null,
    timeSlots: null,
    selectedChild: null,
    lessonCreated: false,
    lessons: null,

    loading: false,
    getLessonsLoading: false,

    errors: null,
    getLessonsErrors: null

    timeSlotsSchedule: null,
    timeSlotsScheduleLoading: false,
    timeSlotsScheduleErrors: null
}

export const getChildren = createAsyncThunk(
    `${nameSpace}/getChildren`,
    async (parentId, { rejectWithValue }) => {
        try {
            const resp = await axiosApi.get(`/accounts/${parentId}/children/`)
            return resp.data
        } catch (e) {
            return rejectWithValue(e)
        }
    }
)

export const getTimeSlots = createAsyncThunk(
    `${nameSpace}/getTimeSlots`,
    async ({ childId, from, to }, { rejectWithValue }) => {
        try {
            const query = toQueryParams({ child_id: childId, day_after: from, day_before: to })
            const resp = await axiosApi.get(`/lessons/timeslots/${query}`)
            return resp.data
        } catch (e) {
            return rejectWithValue(e)
        }
    }
)

export const createLessons = createAsyncThunk(
    `${nameSpace}/createLessons`,
    async (data, { rejectWithValue }) => {
        try {
            const resp = await axiosApi.put('/lessons/', data)
            return resp.data
        } catch (e) {
            return rejectWithValue(e)
        }
    }
)

export const getLessons = createAsyncThunk(
    `${nameSpace}/getNewLessons`,
    async (data, { rejectWithValue }) => {
        try {
            const query = data?.query ? toQueryParams(data.query) : ''
            const resp = await axiosApi.get(`/accounts/children/${data.childId}/lessons/${query}`)
            return resp.data
        } catch (e) {
            return rejectWithValue(e)
        }
    }
)

export const getTimeSlotSchedule = createAsyncThunk(
    `${nameSpace}/getTimeSlotsSchedule`,
    async (parentId, {rejectWithValue}) => {
        try {
            const res = await axiosApi.get(`${parentId}/time-slots/`)
            return res.data
        } catch (e) {
            return rejectWithValue(e)
        }
    }
)

const lessonsSlice = createSlice({
    name: nameSpace,
    initialState: INITIAL_STATE,
    reducers: {
        setSelectedChild: (state, { payload }) => {
            state.selectedChild = payload
        },
        clearLessonsData: () => INITIAL_STATE,
        clearChildren: state => {
            state.children = null
        },
        clearLessons: state => {
            state.lessons = null
        }
    },
    extraReducers: {
        [getChildren.pending]: state => {
            state.loading = true
        },
        [getChildren.fulfilled]: (state, { payload }) => {
            state.children = payload
            state.loading = false
        },
        [getChildren.rejected]: state => {
            state.loading = false
        },

        [getTimeSlots.pending]: state => {
            state.timeSlots = null
            state.loading = true
        },
        [getTimeSlots.fulfilled]: (state, { payload }) => {
            state.timeSlots = payload
            state.loading = false
        },
        [getTimeSlots.rejected]: (state, { payload }) => {
            state.loading = false
            state.errors = payload
        },

        [createLessons.pending]: state => {
            state.loading = true
        },
        [createLessons.fulfilled]: state => {
            state.loading = false
            state.lessonCreated = true
        },
        [createLessons.rejected]: (state, { payload }) => {
            state.loading = false
            state.errors = payload
        },

        [getLessons.pending]: state => {
            state.getLessonsLoading = true
        },
        [getLessons.fulfilled]: (state, { payload }) => {
            state.getLessonsLoading = false
            state.lessons = payload
        },
        [getLessons.rejected]: (state, { payload }) => {
            state.getLessonsLoading = false
            state.getLessonsErrors = payload
        },

        [getTimeSlotSchedule.pending]: state => {
            state.timeSlotsScheduleLoading = true
        },
        [getTimeSlotSchedule.fulfilled]: (state, {payload}) => {
            state.timeSlotsScheduleLoading = false
            state.timeSlotsSchedule = payload
        },
        [getTimeSlotSchedule.rejected]: (state, {payload}) => {
            state.timeSlotsScheduleLoading = false
            state.timeSlotsScheduleErrors = payload
        }
    }
})

export const { setSelectedChild, clearLessons, clearLessonsData } = lessonsSlice.actions
export const lessonsSelector = state => state.lessons
export const timeSlotsScheduleSelector = state => state.timeSlotsSchedule
export default lessonsSlice.reducer
