import React from "react";
import './Pregunta.scss';

const Pregunta=(props)=>{
    const{texto}=props;

    return(
        <>
            <div className="container-color-pregunta">
               {/*  <div className="container-color"></div> */}
                <div className="container-pregunta">
                    <span className="pregunta">{texto}</span>
                    <div className="opcion">
                        <input type="radio" name="preguntax"/>
                        <span>Siempre</span>
                    </div>
                    <div className="opcion">
                        <input type="radio" name="preguntax"/>
                        <span>Casi siempre</span>
                    </div>
                    <div className="opcion">
                        <input type="radio" name="preguntax"/>
                        <span>Algunas veces</span>
                    </div>
                    <div className="opcion">
                        <input type="radio" name="preguntax"/>
                        <span>Casi nunca</span>
                    </div>
                    <div className="opcion">
                        <input type="radio" name="preguntax"/>
                        <span>Nunca</span>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Pregunta;