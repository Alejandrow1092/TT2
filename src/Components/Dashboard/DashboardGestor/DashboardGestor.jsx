import React from "react";
import headerImg from "../../../asets/employVector.png"
import './DashboardGestor.scss';
import ButtonInicioGestor from "../../ButtonInicioGestor/ButtonInicioGestor";
import Post from "../../Post/Post";

const DashboardGestor =()=>{
    return(
        <>
            <div className="container">
                <div className="body">
                    <div className="left-grid">
                        <div className="header">
                            <span>¡Bienvenido!</span>
                        </div>
                        <div>
                            <img src={headerImg} alt="employ" />
                        </div>
                    </div>
                    <div className="right-grid">
                        <ButtonInicioGestor/>
                    </div>
                </div>
                <div className="postSpace">
                    <div className="centerSpace">
                        <Post/>
                        <Post/>
                    </div>
                </div>
            </div>
        </>
    );
}

export default DashboardGestor;