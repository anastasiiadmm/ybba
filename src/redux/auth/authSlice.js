import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';

import axiosApi from '../../axios';
import {defaultError} from '../../config';


const nameSpace = 'auth'

const INITIAL_STATE = {
    user: null,
    tokens: null,
    errors: null,
    commonError: null,
    success: null,
    loading: null
}

export const loginUser = createAsyncThunk(
    `${nameSpace}/loginUser`,
    async (loginData, {rejectWithValue}) => {
        try {
            const resp = await axiosApi.post('/accounts/login/', loginData)
            return resp.data
        } catch (e) {
            console.log(e)
            let error = e?.response?.data
            if (!e.response) {
                error = defaultError
            }
            return rejectWithValue(error)
        }
    }
)

export const logoutUser = createAsyncThunk(
    `${nameSpace}/logoutUser`,
    async (data) => {
        await axiosApi.post('/accounts/logout/', data)
    }
)

export const resetUserPasswordSendEmail = createAsyncThunk(
    `${nameSpace}/resetUserPasswordSendEmail`,
    async (data, {rejectWithValue}) => {
        try {
            await axiosApi.post('/password_reset/', data)
        } catch (e) {
            let error = e?.response?.data
            if (!e.response) {
                error = defaultError
            }
            return rejectWithValue(error)
        }
    }
)

export const resetUserPassword = createAsyncThunk(
    `${nameSpace}/resetUserPassword`,
    async (data, {rejectWithValue}) => {
        try {
            await axiosApi.post(`/password_reset/confirm/`, data)
        } catch (e) {
            let error = e?.response?.data
            if (!e.response) {
                error = defaultError
            }
            return rejectWithValue(error)
        }
    }
)

export const getCurrentUserData = createAsyncThunk(
    `${nameSpace}/getCurrentUserData`,
    async (_, {rejectWithValue, getState}) => {
        try {
            const user = getState().auth.user
            const resp = await axiosApi.get(`/accounts/${user.id}/`)
            return resp.data
        } catch (e) {
            return rejectWithValue(e)
        }
    }
)

const authSlice = createSlice({
    name: nameSpace,
    initialState: INITIAL_STATE,
    reducers: {
        clearAuthState: state => {
            state.loading = false
            state.success = false
            state.commonError = null
            state.errors = null
        },
        refreshAccessToken: (state, {payload}) => {
            state.tokens = {...state.tokens, ...payload}
        }
    },
    extraReducers: {
        [loginUser.pending]: state => {
            state.loading = true
            state.success = false
            state.commonError = null
        },
        [loginUser.fulfilled]: (state, {payload}) => {
            state.user = payload.user
            state.tokens = payload.tokens
            state.loading = false
            state.success = true
            state.errors = null
            state.commonError = null
        },
        [loginUser.rejected]: (state, {payload}) => {
            state.loading = false
            state.success = false
            state.commonError = payload?.detail
        },

        [logoutUser.pending]: state => {
            state.loading = true
            state.errors = null
            state.success = false
            state.commonError = null
        },
        [logoutUser.fulfilled]: () => INITIAL_STATE,
        [logoutUser.rejected]: () => INITIAL_STATE,

        [resetUserPasswordSendEmail.pending]: state => {
            state.loading = true
            state.success = false
        },
        [resetUserPasswordSendEmail.fulfilled]: state => {
            state.loading = false
            state.success = true
        },
        [resetUserPasswordSendEmail.rejected]: (state, {payload}) => {
            state.loading = false
            state.success = false
            state.commonError = payload?.detail
            state.errors = payload?.detail ? payload?.detail : payload
        },

        [resetUserPassword.pending]: state => {
            state.loading = true
            state.success = false
        },
        [resetUserPassword.fulfilled]: state => {
            state.loading = false
            state.success = true
        },
        [resetUserPassword.rejected]: (state, {payload}) => {
            state.errors = payload
            state.loading = false
            state.success = false
        },

        [getCurrentUserData.fulfilled]: (state, {payload}) => {
            state.user = payload
            state.errors = null
            state.loading = false
        },
    }
})


export const {clearAuthState, refreshAccessToken} = authSlice.actions
export const authSelector = state => state.auth
export default authSlice.reducer

