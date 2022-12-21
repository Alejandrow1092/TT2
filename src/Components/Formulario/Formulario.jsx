import React from "react";
import NavBar3 from "../../Common/NavBar3/NavBar3";
import './Formulario.scss';
import Footer from "../../Common/Footer/Footer";
import Pregunta from "./Pregunta/Pregunta";
const Formulario=()=>{
    return(
        <>  
            <NavBar3/>
            <div className="container-seccion">

            </div>
            <div className="container-formulario">
                <Pregunta/>
                <Pregunta/>
                <Pregunta/>
                <Pregunta/>
            </div>
            <Footer/>
        </>
    );
}

export default Formulario;