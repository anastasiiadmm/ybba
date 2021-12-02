import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axiosApi from '../../axios';

const nameSpace = 'surveys';

const INITIAL_STATE = {
  loading: false,
  success: false,
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

export const createProtocol = createAsyncThunk(
  `${nameSpace}/createProtocol`,
  async (childId, { rejectWithValue }) => {
    try {
      await axiosApi.post(
        `/surveys/children/${childId}/create-examination-protocol/`,
        {}
      );
    } catch (e) {
      return rejectWithValue(e);
    }
  }
);

export const updateSpeechCard = createAsyncThunk(
  `${nameSpace}/updateSpeechCard`,
  async ({ speechCardId, speechCardData }, { rejectWithValue }) => {
    try {
      const resp = axiosApi.put(
        `/charts/speech-card/${speechCardId}/`,
        speechCardData
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
    clearSurveysState: (state) => {
      state.loading = false;
      state.success = false;
      state.speechCard = null;
      state.erros = null;
    },
  },
  extraReducers: {
    [getProtocol.pending]: (state) => {
      state.success = false;
    },
    [getProtocol.fulfilled]: (state, { payload }) => {
      state.speechCard = payload;
      state.loading = false;
      state.success = true;
    },
    [getProtocol.rejected]: (state, { payload }) => {
      state.loading = false;
      state.success = false;
      state.errors = payload;
    },

    [createProtocol.pending]: (state) => {
      state.loading = true;
      state.success = false;
    },
    [createProtocol.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.success = true;
    },
    [createProtocol.rejected]: (state, { payload }) => {
      state.loading = false;
      state.success = false;
      state.errors = payload;
    },

    [updateSpeechCard.pending]: (state) => {
      state.loading = true;
      state.success = false;
    },
    [updateSpeechCard.fulfilled]: (state) => {
      state.loading = false;
      state.success = true;
    },
    [updateSpeechCard.rejected]: (state, { payload }) => {
      state.loading = false;
      state.success = false;
      state.errors = payload;
    },
  },
});

export const { clearProtocolState } = protocolSlice.actions;
export const protocolSelector = (state) => state.surveys;
export default protocolSlice.reducer;
