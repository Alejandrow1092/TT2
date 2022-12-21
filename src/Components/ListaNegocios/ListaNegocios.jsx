import React from "react";
import './ListaNegocios.scss';
import NavBar3 from "../../Common/NavBar3/NavBar3";
import BubbleAdmin from "../BubbleAdmin/BubbleAdmin";
import ListScroll from "../ListScroll/ListScroll";
import { useDispatch, useSelector } from "react-redux";
import VistaNegocioGestor from "../VistaNegocioGestor/VistaNegocioGestor";
import Footer from "../../Common/Footer/Footer"

const ListaNegocios =()=>{
    const user=useSelector((state)=>state.appTT.userType);
    console.log(user)
    return(
        <>

            <NavBar3/>
            {user==="Admin" &&
            <div className="container-negocio">
                <div className="header">
                    <span>Negocios</span>
                </div>
                <div className="body-negocio">
                    <div className="left-grid">
                        <ListScroll nombre="Juguitos y Refrescos Felices"/>
                       {/*  <ListScroll nombre="Alejandro Martinez"/> */}
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
            <Footer/>
        </>
    );
}

export default ListaNegocios;