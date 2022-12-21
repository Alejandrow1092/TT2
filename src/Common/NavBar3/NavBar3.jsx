import React from "react";
import './NavBar3.scss';
import profile_img from '../../asets/profile-user.png';
import { Link, Navigate } from "react-router-dom";
import exit_img from '../../asets/exit.png';
import { useState } from "react";

const NavBar3=()=>{
    const [active, setActive]= useState(false);
    const [logged, setLogged] = useState(true);

    const handleUserMenu=()=>{
        setActive(!active);
        console.log(active);
    }

    const onLogout=()=>{
        localStorage.setItem('auth', 'false');
        setLogged(false);
    }


    return(
        <nav className="navigation">
            <div className="nav-bar">
                    <div className="icon">
                        <a><Link to="/Dashboard">NOMX</Link></a>
                    </div>
                    <ul>
                        <Link to="/Dashboard"><li>Inicio</li></Link>
                        <Link to="/Negocios"><li>Negocios</li></Link>
                        <li>Sistema</li>
                        <Link to='/Configuracion' className="link"><li>Configuracion</li></Link>
                        <Link to='/ProgramarForm' className="link"><li>Formulario</li></Link>
                    </ul>
            </div>
           
            
            <div className="btns">
                
                <div>
                    <button className="user-btn" onClick={handleUserMenu}>
                        <p>Alejandro M</p>
                        <img src={profile_img} alt="icon" />
                    </button>
                    <div className={active?"user-options": "user-options-no"}>
                        <ul>
                            <li onClick={onLogout}>
                                <img src={exit_img} alt="exit"/>
                                <p>Logout</p>
                            </li>
                            {!logged && <Navigate to="/login"/>}
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default NavBar3;



