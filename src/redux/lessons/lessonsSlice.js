import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';

import axiosApi from '../../axios';
import {toQueryParams} from '../../utils/url/toQueryParams';


const nameSpace = 'lessons'

const INITIAL_STATE = {
    children: null,
    loading: false,
    timeSlots: null,
    errors: null,
    selectedChild: null,
    lessonCreated: false
}

export const getChildren = createAsyncThunk(
    `${nameSpace}/getChildren`,
    async (parentId, {rejectWithValue}) => {
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
    async ({childId, from, to}, {rejectWithValue}) => {
        try {
            const query = toQueryParams({child_id: childId, day_after: from, day_before: to})
            const resp = await axiosApi.get(`/lessons/timeslots/${query}`)
            return resp.data
        } catch (e) {
            return rejectWithValue(e)
        }
    }
)

export const createLessons = createAsyncThunk(
    `${nameSpace}/createLessons`,
    async (data, {rejectWithValue}) => {
        try {
            const resp = await axiosApi.post('/lessons/', data)
            console.log(resp.data)
            return resp.data
        } catch (e) {
            return rejectWithValue(e)
        }
    }
)

const lessonsSlice = createSlice({
    name: nameSpace,
    initialState: INITIAL_STATE,
    reducers: {
        setSelectedChild: (state, {payload}) => {
            state.selectedChild = payload
        },
        clearLessons: () => INITIAL_STATE,
        clearChildren: state => {
            state.children = null
        }
    },
    extraReducers: {
        [getChildren.pending]: state => {
            state.loading = true
        },
        [getChildren.fulfilled]: (state, {payload}) => {
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
        [getTimeSlots.fulfilled]: (state, {payload}) => {
            state.timeSlots = payload
            state.loading = false
        },
        [getTimeSlots.rejected]: (state, {payload}) => {
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
        [createLessons.rejected]: (state, {payload}) => {
            state.loading = false
            state.errors = payload
        }
    }
})

export const {setSelectedChild, clearLessons, clearChildren} = lessonsSlice.actions
export const lessonsSelector = state => state.lessons
export default lessonsSlice.reducer
