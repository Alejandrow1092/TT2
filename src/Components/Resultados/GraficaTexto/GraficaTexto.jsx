import React from "react";
import GaugeChart from "react-gauge-chart";
import Gaugecomponent from "../../../Common/Charts/Gaugecomponent";
import "./GraficaTexto.scss";

const GraficaTexto=(props)=>{
    const{titulo, number}=props
    return(
        <>
            <div className="container-chart-text">
                <Gaugecomponent num={number}/>
                <span id="titulo">{titulo}</span>
            </div>
        </>
    );
}

export default GraficaTexto;