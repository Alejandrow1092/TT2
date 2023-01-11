import { createSlice } from "@reduxjs/toolkit";

export const appTTSlice = createSlice({
    name: 'appTT',
    negocioNuevo:"",
    gestorNuevo:"",
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
            state.userType = action.payload[0][Object.keys(action.payload[0])[0]]
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
        },
        setnegocionuevo:(state, action)=>{
            state.negocioNuevo=action.payload;
        },
        setgestornuevo:(state, action)=>{
            state.setgestornuevo=action.payload;
        }
    },
});

export const {setUser, setLogged, setUserData,setSelectedNegocio, setNegocioSelectedData, setgestornuevo, setnegocionuevo} = appTTSlice.actions;

export default appTTSlice.reducer;