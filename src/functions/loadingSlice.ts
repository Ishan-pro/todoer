import { createSlice } from '@reduxjs/toolkit';


interface loadingState {

    loading: 'idle' | 'pending' | 'succeeded' | 'failed'
}

const initialState = {
    loading:"idle"
} as loadingState

 const loadingSlice = createSlice({
    name:"loading",
    initialState,
    reducers:{
        loadup:(state, action) => {
            state.loading = action.payload
        },
        failedOrPassed:(state, action) => {
            state.loading = action.payload
            setTimeout(() => {state.loading ="idle"}, 5000)
        }
    }
})

export const {loadup, failedOrPassed} = loadingSlice.actions

export default loadingSlice

