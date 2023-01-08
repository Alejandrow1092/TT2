import React from "react";
import NavBar3 from "../../Common/NavBar3/NavBar3";
import ButtonX from "../../DesingComp/ButtonX/Buttonx";
import "./SetForm.scss";
import clockVector from "../../asets/clockVector.png";
import startIcon from "../../asets/start.png"
import finishIcon from "../../asets/finish.png"
import informacionIcon from "../../asets/informacion.png"
import Footer from "../../Common/Footer/Footer"
import PDFView from "../../Common/PDFView/PDFView";

const SetForm =()=>{
    return(
        <>
            <NavBar3/>
            
            <div className="title-set-formulario">
                <div className="title-line"></div>
                <p>Programar formulario</p>
            </div>
            
            <div className="set-form-alert">
                <p>Selecciona una fecha de incio y una de cierre para el formulario, despues preciona comenzar</p>
                <img src={informacionIcon} width="20px" alt="" />
            </div>

            <div className="programar-formulario">
                
                <div className="container-instrucciones">
                   {/*  <div className="instrucciones"> */}
                        <span>Recuerda que durante la aplicación del cuestionario se deberá:</span>
                        <ol className="listaOrdenada">
                            <li>Propiciar un ambiente de respeto y confianza;</li>
                            <li>Permitir una comunicación fluida entre los trabajadores y evaluador;</li>
                            <li>Aclarar dudas y brindar apoyo a los trabajadores que lo requieran;</li>
                            <li>Verificar que las indicaciones proporcionadas hayan quedado claras;</li>
                            <li>Evitar interrumpir a los trabajadores cuando realicen sus respuestas, y</li>
                            <li>Evitar conducir, persuadir o dirigir respuestas</li>
                        </ol>
                   {/*  </div> */}
                </div>
                <div className="container-form-program">
                    <div>
                        <div className="input-date">
                            <span>
                                <p> Fecha de apertura</p>
                                <img src={startIcon} width="25px" alt="" />
                            </span>
                            <input type="date"/>
                        </div>
                        <div className="input-date">
                            <span>
                                <p> Fecha de cierre</p>
                                <img src={finishIcon} width="25px" alt="" />
                            </span>
                            <input type="date"/>
                        </div>
                        <div>
                            <div className="container-clock-img">
                                <img src={clockVector} alt="tiempo"/>
                             </div>
                            <ButtonX title="Iniciar Formulario"/>
                            <ButtonX title="Ver formulario"/>
                        </div>
                    </div>
                </div>
                
            </div>
            <div>
                <PDFView/>
            </div>
            <Footer/>
        </>
    );
}

export default SetForm;