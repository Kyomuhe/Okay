import { configureStore } from "@reduxjs/toolkit";
import RegistrationReducer from './Register'
export const store = configureStore({
    reducer: {
        register: RegistrationReducer
    }
})