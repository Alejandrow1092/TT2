import React from "react";
import NavBar3 from "../../Common/NavBar3/NavBar3";
import ButtonX from "../../DesingComp/ButtonX/Buttonx";
import './EmpleadoInfo.scss';
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

const EmpleadoInfo =(props)=>{
    const{empData}=props;
    console.log(empData)

    const[fecha, setFecha]=useState("");
    const[domiclio, setDomicilio]=useState("");
    const[numCelular, setNumCelular]=useState("");
    const[numCasa, setNumCasa]=useState("");
    const[correo, setCorreo]=useState("");
    const[area, setArea]=useState("");
    const[actividad, setActividad]=useState("");
    const[isAble, setIsAble]=useState(true);
    

    const handleShow=(state)=>{
        if(state===true){
            setIsAble(false);
        }
        else{
            setIsAble(true);
        }
    }


    console.log(empData)

    return(
        <>
           
            <div className="contenedorInfo">
                <div className="nombreEmpleado">
                    <p>Empleado 1</p>
                </div>
                <div className="camposInfo">
                    <span className="input-title"  >Fecha de nacimiento</span>
                    <input className="input" value={fecha} disabled={isAble}/>
                    <span className="input-title">Domicilio</span>
                    <input className="input" disabled={isAble} value={domiclio}/>
                    <span className="input-title">Número de celular</span>
                    <input className="input" value={numCelular} disabled={isAble}/>
                    <span className="input-title">Número de casa</span>
                    <input className="input" value={numCasa} disabled={isAble}/>
                    <span className="input-title">Correo electrónico</span>
                    <input className="input" type="email" disabled={isAble} value={correo}/>
                    <span className="input-title">Área de trabajo</span>
                    <select className="input" disabled={isAble} value={area}>
                        <option>Área 1</option>
                        <option>Área 2</option>
                        <option>Área 3</option>
                    </select>
                    <span className="input-title">Actividad principal</span>
                    <input className="input" value={actividad} disabled={isAble}/>
                </div>
                <div className="editar">
                    <ButtonX title="Editar" fun={handleShow} state={isAble}/>
                </div>
            </div>
        </>
    );
}

export default EmpleadoInfo;