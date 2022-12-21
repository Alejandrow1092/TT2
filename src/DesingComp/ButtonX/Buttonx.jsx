import React from "react";
import "./ButtonX.scss"

const ButtonX=(props)=>{
    const {title, fun, state}=props;

    return(
        <>
            <button className="btn-x" onClick={()=>fun(state)}>
                <p>{title}</p>
            </button>
        </>
    );
}

export default ButtonX;