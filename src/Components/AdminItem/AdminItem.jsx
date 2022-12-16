import React from "react";
import './AdminItem.scss';

const AdminItem =(props)=>{

    const{nombre, correo, celular, casa}=props;
    
    return(
        <>
            <div className="item">
                <span className="text-item">{nombre}</span>
            </div>
            <div className="hidden-box">
                <span>{correo}</span>
                <span>{celular}</span>
                <span>{casa}</span>
            </div>
        </>
    );
}

export default AdminItem;