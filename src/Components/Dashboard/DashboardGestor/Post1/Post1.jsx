import React from "react";
import "./Post1.scss";
import portafolioIcon from "../../../../asets/portafolio.png"
import adIcon from "../../../../asets/advertencia.png"
import { useSelector } from "react-redux";

const Post1=(props)=>{

    const{texto}=props;

    const nombre=useSelector(state=>state.appTT.userData.nombre)

    return(
      <>
        <div className="post">
            <div className="header-p">
                <div className="perfil-img">
                    <img src="https://picsum.photos/50" alt="" />
                </div>
                <div className="post-info">
                    <section className="nombre-post">
                        <p id="nombre">{nombre}</p>
                        <div className="sub">
                            <p id="puesto">Gestor  </p>
                            <img src={portafolioIcon} width="20px" alt="" />
                        </div>
                        
                    </section>
                    <section className="fecha-post">
                        <p>12/12/2022</p>
                        <img src={adIcon} alt="" />
                    </section>
                </div>
            </div>
            <div className="main-post-section">
                <p id="desc">{texto}</p>
                <figure>
                    <img src="https://picsum.photos/650" alt="" />
                </figure>
            </div>
            <div className="comment-btn">
                <button>
                    <p>Comentar</p>
                    <img src="" alt="" />
                </button>
            </div>
            <div className="comment-area">
                <div className="single-comment">
                    {/* <textarea placeholder="Agrega un comentario">

                    </textarea> */}
                    <div className="text-area" 
                        contentEditable="true" 
                        placeholder="Agrega un comentario"
                        oninput="if(this.innerHTML.trim()==='<br>')this.innerHTML=''"
                    >

                    </div>
                    <img src="https://picsum.photos/30" alt="" />
                </div>
            </div>
        </div>
      </>  
    );
}

export default Post1;