import React from "react";
import "./PostHeader1.scss";
import sendIcon from "../../../../asets/sendVector.png"
const PostHeader1=()=>{
    return(
        <>
            <div className="post-header">
               
                <div className="img-header">
                    <figure>
                        <img src="https://picsum.photos/60" alt="profile" />
                    </figure>
                </div>
                <div className="post-body">
                    <div className="post-header">
                        <input type="text" placeholder="titulo"/>
                        <input type="text" placeholder="Tipo"/>
                    </div>
                    <textarea placeholder="Añade una descripcion a tu mensaje">

                    </textarea>
                    <button>

                        <p>Publicar</p>
                        <img className="send-icon" src={sendIcon} alt="" />
                    </button>
                </div>
                
            </div>
        </>
    );
}

export default PostHeader1;