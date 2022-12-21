import React from "react";
import NavBar3 from "../../Common/NavBar3/NavBar3";
import './EmpleadoInfo.scss';

const EmpleadoInfo =()=>{
    return(
        <>
           
            <div className="contenedorInfo">
                <div className="nombreEmpleado">
                    <h1>Empleado 1</h1>
                </div>
                <div className="camposInfo">
                    <span className="input-title"  >Fecha de nacimiento</span>
                    <input className="input" value="10-10-2000" disabled="disabled"/>
                    <span className="input-title">Domicilio</span>
                    <input className="input" disabled="disabled" value="Calle primera cerrada, Polanco, CDMX, MExico"/>
                    <span className="input-title">Número de celular</span>
                    <input className="input" value="45665456987" disabled="disabled"/>
                    <span className="input-title">Número de casa</span>
                    <input className="input" value="45662424987" disabled="disabled"/>
                    <span className="input-title">Correo eléctronico</span>
                    <input className="input" type="email" disabled="disabled" value="luis@hotmail.com"/>
                    <span className="input-title">Area de trabajo</span>
                    <select className="input" disabled="disabled">
                        <option>Area 1</option>
                        <option>Area 2</option>
                        <option>Area 3</option>
                    </select>
                    <span className="input-title">Actividad principal</span>
                    <input className="input" value="ingeniero" disabled="disabled"/>
                </div>
                <div className="editar">
                    <button className="editarButton">Editar</button>
                </div>
            </div>
        </>
    );
}

export default EmpleadoInfo;