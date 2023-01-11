import React from "react";
import headerImg from "../../../asets/employVector.png"
import './DashboardGestor.scss';
import ButtonInicioGestor from "./ButtonInicioGestor/ButtonInicioGestor";
import Post from "./Post/Post";
import PostHeader1 from "../../Dashboard/DashboardGestor/PostHeader1/PostHeader1";
import Post1 from "./Post1/Post1";
import { useSelector } from "react-redux";
import { useState } from "react";

const DashboardGestor =()=>{

    const nombre=useSelector(state=>state.appTT.userData.nombre)
    const[cuerpoPost, setCuerpoPost]=useState("");
    const[headerPost, setHeaderPost]=useState("");
    const[newP, setNewP]=useState(false);

    const textos=[
        "Hola, buen dia, les informo que el primer formulario ya fue mandado a todos. Gracias",
        "Hola, buen dia, les informo que el primer formulario ya fue mandado a todos. Gracias",
        "Hola, buen dia, les informo que el primer formulario ya fue mandado a todos. Gracias",
    ]

    const handlebody=(state)=>{
        setCuerpoPost(state);
        console.log(cuerpoPost)
    }

    const handleheader=(state)=>{
        setHeaderPost(state)
        console.log(headerPost)
    }

    const post=()=>{
        setNewP(true);
    }


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
                    <PostHeader1 header={headerPost} cuerpo={cuerpoPost} headerFun={handleheader} cuerpoFun={handlebody} postFun={post} title={headerPost}/>
                </div>
                {/* <div className="postSpace">
                        <div className="centerSpace">
                            <Post/>
                            <Post/>
                            <Post/>
                            <Post1/>
                        </div>
                </div> */}
                {newP&&
                    <Post1 texto={cuerpoPost} header={headerPost}/>
                }
                <Post1 texto={textos[0]} imglink="https://picsum.photos/650"/>
                <Post1 texto={textos[1]} imglink="https://picsum.photos/651"/>
                <Post1 texto={textos[2]} imglink="https://picsum.photos/652"/>
            </div>
        </>
    );
}

export default DashboardGestor;