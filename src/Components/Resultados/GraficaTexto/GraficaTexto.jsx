import React from "react";
import GaugeChart from "react-gauge-chart";
import Gaugecomponent from "../../../Common/Charts/Gaugecomponent";
import "./GraficaTexto.scss";

const GraficaTexto=()=>{
    return(
        <>
            <div className="container-chart-text">
                <Gaugecomponent/>
                <span id="titulo">Categoría</span>
            </div>
        </>
    );
}

export default GraficaTexto;