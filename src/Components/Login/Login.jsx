import React from "react";
import "./Login.scss";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from 'axios';

const Login =()=>{
    const [correo, setCorreo]=useState("");
    const [pass, setPass]=useState("");
    const [response, setResponse]=useState("no")

    const body={correo: correo, pass: pass};    
    
    const handleCorreo=(event)=>{
        setCorreo(event.target.value);
        if(response!="no") setResponse("no");
    }

    const handlePass=(event)=>{
        setPass(event.target.value);
        //para el mensaje de contraseña incorrecta
        //al cambio quita el mensaje
        if(response!="no") setResponse("no");
    }

    //lamada a la API
    const onSubmit=(event)=>{
        axios.post('http://localhost:8080/login', body)
        .then(({data})=>{
            console.log(data);
        })
        .catch(({response})=>{
            console.log(response.data+" hola");
            setResponse(response.data);
        });
        event.preventDefault();
    }

    return(
        <div className="login-component">
            <div className="login-form">
                <div name="div-headers">
                    <h1>Ingresa tu cuenta</h1>
                    <h2>Empieza tu día con una sonrisa</h2>
                    {response!=="no"&&<p className="error">Correo o contraseña incorrectos</p>}
                </div>
                <div name="div-form">
                    <form>
                        <span>Correo eléctronico</span>
                        <input 
                            type="email" 
                            onChange={handleCorreo}
                            required
                        />
                        <span>Contraseña</span>
                        <input 
                            type="password" 
                            id="pass"
                            name="password"
                            onChange={handlePass}
                            required
                        />
                        <a href="#">¿Olvidaste tu contraseña?</a>
                        <button 
                            onClick={onSubmit}
                        ><a><Link to="/dashboard">Iniciar Sesión</Link></a></button>
                    </form>
                </div>
                <div name="div-signup">
                    <span>¿Nuevo Usuario?</span>
                    <a href="">Registrate</a>
                </div>
            </div>
            <div className="elipseText">
                    <span name="span-white">Crea empleados</span>
                    <span name="span-yellow">felices</span>
                    <span name="span-white" className="white">Crea nuevas</span>
                    <span name="span-yellow">oportunidades</span>
            </div>
            <div className="login-footer">
                <p>
                    TT2020-B093 es un sistema web desarrollado apartir de la NOM 035 utilizada como opción curricular de titulación. Este sistema fue desarrollado dentro de la Escuela Superior de Cómputo y es propiedad de el Instituto Politécnico Nacional y de sus estudiantes.
                </p>
            </div>
        </div>
    );
}

export default Login;