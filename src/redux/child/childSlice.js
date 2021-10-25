import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axiosApi from '../../axios';
import {defaultError} from '../../config';


const nameSpace = 'child'

const INITIAL_STATE = {
    errors: null,
    createChildErrors: null,
    getCountriesListErrors: null,
    getCitiesListErrors: null,


    commonError: null,
    success: false,
    updateChildSuccess: false,
    updateChildAdditionalInfoSuccess: false,
    addSpecialistsForChildSuccess: false,
    getCountriesListSuccess: false,
    getCitiesListSuccess: false,

    specialists: null,
    child: null,
    countries: null,
    cities: null
}

export const getChild = createAsyncThunk(
    `${nameSpace}/getChild`,
    async (childId, {rejectWithValue}) => {
        try {
            const resp = await axiosApi.get(`/accounts/children/${childId}/information/`)
            return resp.data
        } catch (e) {
            return rejectWithValue(e)
        }
    }
)

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

export const updateChild = createAsyncThunk(
    `${nameSpace}/updateChild`,
    async ({childId, childData}, {rejectWithValue}) => {
        try {
            const resp = await axiosApi.put(`/accounts/children/${childId}/`, childData)
            return resp.data
        } catch (e) {

        }
    }
)

export const updateChildAdditionalInfo = createAsyncThunk(
    `${nameSpace}/updateChildAdditionalInfo`,
    async ({additionalDataId, additionalInfo}, {rejectWithValue}) => {
        try {
            const url = `/accounts/child-additional-info/${additionalDataId}/update/`
            const resp = await axiosApi.patch(url, additionalInfo)
            return resp.data
        } catch (e) {
            return rejectWithValue(e?.response?.data)
        }
    }
)

export const getSpecialists = createAsyncThunk(
    `${nameSpace}/getSpecialists`,
    async (_, {rejectWithValue}) => {
        try {
            const resp = await axiosApi.get('/accounts/specialists/')
            return resp.data
        } catch (e) {
            return rejectWithValue(e)
        }
    }
)

export const addSpecialistsForChild = createAsyncThunk(
    `${nameSpace}/addSpecialistsForChild`,
    async ({childId, specialists}, {rejectWithValue}) => {
        try {
            const resp = await axiosApi.post(`/accounts/children/${childId}/specialist/`, specialists)
            return resp.data
        } catch (e) {
            return rejectWithValue(e)
        }
    }
)

export const deleteChildSpecialist = createAsyncThunk(
    `${nameSpace}/deleteChildSpecialist`,
    async ({specialistId}, {rejectWithValue}) => {
        try {
            const resp = await axiosApi.delete(`/accounts/specialist/${specialistId}/delete/`)
            return resp.data
        } catch (e) {
            return rejectWithValue(e)
        }
    }
)

export const updateChildSpecialist = createAsyncThunk(
    `${nameSpace}/updateChildSpecialist`,
    async ({specialistId, specialist}, {rejectWithValue}) => {
        try {
            const resp = await axiosApi.put(`/accounts/specialist/${specialistId}/update/`, specialist)
            return resp.data
        } catch (e) {
            return rejectWithValue(e)
        }
    }
)

export const getCountriesList = createAsyncThunk(
    `${nameSpace}/getCountriesList`,
    async (_, {rejectWithValue}) => {
        try {
            const resp = await axiosApi.get('/countries/')
            return resp.data
        } catch (e) {
            return rejectWithValue(e?.response?.data)
        }
    }
)

export const getCitiesList = createAsyncThunk(
    `${nameSpace}/getCitiesList`,
    async (countryId, {rejectWithValue}) => {
        try {
            const resp = await axiosApi.get(`/countries/${countryId}/cities/`)
            return resp.data
        } catch (e) {
            return rejectWithValue(e?.response?.data)
        }
    }
)

const childSlice = createSlice({
    name: nameSpace,
    initialState: INITIAL_STATE,
    reducers: {
        clearChildState: state => {
            state.success = false
            state.updateChildSuccess = false
            state.updateChildAdditionalInfoSuccess = false
            state.child = null
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
        },

        [getSpecialists.pending]: state => {
            state.loading = true
            state.success = false
        },
        [getSpecialists.fulfilled]: (state, {payload}) => {
            state.loading = false
            state.success = true
            state.specialists = payload
        },
        [getSpecialists.rejected]: (state, {payload}) => {
            state.errors = payload
            state.loading = false
            state.success = false
        },

        [getChild.pending]: state => {
            state.loading = true
            state.success = false
        },
        [getChild.fulfilled]: (state, {payload}) => {
            state.loading = false
            state.success = true
            state.child = payload
        },
        [getChild.rejected]: (state, {payload}) => {
            state.loading = false
            state.success = false
            state.errors = payload
        },

        [updateChild.pending]: state => {
            state.loading = true
            state.updateChildSuccess = false
        },
        [updateChild.fulfilled]: (state) => {
            state.loading = false
            state.updateChildSuccess = true
        },
        [updateChild.rejected]: (state, {payload}) => {
            state.loading = false
            state.updateChildSuccess = false
            state.createChildErrors = payload
        },

        [updateChildAdditionalInfo.pending]: state => {
            state.updateChildAdditionalInfoSuccess = false
        },
        [updateChildAdditionalInfo.fulfilled]: state => {
            state.updateChildAdditionalInfoSuccess = true
        },
        [updateChildAdditionalInfo.rejected]: (state, {payload}) => {
            state.updateChildAdditionalInfoSuccess = false
            state.errors = payload
        },

        [addSpecialistsForChild.pending]: state => {
            state.addSpecialistsForChildSuccess = false
        },
        [addSpecialistsForChild.fulfilled]: state => {
            state.addSpecialistsForChildSuccess = true
        },
        [addSpecialistsForChild.rejected]: state => {
            state.addSpecialistsForChildSuccess = false
        },

        [getCountriesList.pending]: state => {
            state.getCountriesListSuccess = false
            state.getCountriesListErrors = null
        },
        [getCountriesList.fulfilled]: (state, {payload}) => {
            state.getCountriesListSuccess = true
            state.countries = payload
        },
        [getCountriesList.rejected]: (state, {payload}) => {
            state.getCountriesListSuccess = false
            state.getCountriesListErrors = payload
        },

        [getCitiesList.pending]: state => {
            state.getCitiesListErrors = null
            state.getCitiesListSuccess = false
        },
        [getCitiesList.fulfilled]: (state, {payload}) => {
            state.getCitiesListErrors = false
            state.getCitiesListSuccess = true
            state.cities = payload
        },
        [getCitiesList.rejected]: (state, {payload}) => {
            state.getCitiesListErrors = payload
            state.getCitiesListSuccess = false
        }
    }
})

export const {clearChildState} = childSlice.actions
export const childSelector = state => state.child
export default childSlice.reducer
