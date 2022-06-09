import { createSlice } from '@reduxjs/toolkit';

const initialState ={
    value: 0,
}

export const CounterReducer= createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increase: (state)=>{
            state.value +=1;
        },
        decrease: (state)=>{
            if(state.value>0)
                state.value -=1;
        },
        Divide: (state)=>{
            if(state.value>0){
                state.value %=2
            }
        },
        incrementByAmount: (state,action)=>{
            state.value += action.payload
        },
    },
})

export const {increase, decrease, incrementByAmount} = CounterReducer.actions;

export default CounterReducer.reducer;