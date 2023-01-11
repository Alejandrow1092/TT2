import React, { useState } from "react";
import NavBar3 from "../../Common/NavBar3/NavBar3";
import './Formulario.scss';
import Footer from "../../Common/Footer/Footer";
import Pregunta from "./Pregunta/Pregunta";
import formularioIcon from "../../asets/formulario.png"
import resultadosIcon from "../../asets/resultados.png"
import ListaCuestionarios from "../Resultados/ListaCuestionarios/ListaCuestionarios";
import formjson from "../../asets/cuestionario/preguntas.json";
import { useSelector } from "react-redux";

const Formulario=()=>{

    const[menuOpcion, setMenuOpcion]=useState("formulario");
    const {cat1, cat2, cat3, cat4}=formjson;
    
    

    return(
        <>  
            <NavBar3/>
            <div className="formulario-main">
                <div className="menu-formulario">
                    <button  onClick={()=>setMenuOpcion("formulario")}>
                        <p>Formulario</p>
                        <img src={formularioIcon} width="50px" alt="" />
                    </button>
                    <button  onClick={()=>setMenuOpcion("resultados")}>
                        <p>Resultados</p>
                        <img src={resultadosIcon} width="50px" alt="" />
                    </button>
                </div>
                <div className="main-panel">
                    {menuOpcion=="formulario"&&
                    <>
                        <div className="container-seccion">
                            <span>Para responder las preguntas siguientes considere las condiciones ambientales de su centro de trabajo durante este semestre.</span>
                        </div>
                        <div className="container-formulario">
                            {cat1.dominios.map((dom,i)=>{
                                return(
                                    <>
                                       {/*  <p>{dom.nombre}</p>   */} 
                                       <h1>{dom.nombre}</h1>
                                       <h3>{dom.indicacion}</h3>
                                        {dom.preguntas.map((pregunta, i)=>{
                                            return(
                                                <Pregunta texto={pregunta}/>
                                            )
                                        })
                                        }
                                    </>
                                );
                            })
                            }
                            {
                               cat2.dominios.map((dom,i)=>{
                                return(
                                    <>
                                       {/*  <p>{dom.nombre}</p>   */} 
                                       <h1>{dom.nombre}</h1>
                                       <h3>{dom.indicacion}</h3>
                                        {dom.preguntas.map((pregunta, i)=>{
                                            return(
                                                <Pregunta texto={pregunta}/>
                                            )
                                        })
                                        }
                                    </>
                                );
                            }) 
                               
                            }
                            {
                               cat3.dominios.map((dom,i)=>{
                                return(
                                    <>
                                       {/*  <p>{dom.nombre}</p>   */} 
                                       <h1>{dom.nombre}</h1>
                                       <h3>{dom.indicacion}</h3>
                                        {dom.preguntas.map((pregunta, i)=>{
                                            return(
                                                <Pregunta texto={pregunta}/>
                                            )
                                        })
                                        }
                                    </>
                                );
                            }) 
                               
                            }
                            {
                               cat4.dominios.map((dom,i)=>{
                                return(
                                    <>
                                       {/*  <p>{dom.nombre}</p>   */} 
                                       <h1>{dom.nombre}</h1>
                                       <h3>{dom.indicacion}</h3>
                                        {dom.preguntas.map((pregunta, i)=>{
                                            return(
                                                <Pregunta texto={pregunta}/>
                                            )
                                        })
                                        }
                                    </>
                                );
                            }) 
                               
                            }
                            
                        </div>
                        </>
                    }
                    {menuOpcion==="resultados"&&
                    <>
                        <div>
                            <p>Visualiza tus resultados</p>
                        </div>
                        <div>
                            <ListaCuestionarios/>
                        </div>
                    </>
                    }
                    
                </div>
               
            </div>
            
            <Footer/>
        </>
    );
}

export default Formulario;