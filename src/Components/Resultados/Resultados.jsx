import React from "react";
import NavBar3 from "../../Common/NavBar3/NavBar3";
import "./Resultados.scss";
import Footer from "../../Common/Footer/Footer";
import Nivel from "./Nivel/Nivel";
import ListaCuestionarios from "./ListaCuestionarios/ListaCuestionarios";
import GraficasCategoria from "./GraficasCategoria/GraficasCategoria";
import GraficasDomino from "./GraficasDominio/GraficasDominio";
import { useState } from "react";
import Escala from "./Escala/Escala";

const Resultados=(props)=>{
    const{cues}=props;
    const[fecha, setFecha]=useState("");
    console.log(cues)

    const handleFecha=(estado)=>{
        setFecha(estado)
        console.log(fecha)
        getGrafica(fecha)
    }

    const getGrafica=(estado)=>{
        if(estado!==""){
            //busqueda avanzada
            
        }
    }
    
    return(
        <>
           {/*  <NavBar3/> */}
            <div className="container-resultados">
                <ListaCuestionarios cuest={cues} estadoFecha={fecha} fun={handleFecha}/>
                {cues!=null&&
                
                <>
              
                <Nivel cues={cues}/>
                <Escala/>
                <h1 className="res-title">Resultados por categoría</h1>
                <GraficasCategoria data={cues}/>
                <h1 className="res-title">Resultados por dominio</h1>
                <GraficasDomino data={cues}/>

                <div className="recomendaciones">
                    <h2>Recomendaciones</h2>
                    <ul>
                        <li>Análisis de cada categoría y dominio.</li>
                        <li>Crear un Programa de intervención con evaluaciones específicas y campañas de sensibilización.</li>
                        <li>Revisar la política de prevención de riesgos psicosociales.</li>
                        <li>Revisar, aplicar y difundir los programas para la prevención de los factores de riesgo psicosocial.</li>
                        <li>Promoción de un entorno organizacional favorable.</li>
                    </ul>
                </div>
                </>
                }
            </div>
           {/*  <Footer/> */}
        </>
    );
}

export default Resultados;