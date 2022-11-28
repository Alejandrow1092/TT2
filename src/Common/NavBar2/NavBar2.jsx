import React from "react";
import './NavBar2.scss'

const NavBar2 = ()=>{
    return(
        <nav className="navigation1">
            <ul>
                <li>Inicio</li>
                <li>Articulos</li>
                <li>Contacto</li>
                <li id="test">Comenzar test</li>
                <li>Bienvendio Sergio</li>
            </ul>
        </nav>
    );
}

export default NavBar2;