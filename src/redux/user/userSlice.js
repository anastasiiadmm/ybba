import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';

import axiosApi from '../../axios';
import {defaultError} from '../../config.js';
import {transformDateFormat} from '../../utils/date/dateUtils.js';


const nameSpace = 'user'

const INITIAL_STATE = {
    user: null,
    tokens: null,
    loading: false,
    success: false,
    commonError: null
}

export const createUser = createAsyncThunk(
    `${nameSpace}/createUser`,
    async (userData, {rejectWithValue}) => {
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

export const createChild = createAsyncThunk(
    `${nameSpace}/createChild`,
    async (childData, {rejectWithValue}) => {
        try {
            const data = childData
            data.date_of_birth = transformDateFormat(data.date_of_birth, 'DD.MM.YYYY', 'YYYY-MM-DD')
            const resp = await axiosApi.post('/accounts/children/', childData)
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

export const loginUser = createAsyncThunk(
    `${nameSpace}/loginUser`,
    async (loginData, {rejectWithValue}) => {
        try {
            const resp = await axiosApi.post('/accounts/login/', loginData)
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
            return rejectWithValue(defaultError)
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

const userSlice = createSlice({
    name: nameSpace,
    initialState: INITIAL_STATE,
    reducers: {
        clearUserState: state => {
            state.loading = false
            state.success = false
            state.commonError = null
            state.errors = null
        }
    },
    extraReducers: {
        [loginUser.pending]: state => {
            state.loading = true
            state.errors = null
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
            state.commonError = null
        },
        [logoutUser.fulfilled]: () => INITIAL_STATE,
        [logoutUser.rejected]: () => INITIAL_STATE,

        [createUser.pending]: state => {
            state.loading = true
            state.errors = null
        },
        [createUser.fulfilled]: state => {
            state.loading = false
            state.success = true
            state.errors = null
        },
        [createUser.rejected]: (state, {payload}) => {
            state.loading = false
            state.success = false
            state.commonError = payload?.detail
        },

        [resetUserPasswordSendEmail.pending]: state => {
            state.loading = true
        },
        [resetUserPasswordSendEmail.fulfilled]: state => {
            state.loading = false
            state.success = true
        },
        [resetUserPasswordSendEmail.rejected]: (state, {payload}) => {
            state.loading = false
            state.success = false
            state.commonError = payload?.detail
        },

        [resetUserPassword.pending]: state => {
            state.loading = true
        },
        [resetUserPassword.fulfilled]: state => {
            state.loading = false
            state.success = true
        },
        [resetUserPassword.rejected]: (state, {payload}) => {
            state.errors = payload
            state.loading = false
            state.success = false
        }
    }
})

export const {clearUserState} = userSlice.actions
export const userSelector = state => state.user
export default userSlice.reducer
