import React from "react";
import headerImg from "../../../asets/header.png"
import './DashboardAdmin.scss';
import NavBar3 from "../../../Common/NavBar3/NavBar3";
import AdminItem from "../../AdminItem/AdminItem";
import BubbleAdmin from "../../../Common/BubbleAdmin/BubbleAdmin";
import { useSelector } from "react-redux";
import axios from 'axios';
import { useEffect } from "react";

const DashboardAdmin = (props)=>{
    const {user}=props;
    const {nombre}=useSelector(state=>state.appTT.userData);
    
    
    return(
        <>
            <div className="container">
                <div className="dash-header">
                    <span>¡Bienvenido {nombre}!</span>
                </div>
                <div className="body-admin">
                    <div className="left-grid">
                        <BubbleAdmin adminRegistrados="3" textoBubble="admin"/>
                    </div>
                    <div className="right-grid">
                        <p id="admin">Administradores</p>
                        <AdminItem nombre="Alejandro Martinez" correo="correodummie1@dum.com" celular="35523534523" casa="5545698745"/>
                        <AdminItem nombre="Sergio Alejandro" correo="correodummie2@dum.com" celular="35523534523" casa="5545698745"/>
                        <AdminItem nombre="Luis Ramirez" correo="correodummie3@dum.com" celular="35523534523" casa="5545698745"/>
                        
                        <div className="version">
                            <span>Versión del Software: 1.0</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default DashboardAdmin;