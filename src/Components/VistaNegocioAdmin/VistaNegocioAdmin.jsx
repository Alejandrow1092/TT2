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
                        <ListScroll></ListScroll>
                    </div>
                    <div className="right-grid">
                        <NegocioInfo></NegocioInfo>
                    </div>
                </div>
            </div>
        </>
    );
}

export default VistaNegocioAdmin;