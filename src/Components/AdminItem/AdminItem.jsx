import React from "react";
import './AdminItem.scss';

const AdminItem =()=>{
    return(
        <>
            <div className="item">
                <span className="text-item">Texto Dummie</span>
            </div>
            <div className="hidden-box">
                <span>Correo electrónico</span>
                <span>Número de celular</span>
                <span>Número de casa</span>
            </div>
        </>
    );
}

export default AdminItem;