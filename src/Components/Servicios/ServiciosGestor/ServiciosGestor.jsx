import React from "react";
import './ServiciosGestor.scss';
import medicineIcon from "../../../asets/informe-medico.png";

const ServiciosGestor=()=>{
    return(
        <>
            <div className="servicios-gestor">
                <div className="menu-servicios">
                    <button>
                        <p>Solicitudes medicas</p>
                        <img src={medicineIcon} width="30px" alt="" />
                    </button>
                </div>
                <div className="panel-servicios">

                </div>

            </div>
        </>
    );
}

export default ServiciosGestor;