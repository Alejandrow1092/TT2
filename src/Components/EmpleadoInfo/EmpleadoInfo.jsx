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
                    <span className="input"  >Fecha de nacimiento</span>
                    <input className="input" value="10-10-2000" disabled="disabled"/>
                    <span>Domicilio</span>
                    <input className="input" disabled="disabled" value="Calle primera cerrada, Polanco, CDMX, MExico"/>
                    <span className="input">Número de celular</span>
                    <input className="input" value="45665456987" disabled="disabled"/>
                    <span className="input">Número de casa</span>
                    <input className="input" value="45662424987" disabled="disabled"/>
                    <span className="input">Correo eléctronico</span>
                    <input className="input" type="email" disabled="disabled" value="luis@hotmail.com"/>
                    <span className="input">Area de trabajo</span>
                    <select className="input" disabled="disabled">
                        <option>Area 1</option>
                        <option>Area 2</option>
                        <option>Area 3</option>
                    </select>
                    <span className="input">Actividad principal</span>
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