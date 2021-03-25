import { createSlice } from '@reduxjs/toolkit'

export const initialState = {
    totalPrice: 0,
    totalDuration: 0,
    prestations: [],
}

const basketSlice = createSlice({
    name: 'basket',
    initialState,
    reducers: {
        addPrestation: (state, {payload}) => {
            const index = state.prestations.findIndex( p =>  p.reference === payload.reference ) ; 
            if (index < 0) {
                state.prestations.push({ reference : payload.reference, qty: 1})
                state.totalPrice += payload.price
                state.totalDuration += payload.duration
            } else {
                state.prestations[index].qty += 1
                state.totalPrice += payload.price
                state.totalDuration += payload.duration
            }  
        },
        deletePrestation: (state, {payload}) => {
            const index = state.prestations.findIndex( p =>  p.reference === payload.reference ) ;
            if (index >= 0 && state.prestations[index].qty >= 1 ) {
                state.prestations[index].qty -= 1
                state.totalPrice -= payload.price
                state.totalDuration -= payload.duration
            }   
        },
    },
})

export const { addPrestation, deletePrestation } = basketSlice.actions

export default basketSlice.reducer