import { createSlice } from "@reduxjs/toolkit";

export const appTTSlice = createSlice({
    name: 'appTT',
    initialState:{
        useertype: '',
        logged: false,
    },
    reducers:{
        setUser: (state, action)=>{
            state.useertype = action.payload;
        },
        setLogged: (state, action)=>{
            state.logged = action.payload;
        },
    },
});

export const {setUser, SetLogged} = appTTSlice.actions;

export default appTTSlice.reducer;