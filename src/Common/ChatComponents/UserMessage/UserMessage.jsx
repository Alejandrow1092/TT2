import React from "react";
import "./UserMessage.scss"

const UserMessage=(props)=>{

    const{usuario, prev}=props;
    return(
        <>
            <div className="user-message">
                <div className="user-foto">
                    <img src="https://picsum.photos/70" alt="" />
                </div>
                <div className="message-info">
                    <p id="name">{usuario}</p>
                    <p id="preview-message">{prev}</p>
                </div>
            </div>
        </>
    );
}

export default UserMessage;