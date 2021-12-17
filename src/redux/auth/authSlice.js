import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import axiosApi from '../../axios';
import { defaultError } from '../../config';
import { toQueryParams } from 'utils/url/toQueryParams.js';


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
    async (loginData, { rejectWithValue }) => {
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

export const resetUserPasswordSendEmail = createAsyncThunk(
    `${nameSpace}/resetUserPasswordSendEmail`,
    async (data, { rejectWithValue }) => {
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
    async (data, { rejectWithValue }) => {
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
    async (_, { rejectWithValue, getState }) => {
        try {
            const user = getState().auth.user
            const resp = await axiosApi.get(`/accounts/${user.id}/`)
            return resp.data
        } catch (e) {
            return rejectWithValue(e)
        }
    }
)

export const refreshToken = createAsyncThunk(
    `${nameSpace}/refreshToken`,
    async (data = null, { getState }) => {
        const { tokens } = getState().auth
        const asd = { refresh: tokens.refresh }
        const resp = await axiosApi.post('/accounts/refresh/', asd)
        return resp.data
    }
)

export const updateUserData = createAsyncThunk(
    `${nameSpace}/updateUserData`,
    async (data, { rejectWithValue }) => {
        try {
            const userData = { ...data.data }
            if (userData.profile && userData.profile.phone_number && !userData.profile.phone_number.includes('+')) {
                userData.profile.phone_number = `+${userData.profile.phone_number}`
            }
            const resp = await axiosApi.put(`/accounts/${data.userId}/update/`, userData)
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

export const checkRegistrationToken = createAsyncThunk(
    `${nameSpace}/checkRegistrationToken`,
    async ({ registrationToken, email }, { rejectWithValue }) => {
        try {
            const params = toQueryParams({ email })
            const resp = await axiosApi.get(`/accounts/check-registration-token/${registrationToken}/${params}`)
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
        logoutUser: () => INITIAL_STATE,
        refreshAccessToken: (state, { payload }) => {
            state.tokens = { ...state.tokens, ...payload }
        }
    },
    extraReducers: {
        [loginUser.pending]: state => {
            state.loading = true
            state.success = false
            state.commonError = null
        },
        [loginUser.fulfilled]: (state, { payload }) => {
            state.user = payload.user
            state.tokens = payload.tokens
            state.loading = false
            state.success = true
            state.errors = null
            state.commonError = null
        },
        [loginUser.rejected]: (state, { payload }) => {
            state.loading = false
            state.success = false
            state.commonError = payload?.detail
        },

        [resetUserPasswordSendEmail.pending]: state => {
            state.loading = true
            state.success = false
        },
        [resetUserPasswordSendEmail.fulfilled]: state => {
            state.loading = false
            state.success = true
        },
        [resetUserPasswordSendEmail.rejected]: (state, { payload }) => {
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
        [resetUserPassword.rejected]: (state, { payload }) => {
            state.errors = payload
            state.loading = false
            state.success = false
        },

        [getCurrentUserData.fulfilled]: (state, { payload }) => {
            state.user = payload
            state.errors = null
            state.loading = false
        },

        [refreshToken.fulfilled]: (state, { payload }) => {
            state.tokens = { ...state.tokens, ...payload }
        },

        [updateUserData.pending]: state => {
            state.success = false
            state.loading = true
        },
        [updateUserData.fulfilled]: (state, { payload }) => {
            state.user = payload
            state.success = true
            state.loading = false
        },
        [updateUserData.rejected]: (state, { payload }) => {
            state.errors = payload
            state.success = false
            state.loading = false
        },

        [checkRegistrationToken.pending]: (state) => {
            state.loading = true
        },
        [checkRegistrationToken.fulfilled]: (state, { payload }) => {
            state.loading = false
            console.log('====================')
            console.log(payload)
            console.log('====================')
        },
        [checkRegistrationToken.rejected]: (state, { payload }) => {
            state.loading = false
            state.errors = payload
        }
    }
})


export const { clearAuthState, refreshAccessToken, logoutUser } = authSlice.actions
export const authSelector = state => state.auth
export default authSlice.reducer

