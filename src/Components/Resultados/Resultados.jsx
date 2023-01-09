import React from "react";
import NavBar3 from "../../Common/NavBar3/NavBar3";
import "./Resultados.scss";
import Footer from "../../Common/Footer/Footer";
import Nivel from "./Nivel/Nivel";
import ListaCuestionarios from "./ListaCuestionarios/ListaCuestionarios";
import GraficasCategoria from "./GraficasCategoria/GraficasCategoria";
import GraficasDomino from "./GraficasDominio/GraficasDominio";

const Resultados=()=>{
    return(
        <>
           {/*  <NavBar3/> */}
            <div className="container-resultados">
                <ListaCuestionarios/>
                <Nivel/>
                <h1 className="res-title">Resultados por categoría</h1>
                <GraficasCategoria/>
                <h1 className="res-title">Resultados por dominio</h1>
                <GraficasDomino/>
            </div>
           {/*  <Footer/> */}
        </>
    );
}

export default Resultados;