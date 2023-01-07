import React from "react";
import './NavBar3.scss';
import profile_img from '../../asets/profile-user.png';
import { Link, Navigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import exit_img from '../../asets/exit.png';
import chatIcon from "../../asets/chat.png"


const NavBar3=()=>{
    const [active, setActive]= useState(false);
    const [logged, setLogged] = useState(true);

    const user=useSelector((state)=>state.appTT.userType);

    const handleUserMenu=()=>{
        setActive(!active);
        console.log(active);
    }

    const onLogout=()=>{
        localStorage.setItem('auth', 'false');
        setLogged(false);
    }

    const onOption=(option)=>{
        console.log(option);
    }   

    return(
        <nav className="navigation">
            <div className="nav-bar">
                    <div className="icon">
                        <a><Link to="/Dashboard">NOMX</Link></a>
                    </div>
                    <ul>
                        <Link to="/Dashboard"><li>Inicio</li></Link>
                        {user!=="Empleado"&&
                        <Link to="/Negocios"><li>Negocios</li></Link>
                        }
                       {/*  <li>Sistema</li> */}
                     
                        {user==="Empleado"&&
                        <Link to='/Formulario' className="link"><li>Formulario</li></Link>
                        }
                        {user==="Gestor" &&
                        <Link to='/SetForm' className="link"><li>Formulario</li></Link>
                        }
                        {user!=="Admin" &&
                        <Link to='/Resultados' className="link"><li>Resultados</li></Link>
                        }
                        {user!=="Admin" &&
                        <Link to="/Servicios"><li>Servicios</li></Link>
                        }
                        <Link to='/Configuracion' className="link"><li>Configuracion</li></Link>
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
                            {user=="Gestor"&&
                                <Link to="/Buzon">
                                <li >
                                    <img src={chatIcon} alt="" />
                                    <p>Buzon de quejas</p>
                                    <p id="notificacion">2</p>
                                </li>
                                </Link>
                            }

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



