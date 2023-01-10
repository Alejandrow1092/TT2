import React from "react";
import './Configuracion.scss';
import NavBar3 from "../../Common/NavBar3/NavBar3";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Footer from "../../Common/Footer/Footer"
import { setUserData } from "../../rootReducer";

const Configuracion=()=>{
    const dispatch=useDispatch();
    const{nombre, correo, numeroCasa, numeroTel}=useSelector(state=>state.appTT.userData)

    const [nombre1, setNombre]=useState(nombre);
    const [celular, setCelular]=useState(numeroTel);
    const [celCasa, setCelCasa]=useState(numeroCasa);
    const [correo1, setCorreo]=useState(correo);
    const [pass, setPass]=useState("1234");
    const [isAble, setIsAble]=useState(true);

    const handleAble=()=>{
        setIsAble(!isAble);
    }

    const user=useSelector((state)=>state.appTT.userType);
    console.log(user);
    return(
        <>
            <NavBar3/>
            <div className="confi">
                <div className="perfil">
                    {user==="Admin"&&<p id="admin">Administrador</p>}
                    {user==="Gestor"&&<p id="admin">Gestor</p>}
                    {user==="Empleado" && <p id="admin">Empleado</p>}
                    <figure>
                        <img src="https://picsum.photos/200" alt="perfil" />
                    </figure>

                    <p id="name">{nombre}</p>

                    <button className="edit-btn">
                        <p>Editar perfil</p>
                    </button>
                </div>
                <div className="form">
                    <div className="main-form">
                        <div className="title-line"></div>
                        <p id="title1">Configuración</p>
                        <p id="title2">Información de la cuenta</p>
                        
                        <div className="form-fields">
                            <label for="nombre">Nombre: </label> <br />
                            <input type="text" id="nombre" onChange={(event)=>setNombre(event.target.value)} value={nombre1} disabled={isAble}/> <br />
                            <div className="one-line-fields1">
                                <div>
                                    <label for="celular">Celular: </label> <br />
                                    <input type="text" id="celular" value={celular} onChange={(event)=>setCelular(event.target.value)} disabled={isAble}/> <br />
                                </div>
                                <div>
                                    <label for="tel-casa">Tel Casa: </label> <br />
                                    <input type="text" id="tel-casa" onChange={(event)=>setCelCasa(event.target.value)} value={celCasa} disabled={isAble}/> <br />
                                </div>
                            </div>

                            <div className="one-line-fields2">
                                <div>
                                    <label for="correo">Correo electrónico: </label> <br />
                                    <input type="text" id="correo" onChange={(event)=>setCorreo(event.target.value)} value={correo1} disabled={isAble}/> <br />
                                </div>
                                <div>
                                    <label for="contra">Contraseña</label> <br />
                                    <input type="password" id="contra" onChange={(event)=>setPass(event.target.value)} value={pass} disabled={isAble}/> <br />
                                </div>
                            </div>
                            <div className="btn-formulario">
                            <button onClick={handleAble}>
                            {isAble==true&&<p>Editar</p>}
                            {isAble==false&&<p>Guardar</p>}
                            </button>
                        </div>
                        </div>
                        
                        
                    
                    </div>
                </div>
            </div>
            
        </>
    );
}

export default Configuracion;