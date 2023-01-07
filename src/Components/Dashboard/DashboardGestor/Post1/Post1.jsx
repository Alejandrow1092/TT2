import React from "react";
import "./Post1.scss";

const Post1=()=>{
    return(
      <>
        <div className="post">
            <div className="header-p">
                <div className="perfil-img">
                    <img src="https://picsum.photos/50" alt="" />
                </div>
                <div className="post-info">
                    <section className="nombre-post">
                        <p id="nombre">Alejandro Martinez</p>
                        <p id="puesto">Gestor . </p>
                    </section>
                    <section className="fecha-post">
                        <p>12/12/2022</p>
                        <img src="https://picsum.photos/50" alt="" />
                    </section>
                </div>
            </div>
            <div className="main-post-section">
                <p id="desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis ipsam repellendus, 
                possimus ea tempore, animi ratione excepturi magni debitis cumque quia consectetur explicabo odio 
                earum rem inventore aspernatur tenetur vero!</p>
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