import React from "react";
import messageIcon from "../../../asets/mensaje.png"
import NewComment from "../../NewComment/NewComment";
import LinerMessage from "../LinerMessage/LinerMessage";
import "./ChatWindow.scss"
import ButtonX from "../../../DesingComp/ButtonX/Buttonx";
import usuarioIcon from "../../../asets/usuario.png"
import correoIcon from "../../../asets/correo.png"
import pruebaIcon from "../../../asets/prueba.png"
import cuestionarioIcon from "../../../asets/cuestionario.png"
import tiempoRapido from "../../../asets/tiempo-rapido.png"
import informacionIcon from "../../../asets/informacion.png"

const ChatWindow=(props)=>{
    const{selected, use, pendiente}=props;
    
    return(
        <>
            {selected==="no"&&
            <div className="chat-window-no">
                    {use==="buzon"&&
                    <div className="chat-panel-no">
                            <img src={messageIcon} width="200px" alt="" />
                            <p id="title">Selecciona un chat reciente</p>
                    </div>
                    }   
                    {use==="medico"&&
                    <div className="chat-panel-no">
                            <img src={messageIcon} width="200px" alt="" />
                            <p id="title">Selecciona una solicitud reciente</p>
                    </div>
                    }  
            </div>
            }
            {selected==="yes"&&use==="buzon"&&
            <div className="chat-window">
                <div className="chat-panel">
                    <LinerMessage direction="normal"/>
                    <LinerMessage direction="normal"/>
                    <LinerMessage direction="reverse"/>
                </div>
                <div className="comment-panel">
                    <NewComment/>
                </div>
            </div>
            }
            {selected==="yes"&&use==="medico" &&pendiente==="no"&&
            <div className="panel-solicitud-medica">
                <div className="datos-solicitud-medico">
                    <p>
                        <img width="30px" src={usuarioIcon} alt="" />
                        <b>Nombre:</b> Alejandro Martinez
                    </p>
                    <p>
                        <img src={correoIcon} width="30px" alt="" />
                        <b>Correo:</b> amrkratos@hotmail.com
                    </p>
                    <p>
                        <img src={pruebaIcon} width="30px" alt="" />
                        <b>Numero de solicitud:</b> #322
                    </p>
                    <p>
                        <img src={cuestionarioIcon} width="30px" alt="" />
                        <b>Numero de cuestionario:</b> 34334
                    </p>
                </div>
                <ButtonX title="Aceptar"/>
                <ButtonX title="Rechazar"/>
            </div>
            }
            {selected==="yes"&&use==="medico" &&pendiente==="yes"&&
                <div className="panel-medico-pendiente">
                    <p id="estatus">Estatus <span>pendiente</span></p>
                    <p id="descripcion">
                        Pronto uno de los gestores dará respuesta  tu solicitud 
                        medica. Mantente al pendiente de este chat.
                    </p>
                    <img src={tiempoRapido}  alt="" />
                </div>
            }
            {use==="medico-nueva"&&
                <div className="panel-medico-nueva">
                    <p id="info">
                        Llena a continuacion los datos requeridos
                        <img src={informacionIcon} width="25px" alt="" />
                    </p>
                    <div className="inputs-medica">
                        <label htmlFor="">Nombre</label>
                        <input type="text" placeholder="Nombre"/>
                        <label htmlFor="">Cuestionario</label>
                        <input type="text" placeholder="Numero de cuestionario"/>
                        <label htmlFor="">Fecha</label>
                        <input type="date" placeholder="Nombre"/>
                    </div>
                    <ButtonX title="Solicitar"/>
                </div>
            }
        </>
    );
}

export default ChatWindow;