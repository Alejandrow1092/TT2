import React from "react";
import GraficaTexto from "../GraficaTexto/GraficaTexto";
import "./GraficasCategoria.scss";

const GraficasCategoria=(props)=>{
    const{data}=props;

    return(
        <>
            <div className="container-grafica-categoria">
                <div className="grafica-categoria">
                    <GraficaTexto titulo="Ambiente de trabajo" number={(data[0].ambiente)/28}/>
                </div>
                <div className="grafica-categoria">
                    <GraficaTexto titulo="Factores propios de la actividad" number={(data[0].factores)/48}/>
                </div>
                <div className="grafica-categoria">
                    <GraficaTexto titulo="Organización del tiempo de trabajo" number={(data[0].organizacion)/20}/>
                </div>
                <div className="grafica-categoria">
                    <GraficaTexto titulo="Liderazgo y relaciones en el trabajo" number={(data[0].liderazgo)/144}/>
                </div>
            </div>
        </>
    );
}

export default GraficasCategoria;