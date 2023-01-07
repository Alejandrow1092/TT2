import React from "react";
import './VistaNegocioGestor.scss';
import NegocioInfo from "../../NegocioInfo/NegocioInfo";
import ListScroll from "../../../Common/ListScroll/ListScroll";
import EmpleadoInfo from "../../EmpleadoInfo/EmpleadoInfo"
import ItemArea from "../../../Common/ItemArea/ItemArea";
import ButtonX from "../../../DesingComp/ButtonX/Buttonx"

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
                        <ItemArea plus="true"/>
                    </div>
                </div>
                {/* <div className="inputArea">
                    <span>Nombre del area</span>
                    <input></input>
                    <button>Agregar</button>
                </div> */}
                <div className="infoEmpleado">
                    <div className="left-grid-empleado">
                        <div className="gestores">
                            <p>Empleados</p>
                            <ListScroll nombre="Luis Fernando"/>
                        </div>
                        <div>
                            <ButtonX title="Agregar empleado"/>
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