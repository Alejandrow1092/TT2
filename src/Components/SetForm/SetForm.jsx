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
import Gaugecomponent from "../../Common/Charts/Gaugecomponent";
import Nivel from "../Resultados/Nivel/Nivel";
import Resultados from "../Resultados/Resultados";
import { useState } from "react";
import formularioIcon from "../../asets/formulario.png"
import resultadosIcon from "../../asets/resultados.png"

const SetForm =()=>{
    const[menuOpcion, setMenuOpcion]=useState("formulario");
    const[showModal, setShowModal]=useState(false);

    const handleModal=(state)=>{
        if(state){
            setShowModal(false);
        }
        else{
            setShowModal(true);
        }
        console.log(showModal)
    }

    return(
        <>
            <NavBar3/>
                <div className="form-panel">
                    <div className="menu-formulario">
                        <button onClick={()=>setMenuOpcion("formulario")}>
                            <p>Formulario</p>
                            <img src={formularioIcon} width="30px" alt="" />
                        </button>
                        <button onClick={()=>setMenuOpcion("resultados")}>
                            <p>Resultados</p>
                            <img src={resultadosIcon} width="30px" alt="" />
                        </button>
                    </div>
                </div>
                <div className="panel-central-form">
                    {menuOpcion==="resultados"&&
                        <Resultados />
                    }
                    {menuOpcion==="formulario"&&
                        <>
                                {showModal&&
                                    <PDFView state={showModal} fun={handleModal}/>
                                }
                                <div className="title-set-formulario">
                                    <div className="title-line"></div>
                                    <p>Programar formulario</p>
                                </div>
                                
                                <div className="set-form-alert">
                                    <p>Selecciona una fecha de incio y una de cierre para el formulario, despues presiona comenzar</p>
                                    <img src={informacionIcon} width="20px" alt="" />
                                </div>

                                <div className="programar-formulario">
                                    
                                    <div className="container-instrucciones">
                                        <span>Recuerda que durante la aplicación del cuestionario se deberá:</span>
                                        <ol className="listaOrdenada">
                                            <li>Propiciar un ambiente de respeto y confianza;</li>
                                            <li>Permitir una comunicación fluida entre los trabajadores y evaluador;</li>
                                            <li>Aclarar dudas y brindar apoyo a los trabajadores que lo requieran;</li>
                                            <li>Verificar que las indicaciones proporcionadas hayan quedado claras;</li>
                                            <li>Evitar interrumpir a los trabajadores cuando realicen sus respuestas, y</li>
                                            <li>Evitar conducir, persuadir o dirigir respuestas</li>
                                        </ol>
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
                                                <ButtonX title="Ver formulario" fun={handleModal} state={showModal}/>
                                            </div>
                                        </div>
                                    </div>
                                    
                                </div>
                        </>
                    }
                </div>
                

            <Footer/>
            {/*<NavBar3/>
            
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
                    <span>Recuerda que durante la aplicación del cuestionario se deberá:</span>
                    <ol className="listaOrdenada">
                        <li>Propiciar un ambiente de respeto y confianza;</li>
                        <li>Permitir una comunicación fluida entre los trabajadores y evaluador;</li>
                        <li>Aclarar dudas y brindar apoyo a los trabajadores que lo requieran;</li>
                        <li>Verificar que las indicaciones proporcionadas hayan quedado claras;</li>
                        <li>Evitar interrumpir a los trabajadores cuando realicen sus respuestas, y</li>
                        <li>Evitar conducir, persuadir o dirigir respuestas</li>
                    </ol>
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
            <Footer/>*/}
           
            
        </>
    );
}

export default SetForm;