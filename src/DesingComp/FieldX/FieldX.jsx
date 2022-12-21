import React from "react";
import "./FieldX.scss";

const FieldX=(props)=>{
    const{label, state}=props;

    return(
        <>
            <div className="input-x">
                <span className="clear-input">X</span>
                <label htmlFor="">{label}</label><br />
                <input type="text" id={label} value={state}/> 
            </div> 
        </>
    );
}

export default FieldX;