import React from "react";
import './ListaNegocios.scss';
import NavBar3 from "../../Common/NavBar3/NavBar3";
import AdminItem from "../AdminListNegocio/AdminListNegocio";
import BubbleAdmin from "../BubbleAdmin/BubbleAdmin";
import AdminListNegocio from "../AdminListNegocio/AdminListNegocio";

const ListaNegocios =()=>{
    return(
        <>
            <NavBar3/>
            <div className="container">
                <div className="header">
                    <span>¡Bienvenido!</span>
                </div>
                <div className="body">
                    <div className="left-grid">
                        <AdminListNegocio/>
                        <div>
                            <button>Agregar Negocio</button>
                        </div>
                    </div>
                    <div className="right-grid">
                        <BubbleAdmin/>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ListaNegocios;