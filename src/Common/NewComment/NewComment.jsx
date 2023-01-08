import React from "react";
import "./NewComment.scss";

const NewComment=()=>{
    return(
        <>
        <div className="new-comment">
            <div className="text-area" 
                contentEditable="true" 
                placeholder="Agrega un comentario"
                oninput="if(this.innerHTML.trim()==='<br>')this.innerHTML=''"
            >
                
            </div>
            <img src="https://picsum.photos/40" alt="" />
        </div>
        </>
    );
}

export default NewComment;