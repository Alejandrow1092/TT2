import React from "react";
import NavBar3 from "../../Common/NavBar3/NavBar3";
import ButtonX from "../../DesingComp/ButtonX/Buttonx";
import "./ProgramarForm.scss";
import clockVector from "../../asets/clockVector.png";

const ProgramarForm =()=>{
    return(
        <>
            <NavBar3/>
            <div className="container-instrucciones">
                <div>
                    <span>Recuerda que durante la aplicación del cuestionario se deberá:</span>
                    <ul className="listaOrdenada">
                        <li>Propiciar un ambiente de respeto y confianza;</li>
                        <li>Permitir una comunicación fluida entre los trabajadores y evaluador;</li>
                        <li>Aclarar dudas y brindar apoyo a los trabajadores que lo requieran;</li>
                        <li>Verificar que las indicaciones proporcionadas hayan quedado claras;</li>
                        <li>Evitar interrumpir a los trabajadores cuando realicen sus respuestas, y</li>
                        <li>Evitar conducir, persuadir o dirigir respuestas</li>
                    </ul>
                </div>
            </div>
            <div className="container-form-program">
                <div>
                    <div className="input-date">
                        <span>Fecha de apertura</span>
                        <input type="date"/>
                    </div>
                    <div className="input-date">
                        <span>Fecha de cierre</span>
                        <input type="date"/>
                    </div>
                    <div>
                        <ButtonX title="Iniciar Formulario"/>
                    </div>
                </div>
            </div>
            <div className="container-clock-img">
                <img src={clockVector} alt="tiempo"/>
            </div>
        </>
    );
}

export default ProgramarForm;