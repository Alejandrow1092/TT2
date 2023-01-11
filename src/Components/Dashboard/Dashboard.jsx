import React from "react";
import headerImg from "../../asets/header.png"
import './Dashboard.scss';
import NavBar3 from "../../Common/NavBar3/NavBar3";
import AdminItem from "../AdminItem/AdminItem";
import DashboardAdmin from "./DashboardAdmin/DashboardAdmin";
import DashboardGestor from "./DashboardGestor/DashboardGestor";
import { useSelector, useDispatch } from "react-redux";
import { setUser, setLogged, setSelectedNegocio } from "../../rootReducer";
import Footer from "../../Common/Footer/Footer";
import DashboardEmpleado from "./DashboardEmpleado/DashboardEmpleado";
import { useEffect } from "react";
import axios from "axios";

const Dashboard =()=>{
    const user=useSelector((state)=>state.appTT.userType);
    const userId=useSelector((state)=>state.appTT.userData.id);
    const dispatch=useDispatch();
    //console.log(userId);

    useEffect(()=>{
        const negocioType=async()=>{
            const negocioid=await axios.get(`http://localhost:8080/negocio-id/${userId}`);
            console.log(negocioid.data[0].idnegocio);
            dispatch(setSelectedNegocio(negocioid.data[0].idnegocio))
        }
        
        if(user==="Gestor"){
            negocioType();
        }

    }, []);
    
    

    return(
        <>
            <NavBar3 />
            {user==='Admin'&& <DashboardAdmin user={"Alejandro"}/>}
            {user==='Gestor' && <DashboardGestor/>}
            {user==='Empleado' &&<DashboardEmpleado/>}
            <Footer />
        </>
    );
}

export default Dashboard;