import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axiosApi from '../../axios';
import { examinationProtocolStatuses } from 'constants.js';

const nameSpace = 'surveys';

const INITIAL_STATE = {
    loading: false,
    success: false,
    speechCard: null,
    protocol: null,
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
                `/surveys/examination-protocol/${protocolId}/`,
                newData
            );
            return resp.data;
        } catch (e) {
            return rejectWithValue(e);
        }
    }
);

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

export const moveDataFromProtocolToSpeechCard = createAsyncThunk(
    `${nameSpace}/moveDataFromProtocolToSpeechCard`,
    async ({ childId, data }, { rejectWithValue }) => {
        try {
            const resp = await axiosApi.put(`/surveys/children/${childId}/move-protocol-to-speech-card/`, data)
            return resp.data
        } catch (e) {
            return rejectWithValue(e)
        }
    }
)

export const updateSpeechCard = createAsyncThunk(
    `${nameSpace}/updateSpeechCard`,
    async ({ speechCardId, speechCardData }, { rejectWithValue }) => {
        try {
            const resp = axiosApi.put(
                `/surveys/speech-card/${speechCardId}/`,
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
            state.protocol = null;
            state.errors = null;
        },
        closeProtocol: state => {
            state.protocol = { ...state.protocol, status: examinationProtocolStatuses.closed }
        }
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
        [updateProtocol.fulfilled]: (state) => {
            state.loading = false;
            state.success = true;
        },
        [updateProtocol.rejected]: (state, { payload }) => {
            state.loading = false;
            state.success = false;
            state.errors = payload;
        },

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
        [createSpeechCard.fulfilled]: (state) => {
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

export const { clearSurveysState, closeProtocol } = surveysSlice.actions;
export const surveysSelector = (state) => state.surveys;
export default surveysSlice.reducer;
