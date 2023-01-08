import React from "react";
import UserMessage from "../../Common/ChatComponents/UserMessage/UserMessage";
import Footer from "../../Common/Footer/Footer";
import NavBar3 from "../../Common/NavBar3/NavBar3";
import ChatWindow from "../../Common/ChatComponents/ChatWindow/ChatWindow";
import "./Buzon.scss"


const Buzon =()=>{
    return(
        <>
            <NavBar3/>
                <div className="chat-main-window">
                    <div className="chat-header">
                        <p>Buzon de quejas</p>
                    </div>
                    <div className="chat-section">
                        <UserMessage />
                        <UserMessage/>
                        <UserMessage/>
                        <UserMessage/>
                        <UserMessage/>
                        <UserMessage/>
                        <UserMessage/>
                        <UserMessage/>
                        <UserMessage/>
                        <UserMessage/>
                        <UserMessage/>
                    </div>
                    <div className="window-chat-section">
                        <ChatWindow selected="yes" use="buzon"/>
                    </div>
                </div>
            <Footer/>
        </>  
    );
}

export default Buzon;