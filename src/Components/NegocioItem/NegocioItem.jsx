import React from "react";
import './NegocioItem.scss';

const NegocioItem =()=>{
    return(
        <>
            <div className="item" name="blueItem">
                <span className="text-item">Texto Dummie</span>
            </div>
            <div className="item" name="whiteItem">
                <span className="text-item">Texto Dummie</span>
            </div>
        </>
    );
}

export default NegocioItem;