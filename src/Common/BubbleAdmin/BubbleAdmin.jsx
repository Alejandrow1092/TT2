import React from "react";
import './BubbleAdmin.scss';

const BubbleAdmin =(props)=>{
    const {adminRegistrados, textoBubble}=props;

    return(
        <>
            <div className="bubble">
                <span name="span-yellow">{adminRegistrados}</span>
                {textoBubble==="admin"&& <span name="span-white">Administradores <br/> registrados</span>}
                {textoBubble==="negocios"&& <span name="span-white">Negocios estan <br/> utilizando el sistema</span>}
                
            </div>
        </>
    );
}

export default BubbleAdmin;