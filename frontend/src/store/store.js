import { configureStore } from "@reduxjs/toolkit";
import authReducer from './authSlice';
import activityReducer from './activitySlice';
import problemsReducer from './problemSlice';

export const store = configureStore({
    reducer:{
        auth: authReducer,
        activity: activityReducer,
        problems: problemsReducer,
    }
})

export default store;