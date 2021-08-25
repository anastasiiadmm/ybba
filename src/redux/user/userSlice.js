import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axiosApi from "../../axios";

const nameSpace = 'user'

const INITIAL_STATE = {
    user: null,
    tokens: null,
    loading: false,
    success: false,
    errors: null
}

export const loginUser = createAsyncThunk(
    `${nameSpace}/loginUser`,
    async (loginData, {rejectWithValue}) => {
        try {
            const resp = await axiosApi.post('/accounts/login/', loginData)
            await setTimeout(() => {}, 2000)
            return resp.data
        } catch (e) {
            if (!e.response) {
                throw e
            }
            return rejectWithValue(e.response.data)
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
            state.errors = null
        }
    },
    extraReducers: {
        [loginUser.pending]: state => {
            state.loading = true
            state.errors = null
        },
        [loginUser.fulfilled]: (state, {payload}) => {
            state.user = payload.user
            state.tokens = payload.tokens
            state.loading = false
            state.success = true
            state.errors = null
        },
        [loginUser.rejected]: (state, {payload}) => {
            state.loading = false
            state.success = false
            state.errors = payload?.detail
        }
    }
})

export const {clearUserState} = userSlice.actions
export const userSelector = state => state.user
export default userSlice.reducer
