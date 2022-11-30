import { configureStore } from "@reduxjs/toolkit";
import  appTTSlice  from "./rootReducer";

export default configureStore({
    reducer:{
        appTT: appTTSlice,
    },
})