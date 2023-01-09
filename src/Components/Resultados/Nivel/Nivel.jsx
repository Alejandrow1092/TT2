import React from "react";
import "./Nivel.scss";

const Nivel=()=>{
    //En asets, hay un json llamado "niveles" que contiene los textos de cada nivel y sus colores

    return(
        <>
            <div className="nivel">
                <div className="container-nivel">
                    <div className="header-nivel">
                        <h1>Muy Alto</h1>
                    </div>
                    <div className="body-nivel" style={{backgroundColor: "#FF0000", color: "#FFFFFF"}}>
                        <p>Se requiere realizar el análisis de cada categoría y dominio para establecer las acciones de intervención apropiadas, mediante un Programa de intervención que deberá incluir evaluaciones específicas, y contemplar campañas de sensibilización, revisar la política de prevención de riesgos psicosociales y programas para la prevención de los factores de riesgo psicosocial, la promoción de un entorno organizacional favorable y la prevención de la violencia laboral, así como reforzar su aplicación y difusión.</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Nivel;