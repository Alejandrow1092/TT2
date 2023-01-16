import React from "react";
import './VistaNegocioAdmin.scss';
import NavBar3 from "../../Common/NavBar3/NavBar3";
import NegocioInfo from "../NegocioInfo/NegocioInfo";
import ListScroll from "../../Common/ListScroll/ListScroll";
import Footer from "../../Common/Footer/Footer";
import ButtonX from "../../DesingComp/ButtonX/Buttonx";
import AddGestor from "../../Common/AddGestor/AddGestor";
import { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";

const VistaNegocioAdmin =()=>{
    const [show, setShow]=useState("negocioInfo");
    const [gestores, setGestores]=useState([]);
    
    const idNegocio=useSelector(state=>state.appTT.selectedNegocio);
    const dataNegocio=useSelector(state=>state.appTT.negocioSelectedData)

    console.log(dataNegocio);

    const handleShow=(state)=>{
        console.log(state)
        if(state==="negocioInfo"){
            setShow("formulario");
        }
        if(state==="formulario"){
            setShow("negocioInfo");
        }
    }
    
   /*  useEffect(()=>{
        const requestApi=async()=>{
            const resultSet= await axios.get(`http://localhost:8080/gestores-admin/${idNegocio}`)
            setGestores(resultSet);
            //console.log(resultSet.data);
        }
        requestApi();
        //setGestores(resultSet);
    },[]); */
    useEffect(()=>{
        axios.get(`http://3.132.222.240/gestores-admin/${idNegocio}`)
        .then(({data})=>{
            //console.log(data);
            setGestores(data);
            //console.log(negocios)
        })
        .catch(({response})=>{
            console.log(response.data+" hola");
        });
    },[]);

    console.log(gestores.data);

    return(
        <>
            <NavBar3/>
            <div className="container-vista-admin">
                <div className="body1">
                    <div className="left-grid">
                        <div className="gestores">
                            <div className="title-line"></div>
                            <p>Gestores</p>
                        </div>
                        <ListScroll className="lista-gestores" elementos={gestores} />
                        <ButtonX className="btn" title="Agregar gestores" fun={handleShow} state={show}/>
                    </div>
                    <div className="right-grid">
                        {show==="negocioInfo"&&
                            <NegocioInfo elem={dataNegocio}/>
                        }
                        {show==="formulario"&&
                            <AddGestor userForm="creaGestor"/>
                        }
                      
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    );
}

export default VistaNegocioAdmin;