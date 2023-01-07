import React from "react";
import "./UserMessage.scss"

const UserMessage=()=>{
    return(
        <>
            <div className="user-message">
                <div className="user-foto">
                    <img src="https://picsum.photos/70" alt="" />
                </div>
                <div className="message-info">
                    <p id="name">Alejandro Martinez</p>
                    <p id="preview-message">Hola como estas, tengo una queja...</p>
                </div>
            </div>
        </>
    );
}

export default UserMessage;