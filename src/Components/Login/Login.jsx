import React from "react";
import "./Login.scss";
import { Link } from "react-router-dom";


const Login =()=>{
    return(
        <div className="login-component">
            <div className="login-image">
                <img src="https://picsum.photos/500/600" alt="login-front" />
            </div>
            <div className="login-form">
                <div id="login-headers">
                    <h1>Login</h1>
                </div>
                <div id="form-sec">
                    <form action="#">
                        <div>
                            <input type="email" placeholder="Correo"/>
                            <input type="password"  placeholder="Contraseña"/>
                        </div>
                        <p>Dont have an account yet? <a href="">Sing up</a></p>
                        <button><Link to="/dashboard">Login</Link></button>
                    </form>
                </div>
               
            </div>
        </div>
    );
}

export default Login;