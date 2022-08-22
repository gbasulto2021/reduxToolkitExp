
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: 0,
};

export const contadorSlice = createSlice({
    name:"contador",
    initialState,
    reducers:{
        increment: (state)=>{
            state.value += 1

        },

        decrement: (state)=>{
           state.value -=1
        },
        reset: (state)=>{
            state.value = 0;

        },
        incrementByAmount: (state, action)=>{

            state.value += action.payload
        },
        decrementByAmount: (state, action)=>{
            state.value -= action.payload
        }
    }
})

export const {increment, decrement, reset, incrementByAmount, decrementByAmount} = contadorSlice.actions;

export default contadorSlice.reducer;