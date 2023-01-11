import React from "react";
import GraficaTexto from "../GraficaTexto/GraficaTexto";
import "./GraficasDominio.scss";

const GraficasDominio=(props)=>{
    const{data}=props;
    console.log(data[0].condicionesAmb)

    return(
        <>
            <div className="container-grafica-dominio">
                <div className="grafica-dominio">
                    <GraficaTexto titulo="Condiciones ambientales" number={(data[0].condicionesAmb/28)}/>
                </div>
                <div className="grafica-dominio">
                    <GraficaTexto titulo="Cantidad y ritmo de trabajo" number={(data[0].cantidadTra)/12}/>
                </div>
                <div className="grafica-dominio">
                    <GraficaTexto titulo="Esfuerzo mental" number={(data[0].esfuerzoMen)/8}/>
                </div>
                <div className="grafica-dominio">
                    <GraficaTexto titulo="Actividades y responsabilidades" number={(data[0].actividadesRes)/8}/>
                </div>
                <div className="grafica-dominio">
                    <GraficaTexto titulo="Toma de decisiones" number={(data[0].decisiones)/20}/>
                </div>
                <div className="grafica-dominio">
                    <GraficaTexto titulo="Jornada laboral" number={(data[0].jornada)/20}/>
                </div>
                <div className="grafica-dominio">
                    <GraficaTexto titulo="Cambios en el trabajo" number={(data[0].cambios)/8}/>
                </div>
                <div className="grafica-dominio">
                    <GraficaTexto titulo="Capacitación e información proporcionada" number={(data[0].capacitacion)/20}/>
                </div>
                <div className="grafica-dominio">
                    <GraficaTexto titulo="Contacto con directivos" number={(data[0].contacto)/24}/>
                </div>
                <div className="grafica-dominio">
                    <GraficaTexto titulo="Relación con compañeros" number={(data[0].relaciones)/20}/>
                </div>
                <div className="grafica-dominio">
                    <GraficaTexto titulo="Reconocimiento al desempeño" number={(data[0].reconocimiento)/28}/>
                </div>
                <div className="grafica-dominio">
                    <GraficaTexto titulo="Violencia laboral" number={(data[0].violencia)/44}/>
                </div>
            </div>
        </>
    );
}

export default GraficasDominio;