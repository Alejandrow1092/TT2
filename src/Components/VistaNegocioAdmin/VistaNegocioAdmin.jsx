import React from "react";
import './VistaNegocioAdmin.scss';
import NavBar3 from "../../Common/NavBar3/NavBar3";
import NegocioInfo from "../NegocioInfo/NegocioInfo";
import ListScroll from "../ListScroll/ListScroll";
import Footer from "../../Common/Footer/Footer";
import ButtonX from "../../DesingComp/ButtonX/Buttonx";
import AddGestor from "../../Common/AddGestor/AddGestor";
import { useState } from "react";

const VistaNegocioAdmin =()=>{
    const [show, setShow]=useState("negocioInfo");

    const handleShow=(state)=>{
        console.log(state)
        if(state==="negocioInfo"){
            setShow("formulario");
        }
        if(state==="formulario"){
            setShow("negocioInfo");
        }
    }
    
    return(
        <>
            <NavBar3/>
            <div className="container-vista-admin">
                <div className="body1">
                    <div className="left-grid">
                        <div className="gestores">
                            <div className="title-line"></div>
                            <p>Gestores</p>
                        </div>
                        <ListScroll className="lista-gestores" nombre="Alejandro Martinez"/>
                        <ButtonX className="btn" title="Agregar gestores" fun={handleShow} state={show}/>
                    </div>
                    <div className="right-grid">
                        {show==="negocioInfo"&&
                            <NegocioInfo/>
                        }
                        {show==="formulario"&&
                            <AddGestor userForm="creaGestor"/>
                        }
                      
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    );
}

export default VistaNegocioAdmin;