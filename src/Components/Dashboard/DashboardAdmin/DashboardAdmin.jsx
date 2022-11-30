import React from "react";
import headerImg from "../../asets/header.png"
import './DashboardAdmin.scss';
import NavBar3 from "../../../Common/NavBar3/NavBar3";
import AdminItem from "../../AdminItem/AdminItem";
import BubbleAdmin from "../../BubbleAdmin/BubbleAdmin";

const DashboardAdmin =()=>{
    return(
        <>
            <div className="container">
                <div className="header">
                    <span>¡Bienvenido!</span>
                </div>
                <div className="body">
                    <div className="left-grid">
                        <BubbleAdmin/>
                    </div>
                    <div className="right-grid">
                        <AdminItem/>
                        <AdminItem/>
                        <AdminItem/>
                        <AdminItem/>
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