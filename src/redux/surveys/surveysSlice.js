import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axiosApi from '../../axios';

const nameSpace = 'surveys';

const INITIAL_STATE = {
  loading: false,
  success: false,
  speechCard: null,
  errors: null,
};

export const getSpeechCard = createAsyncThunk(
  `${nameSpace}/getSpeechCard`,
  async (childId, { rejectWithValue }) => {
    try {
      const resp = await axiosApi.get(
        `/surveys/children/${childId}/speech-card/`
      );
      return resp.data;
    } catch (e) {
      return rejectWithValue(e);
    }
  }
);

export const createSpeechCard = createAsyncThunk(
  `${nameSpace}/createSpeechCard`,
  async ({ childId, speechCardData }, { rejectWithValue }) => {
    try {
      await axiosApi.post(
        `/surveys/children/${childId}/create-speech-card/`,
        speechCardData
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

const surveysSlice = createSlice({
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
    [getSpeechCard.pending]: (state) => {
      state.success = false;
    },
    [getSpeechCard.fulfilled]: (state, { payload }) => {
      state.speechCard = payload;
      state.loading = false;
      state.success = true;
    },
    [getSpeechCard.rejected]: (state, { payload }) => {
      state.loading = false;
      state.success = false;
      state.errors = payload;
    },

    [createSpeechCard.pending]: (state) => {
      state.loading = true;
      state.success = false;
    },
    [createSpeechCard.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.success = true;
    },
    [createSpeechCard.rejected]: (state, { payload }) => {
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

export const { clearSurveysState } = surveysSlice.actions;
export const surveysSelector = (state) => state.surveys;
export default surveysSlice.reducer;
