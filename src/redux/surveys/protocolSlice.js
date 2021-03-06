import { createSlice, createAsyncThunk, createAction } from '@reduxjs/toolkit';
import axiosApi from '../../axios';

const nameSpace = 'surveys';

const INITIAL_STATE = {
  loading: false,
  success: false,
  protocol: null,
  speechCard: null,
  errors: null,
};

export const getProtocol = createAsyncThunk(
  `${nameSpace}/getProtocol`,
  async (childId, { rejectWithValue }) => {
    try {
      const resp = await axiosApi.get(
        `/surveys/children/${childId}/examination-protocol/`
      );
      return resp.data;
    } catch (e) {
      return rejectWithValue(e);
    }
  }
);

export const updateProtocol = createAsyncThunk(
  `${nameSpace}/updateProtocol`,
  async ({ protocolId, newData }, { rejectWithValue }) => {
    try {
      const resp = await axiosApi.put(
        `/surveys/examination-protocol/${protocolId}/?finish-saving=1`,
        newData
      );
      return resp.data;
    } catch (e) {
      return rejectWithValue(e);
    }
  }
);

const protocolSlice = createSlice({
  name: nameSpace,
  initialState: INITIAL_STATE,
  reducers: {
    clearProtocolState: (state) => {
      state.loading = false;
      state.success = false;
      state.protocol = null;
      state.errors = null;
    },
    clearProtocolErrors: (state) => {
      state.validationErrors = null;
    },
  },
  extraReducers: {
    [getProtocol.pending]: (state) => {
      state.success = false;
    },
    [getProtocol.fulfilled]: (state, action) => {
      state.protocol = action.payload;
      state.loading = false;
      state.success = true;
    },
    [getProtocol.rejected]: (state, { payload }) => {
      state.loading = false;
      state.success = false;
      state.errors = payload;
    },

    [updateProtocol.pending]: (state) => {
      state.loading = true;
      state.success = false;
    },
    [updateProtocol.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.success = true;
    },
    [updateProtocol.rejected]: (state, { payload }) => {
      state.loading = false;
      state.success = false;
      state.errors = payload;
    },
  },
});

export const { clearProtocolState, clearProtocolErrors } =
  protocolSlice.actions;
export const protocolSelector = (state) => state.surveys;
export default protocolSlice.reducer;
