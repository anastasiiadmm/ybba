import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import axiosApi from 'axios.js';
import { defaultError } from 'config.js';


const nameSpace = 'user'

const INITIAL_STATE = {
    user: null,
    tokens: null,
    loading: false,

    success: false,

    commonError: null,

    isPasswordUpdated: false
}

export const updateUserPassword = createAsyncThunk(
    `${nameSpace}/updateUserPassword`,
    async (data, { rejectWithValue }) => {
        try {
            const res = await axiosApi.put(`/accounts/${data.userId}/update/`, data.data)
            return res.data
        } catch (e) {
            let error = e?.response?.data
            if (!e.response) {
                error = defaultError
            }
            return rejectWithValue(error)
        }
    }
)

export const createUser = createAsyncThunk(
    `${nameSpace}/createUser`,
    async (userData, { rejectWithValue }) => {
        try {
            const resp = await axiosApi.post('/accounts/registration/', userData)
            return resp.data
        } catch (e) {
            let error = e?.response?.data
            if (!e.response) {
                error = defaultError
            }
            return rejectWithValue(error)
        }
    }
)


const userSlice = createSlice({
    name: nameSpace,
    initialState: INITIAL_STATE,
    reducers: {
        clearUserState: state => {
            state.loading = false
            state.success = false
            state.commonError = null
            state.errors = null
            state.isPasswordUpdated = false
        },
        clearUserFromUserState: state => {
            state.user = null
        }
    },
    extraReducers: {

        [updateUserPassword.fulfilled]: state => {
            state.success = true
            state.isPasswordUpdated = true
        },
        [updateUserPassword.rejected]: (state, { payload }) => {
            state.errors = payload
            state.success = false
            state.isPasswordUpdated = false
        },

        [createUser.pending]: state => {
            state.user = null
            state.tokens = null
            state.loading = true
            state.errors = null
            state.success = false
        },
        [createUser.fulfilled]: (state, { payload }) => {
            state.user = payload.user
            state.tokens = payload.tokens
            state.loading = false
            state.success = true
            state.errors = null
        },
        [createUser.rejected]: (state, { payload }) => {
            state.loading = false
            state.success = false
            state.commonError = payload?.detail
            state.errors = payload
        },

    }
})

export const { clearUserState, clearUserFromUserState } = userSlice.actions
export const userSelector = state => state.user
export default userSlice.reducer
