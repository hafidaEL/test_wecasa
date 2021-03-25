import { createSlice } from '@reduxjs/toolkit'

export const initialState = {
    adress:"",
    booking:[]
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUserAdress: (state, {payload}) => {
            state.adress = payload;
        }
    },
})

export const { setUserAdress } = userSlice.actions

export default userSlice.reducer