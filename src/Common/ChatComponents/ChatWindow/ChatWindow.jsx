import React from "react";
import messageIcon from "../../../asets/mensaje.png"
import LinerMessage from "../LinerMessage/LinerMessage";
import "./ChatWindow.scss"

const ChatWindow=(props)=>{
    const{selected}=props;
    
    return(
        <>
            {selected==="no"&&
            <div className="chat-window-no">
                    <div className="chat-panel-no">
                        <img src={messageIcon} width="200px" alt="" />
                        <p id="title">Selecciona un chat reciente</p>
                    </div>
            </div>
            }
            {selected==="yes"&&
            <div className="chat-window">
                <div className="chat-panel">
                    <LinerMessage direction="normal"/>
                    <LinerMessage direction="normal"/>
                    <LinerMessage direction="reverse"/>
                </div>
                <div className="comment-panel">

                </div>
            </div>
            }
        </>
    );
}

export default ChatWindow;