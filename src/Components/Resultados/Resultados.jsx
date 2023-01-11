import React from "react";
import NavBar3 from "../../Common/NavBar3/NavBar3";
import "./Resultados.scss";
import Footer from "../../Common/Footer/Footer";
import Nivel from "./Nivel/Nivel";
import ListaCuestionarios from "./ListaCuestionarios/ListaCuestionarios";
import GraficasCategoria from "./GraficasCategoria/GraficasCategoria";
import GraficasDomino from "./GraficasDominio/GraficasDominio";
import { useState } from "react";

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
                <h1 className="res-title">Resultados por categoría</h1>
                <GraficasCategoria data={cues}/>
                <h1 className="res-title">Resultados por dominio</h1>
                <GraficasDomino data={cues}/>
                </>
                }
            </div>
           {/*  <Footer/> */}
        </>
    );
}

export default Resultados;