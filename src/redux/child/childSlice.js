import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {transformDateFormat} from '../../utils/date/dateUtils';
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
            const data = childData
            data.date_of_birth = transformDateFormat(data.date_of_birth, 'DD/MM/YYYY', 'YYYY-MM-DD')
            const resp = await axiosApi.post('/accounts/children/', childData)
            return resp.data
        } catch (e) {
            let error = e?.response?.data
            if (!e.response) {
                error = defaultError
            }
            console.log(e)
            return rejectWithValue(error)
        }
    }
)

const childSlice = createSlice({
    name: nameSpace,
    initialState: INITIAL_STATE,
    reducers: {},
    extraReducers: {}
})

export const childSelector = state => state.child
export default childSlice.reducer
