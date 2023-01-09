import React from "react";
import './VistaNegocioGestor.scss';
import NegocioInfo from "../../NegocioInfo/NegocioInfo";
import ListScroll from "../../../Common/ListScroll/ListScroll";
import EmpleadoInfo from "../../EmpleadoInfo/EmpleadoInfo"
import ItemArea from "../../../Common/ItemArea/ItemArea";
import ButtonX from "../../../DesingComp/ButtonX/Buttonx"
import axios from "axios";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useState } from "react";

const VistaNegocioGestor =()=>{
    const[negocio, setNegocio]=useState([]);

    const userId=useSelector(state=>state.appTT.userData.id);
    console.log(userId);

    useEffect(()=>{
            axios.get(`http://localhost:8080/negocio-gestor/${userId}`)
            .then(({data})=>{
                //console.log(data);
                setNegocio(data);
                //console.log(negocios)
            })
            .catch(({response})=>{
                console.log(response.data+" hola");
            });
    },[])

    console.log(negocio)

    return(
        <>
            <div className="container-empleado">
                <div className="infoNegocio-empleado">
                    <NegocioInfo elem={negocio[0]}/>
                </div>
                <div className="infoArea">
                    <span>Areas registradas</span>
                    <div className="areas">
                        <ItemArea/>
                        <ItemArea/>
                        <ItemArea/>
                        <ItemArea/>
                        <ItemArea/>
                        <ItemArea/>
                        <ItemArea/>
                        <ItemArea/>
                        <ItemArea/>
                        <ItemArea plus="true"/>
                    </div>
                </div>
                {/* <div className="inputArea">
                    <span>Nombre del area</span>
                    <input></input>
                    <button>Agregar</button>
                </div> */}
                <div className="infoEmpleado">
                    <div className="left-grid-empleado">
                        <div className="gestores">
                            <p>Empleados</p>
                          {/*   <ListScroll nombre="Luis Fernando"/> */}
                        </div>
                        <div>
                            <ButtonX title="Agregar empleado"/>
                        </div>
                    </div>
                    <div className="right-grid-empleado">
                        <EmpleadoInfo/>
                    </div>
                </div>
            </div>
        </>
    );
}

export default VistaNegocioGestor;