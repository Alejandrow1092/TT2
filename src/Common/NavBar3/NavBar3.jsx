import React from "react";
import './NavBar3.scss';
import profile_img from '../../asets/profile-user.png'

const NavBar3=()=>{
    return(
        <nav className="navigation">
            <div className="icon">
                <a id="" href="">NavBar X</a>
            </div>
            
            <div className="btns">
                <div className="nav-bar">
                    <ul>
                        <li>Inicio</li>
                        <li>Negocios</li>
                        <li>Sistema</li>
                        <li>Configuracion</li>
                    </ul>
                </div>
                <div>
                    <button className="user-btn">
                        <p>Alejandro M</p>
                        <img src={profile_img} alt="icon" />
                    </button>
                </div>
            </div>
        </nav>
    );
}

export default NavBar3;