import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axiosApi from '../../axios';
import {defaultError} from '../../config';


const nameSpace = 'child'

const INITIAL_STATE = {
    errors: null,
    commonError: null,
    success: false
}

export const createChild = createAsyncThunk(
    `${nameSpace}/createChild`,
    async (childData, {rejectWithValue}) => {
        try {
            const data = childData.childrenData
            const resp = await axiosApi.post('/accounts/children/', data, {
                headers: {
                    'Authorization': `Bearer ${childData.tokens.access}`,
                }
            })
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

const childSlice = createSlice({
    name: nameSpace,
    initialState: INITIAL_STATE,
    reducers: {
        clearChildState: state => {
            state.success = false
        }
    },
    extraReducers: {
        [createChild.pending]: state => {
          state.success = false
        },
        [createChild.fulfilled]: state => {
            state.success = true
        },
        [createChild.rejected]: state => {
            state.success = false
        }
    }
})

export const {clearChildState} = childSlice.actions
export const childSelector = state => state.child
export default childSlice.reducer
