import { createSlice } from "@reduxjs/toolkit";

export const appTTSlice = createSlice({
    name: 'appTT',
    initialState:{
        userType: 'Gestor',
        logged: false,
        userData:{
            id: 0,
            nombre:"",
            correo:"",
            numeroCasa:"",
            numeroTel:"",
            domicilio:"",
        },
        selectedNegocio: 0,
        negocioSelectedData:{
            nombre:"",
            actividad: "",
            razonSocial:"",
            domicilio:"",
        },
    },
    reducers:{
        setUser: (state, action)=>{
            state.usertype = action.payload;
        },
        setLogged: (state, action)=>{
            state.logged = action.payload;
        },
        setUserData: (state, action)=>{
            //console.log(action.payload.nombre)
            //se puede asignar todo un objeto completo:))))
            //state.userData=action.payload;
       
            state.userData.id=action.payload.idUsuario;
            state.userData.nombre=action.payload.nombre;
            state.userData.correo=action.payload.correoE;
            state.userData.numeroCasa=action.payload.numCasa;
            state.userData.numeroTel=action.payload.numCelular;
            state.userData.domicilio=action.payload.domicilio; 
            state.userData.nombre=action.payload.nombre;
        },
        setSelectedNegocio:(state, action)=>{
            state.selectedNegocio=action.payload;
            //console.log(action.payload);
        },
        setNegocioSelectedData:(state, action)=>{
            state.negocioSelectedData.nombre=action.payload.nombre;
            state.negocioSelectedData.actividad=action.payload.actividad;
            state.negocioSelectedData.razonSocial=action.payload.razonSocial
            state.negocioSelectedData.domicilio=action.payload.domicilio;
        }
    },
});

export const {setUser, setLogged, setUserData,setSelectedNegocio, setNegocioSelectedData} = appTTSlice.actions;

export default appTTSlice.reducer;