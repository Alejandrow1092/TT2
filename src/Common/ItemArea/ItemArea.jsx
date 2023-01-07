import React from "react";
import './ItemArea.scss';
import cross from "./../../asets/cross.png"

const ItemArea =(props)=>{
    const{plus}=props;

    return(
        <>
            <div className="itemArea">
                <button className="img-button">
                    <p>Area 1</p>
                    <img src={cross} width="16px" alt="" />
                </button>
            </div>
        </>
    );
}

export default ItemArea;