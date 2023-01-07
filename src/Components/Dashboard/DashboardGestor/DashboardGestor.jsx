import React from "react";
import headerImg from "../../../asets/employVector.png"
import './DashboardGestor.scss';
import ButtonInicioGestor from "./ButtonInicioGestor/ButtonInicioGestor";
import Post from "./Post/Post";
import PostHeader1 from "../../Dashboard/DashboardGestor/PostHeader1/PostHeader1";
import Post1 from "./Post1/Post1";

const DashboardGestor =()=>{
    return(
        <>
            <div className="container-gestor">
                <div className="body-gestor">
                    <div className="left-grid">
                        <div className="header">
                            <span>¡Bienvenido Alejandro!</span>
                        </div>
                        <div>
                            <img src={headerImg} alt="employ" />
                        </div>
                    </div>
                    <div className="right-grid">
                        <ButtonInicioGestor/>
                    </div>
                </div>
            </div>
            <div className="post-section">
                <div className="post-header-1">
                    <PostHeader1/>
                </div>
                {/* <div className="postSpace">
                        <div className="centerSpace">
                            <Post/>
                            <Post/>
                            <Post/>
                            <Post1/>
                        </div>
                </div> */}
                <Post1/>
            </div>
        </>
    );
}

export default DashboardGestor;