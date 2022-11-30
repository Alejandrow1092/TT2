import React from "react";
import './Configuracion.scss';
import NavBar3 from "../../Common/NavBar3/NavBar3";

const Configuracion=()=>{
    return(
        <>
        <NavBar3/>
        <div className="confi">
            <div className="perfil">
                <p id="admin">Administrador</p>
                <figure>
                    <img src="https://picsum.photos/200" alt="perfil" />
                </figure>

                <p id="name">Alejandro Martinez</p>

                <button className="edit-btn">
                    <p>Editar perfil</p>
                </button>
            </div>
            <div className="form">
                <div className="main-form">
                    <div className="title-line"></div>
                    <p id="title1">Configuracion</p>
                    <p id="title2">Informacion de la cuenta</p>
                    
                    <div className="form-fields">
                        <label for="nombre">Nombre: </label> <br />
                        <input type="text" id="nombre"/> <br />
                        <div className="one-line-fields1">
                            <div>
                                <label for="celular">Celular: </label> <br />
                                <input type="text" id="celular"/> <br />
                            </div>
                            <div>
                                <label for="tel-casa">Tel Casa: </label> <br />
                                <input type="text" id="tel-casa"/> <br />
                            </div>
                        </div>

                        <div className="one-line-fields2">
                            <div>
                                <label for="correo">Correo electronico: </label> <br />
                                <input type="text" id="correo"/> <br />
                            </div>
                            <div>
                                <label for="contra">Contraseña</label> <br />
                                <input type="text" id="contra"/> <br />
                            </div>
                        </div>
                       
                    </div>
                    
                    <div className="btn-formulario">
                        <button>
                            <p>Guardar</p>
                        </button>
                    </div>
                   
                </div>
            </div>
        </div>
        </>
    );
}

export default Configuracion;