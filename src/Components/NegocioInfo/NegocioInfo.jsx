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
                    <p>Negocio 1</p>
                </div>
                <div className="camposInfo">
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