import React from "react";
import "./PostHeader1.scss";
import sendIcon from "../../../../asets/sendVector.png"
import addFoto from "../../../../asets/add-foto.png"
import adIcon from "../../../../asets/advertencia.png"

const PostHeader1=(props)=>{
    const{header, cuerpo, headerFun, cuerpoFun, postFun}=props

    return(
        <>
            <div className="post-header">
               
                <div className="img-header">
                    <figure>
                        <img src="https://picsum.photos/35" alt="profile" />
                    </figure>
                    <input onChange={(event)=>headerFun(event.target.value)} type="text" id="title" placeholder="Título"/>
                   {/*  <input type="text" id="type" placeholder="Tipo"/> */}
                    <select name="" id="type">
                        <option value="" selected disabled>Tipo</option>
                        <option value="importante">
                            <p>Importante</p>
                            <img src={adIcon} width="3px" alt="" />
                        </option>
                        <option value="opcional">
                            <p>Opcional</p>
                        </option>
                    </select>
                </div>
                <div className="post-body">
                    
                    <textarea onChange={(event)=>cuerpoFun(event.target.value)} placeholder="¿Qué quieres compartir con tus empleados?">

                    </textarea>
                </div>

                <div className="post-btn">
                    <button id="publicar" onClick={postFun}>
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