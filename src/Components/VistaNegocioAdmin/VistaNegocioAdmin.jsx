import React from "react";
import './VistaNegocioAdmin.scss';
import NavBar3 from "../../Common/NavBar3/NavBar3";
import NegocioInfo from "../NegocioInfo/NegocioInfo";
import ListScroll from "../ListScroll/ListScroll";

const VistaNegocioAdmin =()=>{
    return(
        <>
            <NavBar3/>
            <div className="container">
                <div className="body">
                    <div className="left-grid">
                        <div className="gestores">
                            <div className="title-line"></div>
                            <h1>Gestores</h1>
                        </div>
                        <ListScroll nombre="Alejandro Martinez"/>
                    </div>
                    <div className="right-grid">
                        <NegocioInfo/>
                    </div>
                </div>
            </div>
        </>
    );
}

export default VistaNegocioAdmin;