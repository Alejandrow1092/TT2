import React from "react";
import "./Login.scss";


const Login =()=>{
    return(
        <div className="login-component">
            <div className="login-form">
                <div name="div-headers">
                    <h1>Ingresa tu cuenta</h1>
                    <h2>Empieza tu día con una sonrisa</h2>
                </div>
                <div name="div-form">
                    <form>
                        <span>Correo eléctronico</span>
                        <input type="email"/>
                        <span>Contraseña</span>
                        <input type="password"/>
                        <a href="">¿Olvidaste tu contraseña?</a>
                        <button>Iniciar Sesión</button>
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