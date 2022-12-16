import { createSlice } from "@reduxjs/toolkit";

export const appTTSlice = createSlice({
    name: 'appTT',
    initialState:{
        userType: 'Admin',
        logged: false,
    },
    reducers:{
        setUser: (state, action)=>{
            state.usertype = action.payload;
        },
        setLogged: (state, action)=>{
            state.logged = action.payload;
        },
    },
});

export const {setUser, setLogged} = appTTSlice.actions;

export default appTTSlice.reducer;