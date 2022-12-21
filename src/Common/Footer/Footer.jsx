import React from "react";
import "./Footer.scss";

const Footer=()=>{
    return(
        <>
            <footer>
                <div className="footer-sec1">
                    <p id="desc">
                        TT2020-B093 es un sistema web desarrollado apartir de la NOM 035 
                        utilizada como opción curricular de titulación. Este sistema fue 
                        desarrollado dentro de la Escuela Superior de Cómputo y es propiedad 
                        de el Instituto Politécnico Nacional y de sus estudiantes
                    </p>
                    
                    <p id="derechos">
                        © 2022 Instituto Politécnico Nacional
                    </p>
                </div>  

                <div className="footer-list">

                    <ul>
                        <li className="list-header">Explora</li>
                        <li>Articulos</li>
                        <li>Videos</li>
                        <li>Testimonios</li>
                    </ul>

                    <ul>
                        <li className="list-header">¿Dudas?</li>
                        <li>Contactanos</li>
                    </ul>

                </div>
            </footer>
        </>
    )
}


export default Footer;