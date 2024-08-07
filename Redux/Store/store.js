import { configureStore } from '@reduxjs/toolkit';
import userReducer from "../Slices/userAuthSlice";
import postReducer from "../Slices/userPostSlice";

export const  store = configureStore({
    reducer:{
        user:userReducer,
        posts: postReducer
    }
})

export const  appDispatch = store.dispatch;
export const rootState = store.getState;