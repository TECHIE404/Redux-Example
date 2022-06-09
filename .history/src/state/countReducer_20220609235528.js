import { createSlice } from '@reduxjs/toolkit';

const initialState ={
    value: 0,
}

export const CounterReducer= createSlice({
    name: 'counter',
    initialState,
    reducer: {
        increase: (state)=>{
            state.value +=1;
        },
        decrease: (state)=>{
            state.value -=1;
        },
        incrementByAmount: (state,action)=>{
            state.value += action.payload
        },
    },
})