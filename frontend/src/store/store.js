import { configureStore } from "@reduxjs/toolkit";
import authReducer from './authSlice';
import activityReducer from './activitySlice';
import problemsReducer from './problemSlice';
import problemDetailReducer from './porblemDetailSlice';

export const store = configureStore({
    reducer:{
        auth: authReducer,
        activity: activityReducer,
        problems: problemsReducer,
        problemDetail: problemDetailReducer,
    }
})

export default store;