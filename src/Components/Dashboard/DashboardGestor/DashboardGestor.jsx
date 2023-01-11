import React from "react";
import headerImg from "../../../asets/employVector.png"
import './DashboardGestor.scss';
import ButtonInicioGestor from "./ButtonInicioGestor/ButtonInicioGestor";
import Post from "./Post/Post";
import PostHeader1 from "../../Dashboard/DashboardGestor/PostHeader1/PostHeader1";
import Post1 from "./Post1/Post1";
import { useSelector } from "react-redux";

const DashboardGestor =()=>{

    const nombre=useSelector(state=>state.appTT.userData.nombre)

    const textos=[
        "Hola, buen dia, les informo que el primer formulario ya fue mandado a todos. Gracias",
        "Hola, buen dia, les informo que el primer formulario ya fue mandado a todos. Gracias",
        "Hola, buen dia, les informo que el primer formulario ya fue mandado a todos. Gracias",
    ]

    return(
        <>
            <div className="container-gestor">
                <div className="body-gestor">
                    <div className="left-grid">
                        <div className="header">
                            <span>¡Bienvenido {nombre}!</span>
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
                <Post1 texto={textos[0]}/>
                <Post1 texto={textos[1]}/>
                <Post1 texto={textos[2]}/>
            </div>
        </>
    );
}

export default DashboardGestor;