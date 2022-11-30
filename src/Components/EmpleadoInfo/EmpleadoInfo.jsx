import React from "react";
import './EmpleadoInfo.scss';

const EmpleadoInfo =()=>{
    return(
        <>
            <div className="contenedorInfo">
                <div className="nombreEmpleado">
                    <h1>Empleado 1</h1>
                </div>
                <div className="camposInfo">
                    <span className="input">Fecha de nacimiento</span>
                    <input className="input" disabled="disabled"/>
                    <span>Domicilio</span>
                    <input className="input" disabled="disabled"/>
                    <span className="input">Número de celular</span>
                    <input className="input" disabled="disabled"/>
                    <span className="input">Número de casa</span>
                    <input className="input" disabled="disabled"/>
                    <span className="input">Correo eléctronico</span>
                    <input className="input" type="email" disabled="disabled"/>
                    <span className="input">Area de trabajo</span>
                    <select className="input" disabled="disabled">
                        <option>Area 1</option>
                        <option>Area 2</option>
                        <option>Area 3</option>
                    </select>
                    <span className="input">Actividad principal</span>
                    <input className="input" disabled="disabled"/>
                </div>
                <div className="editar">
                    <button className="editarButton">Editar</button>
                </div>
            </div>
        </>
    );
}

export default EmpleadoInfo;