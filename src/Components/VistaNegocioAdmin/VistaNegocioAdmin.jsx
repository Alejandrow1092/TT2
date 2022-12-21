import React from "react";
import './VistaNegocioAdmin.scss';
import NavBar3 from "../../Common/NavBar3/NavBar3";
import NegocioInfo from "../NegocioInfo/NegocioInfo";
import ListScroll from "../ListScroll/ListScroll";
import Footer from "../../Common/Footer/Footer";
import ButtonX from "../../DesingComp/ButtonX/Buttonx";
import AddGestor from "../../Common/AddGestor/AddGestor";


const VistaNegocioAdmin =()=>{
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
                        <ButtonX className="btn" title="Agregar gestores"/>
                    </div>
                    <div className="right-grid">
                       {/*  <NegocioInfo/> */}
                        <AddGestor userForm="creaGestor"/>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    );
}

export default VistaNegocioAdmin;