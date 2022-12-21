import React from "react";
import "./FieldX.scss";

const FieldX=(props)=>{
    const{label, state, className, fun}=props;


    return(
        <>
            <div className={className?"input-x "+className:"input-x"}>
                <span className="clear-input">x</span>
                <label htmlFor="">{label}</label><br />
                <input type="text" id={label} onChange={(event)=>fun(event.target.value)}  value={state}/> 
            </div> 
        </>
    );
}

export default FieldX;