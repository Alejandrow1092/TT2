import React from "react";
import './Escala.scss';

const Escala =()=>{
    return(
        <div className="container-escala">
            <div className="container-center-escala">
                <span>0%</span>
                <div style={{backgroundColor: "#9BE5F7"}}>Nulo</div>
                <div style={{backgroundColor: "#6BF56E"}}>Bajo</div>
                <div style={{backgroundColor: "#FFFF00"}}>Medio</div>
                <div style={{backgroundColor: "#FFC000"}}>Alto</div>
                <div style={{backgroundColor: "#FF0000", color: "#FFFFFF"}}>Muy Alto</div>
                <span>100%</span>
            </div>
        </div>
    );
}

export default Escala;