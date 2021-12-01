import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axiosApi from 'axios.js';

const nameSpace = 'notifications'

const INITIAL_STATE = {
    notificationsList: null,
    errors: null,
    loading: false
}

export const getNotificationsList = createAsyncThunk(
    `${nameSpace}/notifications`,
    async (_, { rejectWithValue }) => {
        try {
            const resp = await axiosApi.get('/notifications/')
            return resp.data
        } catch (e) {
            return rejectWithValue(e)
        }
    }
)

export const deleteNotifications = createAsyncThunk(
    `${nameSpace}/deleteNotifications`,
    async (_, { rejectWithValue }) => {
        try {
            await axiosApi.delete('/notifications/')
        } catch (e) {
            return rejectWithValue(e)
        }
    }
)

const notificationsSlice = createSlice({
    name: nameSpace,
    initialState: INITIAL_STATE,
    extraReducers: {
        [getNotificationsList.pending]: state => {
            state.loading = true
            state.success = false
        },
        [getNotificationsList.fulfilled]: (state, { payload }) => {
            state.loading = false
            state.success = true
            state.notificationsList = payload
        },
        [getNotificationsList.rejected]: (state, { payload }) => {
            state.loading = false
            state.success = false
            state.errors = payload
        },
    }
})

export const notificationsSelector = state => state.notifications
export default notificationsSlice.reducer
