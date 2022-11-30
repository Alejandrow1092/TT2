import React from "react";
import './ButtonInicioGestor.scss';

const ButtonInicioGestor =()=>{
    return(
        <>
            <div className="title">
                <h1 name="blueTitle">Cuida a tu equipo</h1>
                <h1>Cuida a tu empresa</h1>
            </div>
            <div className="buttons">
                <button>Revisar cuestionario</button>
                <button>¿Cómo está mi equipo?</button>
            </div>
        </>
    );
}

export default ButtonInicioGestor;