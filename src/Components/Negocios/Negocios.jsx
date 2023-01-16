import React from "react";
import './Negocios.scss';
import NavBar3 from "../../Common/NavBar3/NavBar3";
import BubbleAdmin from "../../Common/BubbleAdmin/BubbleAdmin";
import ListScroll from "../../Common/ListScroll/ListScroll";
import { useDispatch, useSelector } from "react-redux";
import VistaNegocioGestor from "./VistaNegocioGestor/VistaNegocioGestor";
import Footer from "../../Common/Footer/Footer"
import AddGestor from "../../Common/AddGestor/AddGestor";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";

const Negocios =()=>{
    const user=useSelector((state)=>state.appTT.userType);
    const [show, setShow]=useState("burble");
    const [negocios, setNegocios]=useState([]);

    const handleShow=()=>{
        if(show==="burble"){
            setShow("formulario");
        }
        if(show==="formulario"){
            setShow("burble");
        }
    }

    useEffect(()=>{
        axios.get('http://3.132.222.240/negocios')
        .then(({data})=>{
            //console.log(data);
            setNegocios(data);
            //console.log(negocios)
        })
        .catch(({response})=>{
            console.log(response.data+" hola");
        });
    },[]);

    console.log(negocios)
    
    //console.log(user)
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
                        {/* <ListScroll nombre="Juguitos y Refrescos Felices"/> */}
                       {/*  <ListScroll nombre="Alejandro Martinez"/> */}
                        <ListScroll elementos={negocios}/>

                        <div>
                            <button onClick={handleShow}>Agregar Negocio</button>
                        </div>
                    </div>
                    <div className="right-grid">
                        {show==="burble"&&
                            <BubbleAdmin adminRegistrados={negocios.length} textoBubble="negocios"/>
                        }
                        {show==="formulario"&&
                            <AddGestor userForm="creaNegocio"/>
                        }
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

export default Negocios;