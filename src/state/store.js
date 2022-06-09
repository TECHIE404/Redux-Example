import {configureStore} from '@reduxjs/toolkit';
import counterReducer from './countReducer';

export const store = configureStore({
    reducer: {
        counter: counterReducer
    },
})