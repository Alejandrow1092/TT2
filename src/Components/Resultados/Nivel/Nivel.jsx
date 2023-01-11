import React from "react";
import "./Nivel.scss";

const Nivel=(props)=>{
    const{cues}=props;
    //En asets, hay un json llamado "niveles" que contiene los textos de cada nivel y sus colores
    const valorNivel=cues[0].resultadoFinal;
    console.log(valorNivel)
    return(
        <>
            <div className="nivel">
                {valorNivel<26&&
                        <div className="container-nivel">
                        <div className="header-nivel">
                            <h1>Nivel de Riesgo: Nulo</h1>
                        </div>
                        <div className="body-nivel" style={{backgroundColor: "#9BE5F7"}}>
                            <p>El riesgo resulta despreciable por lo que no se requiere medidas adicionales.</p>
                        </div>
                        </div>
                }
                 {valorNivel>=25&&valorNivel<58&&
                    <div className="container-nivel">
                    <div className="header-nivel">
                        <h1>Nivel de Riesgo: Bajo</h1>
                    </div>
                    <div className="body-nivel" style={{backgroundColor: "#6BF56E"}}>
                        <p>Es necesario una mayor difusión de la política de prevención de riesgos psicosociales y programas para: la prevención de los factores de riesgo psicosocial, la promoción de un entorno organizacional favorable y la prevención de la violencia laboral.</p>
                    </div>
                    </div>
                }
                {valorNivel>=58&&valorNivel<91&&
                    <div className="container-nivel">
                    <div className="header-nivel">
                        <h1>Nivel de Riesgo: Medio</h1>
                    </div>
                    <div className="body-nivel" style={{backgroundColor: "#FFFF00"}}>
                        <p>Se requiere revisar la política de prevención de riesgos psicosociales y programas para la prevención de los factores de riesgo psicosocial, la promoción de un entorno organizacional favorable y la prevención de la violencia laboral, así como reforzar su aplicación y difusión, mediante un Programa de intervención.</p>
                    </div>
                    </div>
                }
                {valorNivel>=91&&valorNivel<117&&

                    <div className="container-nivel">
                    <div className="header-nivel">
                        <h1>Nivel de Riesgo: Alto</h1>
                    </div>
                    <div className="body-nivel" style={{backgroundColor: "#FFC000"}}>
                        <p>Se requiere realizar un análisis de cada categoría y dominio, de manera que se puedan determinar las acciones de intervención apropiadas a través de un Programa de intervención, que podrá incluir una evaluación específica y deberá incluir una campaña de sensibilización, revisar la política de prevención de riesgos y programas para la prevención de los factores de riesgo psicosocial, la promoción de un entorno organizacional favorable y la prevención de la violencia laboral, así como reforzar su aplicación y difusión.</p>
                    </div>
                    </div>
                }
                {valorNivel>=117&&
                    <div className="container-nivel">
                    <div className="header-nivel">
                        <h1>Nivel de Riesgo: Muy Alto</h1>
                    </div>
                    <div className="body-nivel" style={{backgroundColor: "#FF0000", color: "#FFFFFF"}}>
                        <p>Se requiere realizar el análisis de cada categoría y dominio para establecer las acciones de intervención apropiadas, mediante un Programa de intervención que deberá incluir evaluaciones específicas, y contemplar campañas de sensibilización, revisar la política de prevención de riesgos psicosociales y programas para la prevención de los factores de riesgo psicosocial, la promoción de un entorno organizacional favorable y la prevención de la violencia laboral, así como reforzar su aplicación y difusión.</p>
                    </div>
                </div>
                }
                
            </div>
        </>
    );
}

export default Nivel;