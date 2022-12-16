import React from "react";
import './NegocioInfo.scss';
import { useState } from "react";

const NegocioInfo =()=>{
    const [denominacion, setDenominacion]=useState("Sociedad Cooperativa");
    const [domicilio, setDomicilio]=useState("Oroya 713, Lindavista, Gustavo A. Madero, Ciudad de México")
    const [actividadP, setActividadP]=useState("Comida");
    const [isAble, setIsAble]=useState(true);

    const handleAble=()=>{
        setIsAble(!isAble);
    }

    return(
        <>
            <div className="contenedorInfo">
                <div className="title-line"></div>
                <div className="nombreNegocio">
                    <h1>Negocio 1</h1>
                </div>
                <div className="camposInfo">
                    <span className="input">Denominación o razón social</span>
                    <input className="input" onChange={(event)=>setDenominacion(event.target.value)} value={denominacion} disabled={isAble}/>
                    <span>Domicilio</span>
                    <input className="input" onChange={(event)=>setDomicilio(event.target.value)} value={domicilio} disabled={isAble}/>
                    <span className="input">Actividad principal</span>
                    <select className="input" value={actividadP}  disabled={isAble} onChange={(event)=>setActividadP(event.target.value)}>
                        <option value="Alimentos">Alimentos</option>
                        <option value="Comida">Comida</option>
                    </select>
                </div>
                <div className="editar">
                    <button className="editarButton" onClick={handleAble}>
                        {isAble==true&&<p>Editar</p>}
                        {isAble==false&&<p>Guardar</p>}
                    </button>
                </div>
            </div>
        </>
    );
}

export default NegocioInfo;