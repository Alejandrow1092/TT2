import React from "react";
import "./PostHeader1.scss";
import sendIcon from "../../../../asets/sendVector.png"
import addFoto from "../../../../asets/add-foto.png"

const PostHeader1=()=>{
    return(
        <>
            <div className="post-header">
               
                <div className="img-header">
                    <figure>
                        <img src="https://picsum.photos/35" alt="profile" />
                    </figure>
                    <input type="text" id="title" placeholder="Título"/>
                    <input type="text" id="type" placeholder="Tipo"/>
                </div>
                <div className="post-body">
                    
                    <textarea placeholder="¿Qué quieres compartir con tus empleados?">

                    </textarea>
                </div>

                <div className="post-btn">
                    <button id="publicar">
                        <p>Publicar</p>
                        <img className="send-icon" src={sendIcon} alt="" />
                    </button>
                    <button id="añadir">
                        <p>Añadir </p>
                        <img src={addFoto} alt="" />
                    </button>
                </div> 
                
            </div>
        </>
    );
}

export default PostHeader1;