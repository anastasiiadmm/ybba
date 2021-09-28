import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';

import axiosApi from '../../axios';
import {toQueryParams} from '../../utils/url/toQueryParams';


const nameSpace = 'dashBoard'

const INITIAl_STATE = {
    errors: null,
    loading: false,
    lessons: null
}

export const getLessons = createAsyncThunk(
    `${nameSpace}/getLessons`,
    async (data, {rejectWithValue}) => {
        try {
            let query = ''
            if (data?.query) {
                query = toQueryParams(data.query)
            }
            const resp = await axiosApi.get(`/accounts/${data.userId}/lessons/${query}`)
            return resp.data
        } catch (e) {
            return rejectWithValue(e)
        }
    }
)

const dashBoardSlice = createSlice({
    name: nameSpace,
    initialState: INITIAl_STATE,
    reducers: {
        clearDashBoard: state => {
            state.errors = null
        }
    },
    extraReducers: {
        [getLessons.pending]: state => {
            state.loading = true
        },
        [getLessons.fulfilled]: (state, {payload}) => {
            state.lessons = payload
            state.loading = false
        },
        [getLessons.rejected]: (state, {payload}) => {
            state.errors = payload
            state.loading = true
        }
    }
})


export const {clearDashBoard} = dashBoardSlice.actions
export const dashBoardSelector = state => state.dashBoard
export default dashBoardSlice.reducer