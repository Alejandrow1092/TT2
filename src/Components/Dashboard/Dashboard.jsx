import React from "react";
import NavBar from "../../Common/NavBar/NavBar";
import headerImg from "../../asets/header.png"
import './Dashboard.scss';
import NavBar3 from "../../Common/NavBar3/NavBar3";

const Dashboard =()=>{
    return(
        <>
            <NavBar3/>
            <div className="top-header">
                <div className="description-header">
                    <p id="titulo">¿Tu empresa cumple la NOM-035?</p>
                    <p id="subtitulo">
                        Descubre si tu empresa cumple la norma mexicana
                        y crea empleados felices.
                    </p>
                    <button>Comenzar Test</button>
                </div>
                <div className="img-header">
                 
                        <img src={headerImg} alt="" />
                   
                </div>
            </div>
        </>
    );
}

export default Dashboard;