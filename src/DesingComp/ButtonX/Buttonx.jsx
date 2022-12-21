import React from "react";
import "./ButtonX.scss"

const ButtonX=(props)=>{
    const {title}=props;

    return(
        <>
            <button className="btn-x">
                <p>{title}</p>
            </button>
        </>
    );
}

export default ButtonX;