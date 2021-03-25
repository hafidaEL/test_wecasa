import { createSlice } from '@reduxjs/toolkit'

export const initialState = {
    loading: false,
    hasErrors: false,
    haircutPrestation: [],
}

const haircutPrestationSlice = createSlice({
    name: 'haircutPrestation',
    initialState,
    reducers: {
        getHaircutPrestation: state => {
            state.loading = true
        },
        getHaircutPrestationSuccess: (state, {payload}) => {
            state.haircutPrestation = payload
            state.loading = false
            state.hasErrors = false
        },
        getHaircutPrestationFailure: state => {
            state.loading = false
            state.hasErrors = true
        },
    },
})

export const { getHaircutPrestation, getHaircutPrestationSuccess, getHaircutPrestationFailure } = haircutPrestationSlice.actions

export const haircutPrestationSelector = state => state.haircutPrestation

export default haircutPrestationSlice.reducer

export function fetchHaircutPrestation() {
    return async dispatch => {
        dispatch(getHaircutPrestation())
        try {
            const response = await fetch('https://www.wecasa.fr/api/techtest/universe')
            const data = await response.json()
            console.log("data ", data);
            dispatch(getHaircutPrestationSuccess(data))
        }
        catch (error) {
            dispatch(getHaircutPrestationFailure())
        }
    }
}