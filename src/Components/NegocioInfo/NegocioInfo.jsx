import React from "react";
import './NegocioInfo.scss';

const NegocioInfo =()=>{
    return(
        <>
            <div className="contenedorInfo">
                <div className="nombreNegocio">
                    <h1>Negocio 1</h1>
                </div>
                <div className="camposInfo">
                    <span className="input">Denominación o razón social</span>
                    <input className="input" disabled="disabled"/>
                    <span>Domicilio</span>
                    <input className="input" disabled="disabled"/>
                    <span className="input">Actividad principal</span>
                    <select className="input" disabled="disabled">
                        <option>Actividad 1</option>
                        <option>Actividad 2</option>
                        <option>Actividad 3</option>
                    </select>
                </div>
                <div className="editar">
                    <button className="editarButton">Editar</button>
                </div>
            </div>
        </>
    );
}

export default NegocioInfo;