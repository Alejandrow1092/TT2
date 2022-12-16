import React from "react";
import './ListaNegocios.scss';
import NavBar3 from "../../Common/NavBar3/NavBar3";
import BubbleAdmin from "../BubbleAdmin/BubbleAdmin";
import ListScroll from "../ListScroll/ListScroll";
import { useDispatch, useSelector } from "react-redux";
import VistaNegocioGestor from "../VistaNegocioGestor/VistaNegocioGestor";


const ListaNegocios =()=>{
    const user=useSelector((state)=>state.appTT.userType);
    console.log(user)
    return(
        <>

            <NavBar3/>
            {user==="Admin"&&
            <div className="container">
                <div className="header">
                    <span>¡Bienvenido!</span>
                </div>
                <div className="body">
                    <div className="left-grid">
                        <ListScroll nombre="Juguitos y Refrescos Felices"/>
                        <div>
                            <button>Agregar Negocio</button>
                        </div>
                    </div>
                    <div className="right-grid">
                        <BubbleAdmin adminRegistrados="2" textoBubble="negocios"/>
                    </div>
                </div>
            </div>
            }
            {user==="Gestor"&&
                <VistaNegocioGestor/>
            }
        </>
    );
}

export default ListaNegocios;