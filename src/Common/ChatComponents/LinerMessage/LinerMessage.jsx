import React from "react";
import './LinerMessage.scss';

const LinerMessage=(props)=>{
    const{direction}=props;
    
    return(
        <>
            <div className={direction==="normal"?"liner-message":"liner-message liner-message-reverse" } >
                <figure>
                    <img src="https://picsum.photos/35" alt="" />
                </figure>
                <p>
                    Que tal amigo como estas, espero que te encuentres muy bien
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi, voluptatum suscipit veniam corrupti sed commodi blanditiis exercitationem neque iste ipsum ratione doloremque mollitia odit obcaecati voluptates earum totam! Quibusdam, amet?
                </p>
            </div>
        </>
    );
}

export default LinerMessage;