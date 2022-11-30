import React from "react";
import './VistaNegocioGestor.scss';
import NegocioInfo from "../NegocioInfo/NegocioInfo";
import ListScroll from "../ListScroll/ListScroll";
import EmpleadoInfo from "../EmpleadoInfo/EmpleadoInfo"

const VistaNegocioGestor =()=>{
    return(
        <>
            <div className="container-empleado">
                <div className="infoNegocio-empleado">
                    <NegocioInfo/>
                </div>
                <div className="infoEmpleado">
                    <div className="left-grid-empleado">
                        <div className="gestores">
                            <h1>Empleados</h1>
                        </div>
                        <ListScroll></ListScroll>
                        <div>
                            <button>Agregar empleado</button>
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