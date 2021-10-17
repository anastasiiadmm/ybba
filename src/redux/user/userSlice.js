import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';

import axiosApi from '../../axios';
import {defaultError} from '../../config.js';


const nameSpace = 'user'

const INITIAL_STATE = {
    user: null,
    tokens: null,
    loading: false,

    editUserEmailSuccess: false,
    success: false,

    commonError: null,
    editEmailErrors: null,

    isPasswordUpdated: false
}

export const editUserEmail = createAsyncThunk(
    `${nameSpace}/editUserEmail`,
    async (email, {getState, rejectWithValue}) => {
        try {
            const user = getState().auth.user
            const resp = await axiosApi.put(`/accounts/${user.id}/email/update/`, email)
            return resp.data
        } catch (e) {
            return rejectWithValue(e.response.data)
        }
    }
)

export const updateUserData = createAsyncThunk(
    `${nameSpace}/updateUserData`,
    async (data, {rejectWithValue}) => {
        try {
            const userData = {...data.data}
            if (userData.profile && userData.profile.phone_number && !userData.profile.phone_number.includes('+')) {
                userData.profile.phone_number = `+${userData.profile.phone_number}`
            }
            await axiosApi.put(`/accounts/${data.userId}/update/`, userData)
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

export const updateUserPassword = createAsyncThunk(
    `${nameSpace}/updateUserPassword`,
    async (data, {rejectWithValue}) => {
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

        [updateUserData.pending]: state => {
            state.success = false
            state.loading = true
        },
        [updateUserData.fulfilled]: state => {
            state.success = true
            state.loading = false
        },
        [updateUserData.rejected]: (state, {payload}) => {
            state.errors = payload
            state.success = false
            state.loading = false
        },

        [updateUserPassword.fulfilled]: state => {
            state.success = true
            state.isPasswordUpdated = true
        },
        [updateUserPassword.rejected]: (state, {payload}) => {
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
        [createUser.fulfilled]: (state, {payload}) => {
            state.user = payload.user
            state.tokens = payload.tokens
            state.loading = false
            state.success = true
            state.errors = null
        },
        [createUser.rejected]: (state, {payload}) => {
            state.loading = false
            state.success = false
            state.commonError = payload?.detail
            state.errors = payload
        },

        [editUserEmail.pending]: state => {
            state.editEmailErrors = null
            state.editUserEmailSuccess = false
        },
        [editUserEmail.fulfilled]: state => {
            state.editEmailErrors = null
            state.editUserEmailSuccess = true
        },
        [editUserEmail.rejected]: (state, {payload}) => {
            state.editEmailErrors = payload
            state.editUserEmailSuccess = false
        }
    }
})

export const {clearUserState, clearUserFromUserState} = userSlice.actions
export const userSelector = state => state.user
export default userSlice.reducer
