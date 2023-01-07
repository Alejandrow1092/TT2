import React from "react";
import headerImg from "../../asets/header.png"
import './Dashboard.scss';
import NavBar3 from "../../Common/NavBar3/NavBar3";
import AdminItem from "../AdminItem/AdminItem";
import DashboardAdmin from "./DashboardAdmin/DashboardAdmin";
import DashboardGestor from "./DashboardGestor/DashboardGestor";
import { useSelector, useDispatch } from "react-redux";
import { setUser, setLogged } from "../../rootReducer";
import Footer from "../../Common/Footer/Footer";
import DashboardEmpleado from "./DashboardEmpleado/DashboardEmpleado";

const Dashboard =()=>{
    const user=useSelector((state)=>state.appTT.userType);
    console.log(user)
    
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