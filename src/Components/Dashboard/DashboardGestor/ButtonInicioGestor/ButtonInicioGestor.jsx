import React from "react";
import ButtonX from "../../../../DesingComp/ButtonX/Buttonx";
import './ButtonInicioGestor.scss';

const ButtonInicioGestor =()=>{
    return(
        <>
            <div className="title">
                <h1 name="blueTitle">Cuida a tu equipo</h1>
                <h1>Cuida a tu empresa</h1>
            </div>
            <div className="button2">
                <button>Revisar cuestionario</button>
                <button>¿Cómo está mi equipo?</button>
              {/*   <ButtonX title="Revisar cuestionario"/>
                <ButtonX title="¿Como está mi equipo de trabajo?"/> */}
            </div>
        </>
    );
}

export default ButtonInicioGestor;