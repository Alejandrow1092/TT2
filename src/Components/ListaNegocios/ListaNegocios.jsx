import React from "react";
import './ListaNegocios.scss';
import NavBar3 from "../../Common/NavBar3/NavBar3";
import BubbleAdmin from "../BubbleAdmin/BubbleAdmin";
import ListScroll from "../ListScroll/ListScroll";

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
                        <ListScroll/>
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