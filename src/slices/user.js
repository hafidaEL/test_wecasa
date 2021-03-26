import { createSlice } from '@reduxjs/toolkit'
 

export const initialState = {
    adress:"",
    loading:false,
    hasErrors: false,
    answerApi:""
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUserAdress: (state, {payload}) => {
            state.adress = payload;
        },
        startCreateBooking: state => {
            state.loading = true
        },
        createBookingSuccess: (state, {payload}) => {
            state.answerApi = payload
            state.loading = false
            state.hasErrors = false
        },
        createBookingFailure: state => {
            state.loading = false
            state.hasErrors = true
        },
    },
})

export const { setUserAdress, startCreateBooking, createBookingSuccess, createBookingFailure } = userSlice.actions

export default userSlice.reducer

/*


-d '{"prestations":["brushing"],"appointment":"2018-10-12T14:30:00+02:00","address":"46
Rue René Clair, 75018 Paris"}'
*/

export function createBooking(prestations, appointment, address) {
    return async dispatch => {
        dispatch(startCreateBooking())
        try {
            const response = await fetch('https://www.wecasa.fr/api/techtest/booking', {
                method: 'POST',
                headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify({prestations, appointment, address})
            });
            const data = await response.json()
            dispatch(createBookingSuccess(data));

        }
        catch (error) {
            dispatch(createBookingFailure())
        }
    }
}