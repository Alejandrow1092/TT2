import React from "react";
import GraficaTexto from "../GraficaTexto/GraficaTexto";
import "./GraficasCategoria.scss";

const GraficasCategoria=()=>{
    return(
        <>
            <div className="container-grafica-categoria">
                <div className="grafica-categoria">
                    <GraficaTexto/>
                </div>
                <div className="grafica-categoria">
                    <GraficaTexto/>
                </div>
                <div className="grafica-categoria">
                    <GraficaTexto/>
                </div>
                <div className="grafica-categoria">
                    <GraficaTexto/>
                </div>
            </div>
        </>
    );
}

export default GraficasCategoria;