import React from "react";
import './VistaNegocioGestor.scss';
import NegocioInfo from "../NegocioInfo/NegocioInfo";
import ListScroll from "../ListScroll/ListScroll";
import EmpleadoInfo from "../EmpleadoInfo/EmpleadoInfo"
import ItemArea from "../NegocioInfo/ItemArea";

const VistaNegocioGestor =()=>{
    return(
        <>
            <div className="container-empleado">
                <div className="infoNegocio-empleado">
                    <NegocioInfo/>
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
                    </div>
                </div>
                <div className="inputArea">
                    <span>Nombre del area</span>
                    <input></input>
                    <button>Agregar</button>
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