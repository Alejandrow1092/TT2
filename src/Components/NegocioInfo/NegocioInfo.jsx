import React from "react";
import './NegocioInfo.scss';
import { useState } from "react";
import informacionIcon from '../../asets/informacion.png'
import { useEffect } from "react";
import empresaIcon from "../../asets/empresa.png"

const NegocioInfo =(props)=>{
    const{elem}=props;
    console.log(elem)

    const [denominacion, setDenominacion]=useState(elem.razonsocial);
    const [domicilio, setDomicilio]=useState(elem.domicilio)
    const [actividadP, setActividadP]=useState(elem.actividad);
    const [nombre, setNombre]=useState(elem.nombre);
    const [isAble, setIsAble]=useState(true);

    const handleAble=()=>{
        setIsAble(!isAble);
    }


    return(
        <>
            <div className="contenedorInfo">
                <div className="title-line"></div>
                <div className="nombreNegocioHeader">
                    <p>{elem.nombre}</p>
                    <img src={empresaIcon} width="50px" alt="" />
                </div>
                <div className="camposInfo">
                    <div className="info-header">
                        <p>Aqui puedes editar los datos principales de tu empresa</p>
                        <img src={informacionIcon} width="20px" height="auto" alt="" />
                    </div>
                    <span className="input-title">Nombre</span>
                    <input className="input" onChange={(event)=>setNombre(event.target.value)} value={nombre} disabled={isAble}/>
                    <span className="input-title">Denominación o razón social</span>
                    <input className="input" onChange={(event)=>setDenominacion(event.target.value)} value={denominacion} disabled={isAble}/>
                    <span className="input-title">Domicilio</span>
                    <input className="input" onChange={(event)=>setDomicilio(event.target.value)} value={domicilio} disabled={isAble}/>
                    <span className="input-title">Actividad principal</span>
                    <select className="input" value={actividadP}  disabled={isAble} onChange={(event)=>setActividadP(event.target.value)}>
                        <option value="Alimentos">Alimentos</option>
                        <option value="Comida">Comida</option>
                    </select>
                    <div className="editar">
                    <button className="editarButton" onClick={handleAble}>
                        {isAble==true&&<p>Editar</p>}
                        {isAble==false&&<p>Guardar</p>}
                    </button>
                </div>

                </div>
            </div>
        </>
    );
}

export default NegocioInfo;