import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import axiosApi from '../../axios';


const nameSpace = 'payments'

const INITIAL_STATE = {
  children: null,
  errors: null,
  loading: false
}

export const getChildren = createAsyncThunk(
    `${nameSpace}/payments`,
    async (parentId, { rejectWithValue }) => {
      try {
        const resp = await axiosApi.get(`/accounts/${parentId}/children/`)
        return resp.data
      } catch (e) {
        return rejectWithValue(e)
      }
    }
)

const paymentsSlice = createSlice({
  name: nameSpace,
  initialState: INITIAL_STATE,
  reducers: {},
  extraReducers: {
    [getChildren.pending]: state => {
      state.loading = true
    },
    [getChildren.fulfilled]: (state, { payload }) => {
      state.children = payload
      state.loading = false
    },
    [getChildren.rejected]: (state, { payload }) => {
      state.errors = payload
      state.loading = false
    }
  }
})

export const paymentsSelector = state => state.payments
export default paymentsSlice.reducer
