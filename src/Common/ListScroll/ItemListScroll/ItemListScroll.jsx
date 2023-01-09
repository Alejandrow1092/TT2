import React from "react";
import './ItemListScroll.scss';
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setSelectedNegocio, setNegocioSelectedData } from "../../../rootReducer";


const ItemListScroll =(props)=>{
    const{nombreNegocio, id, elementos}=props;
    const dispatch=useDispatch();

    const handleClick=()=>{
        dispatch(setSelectedNegocio(id));
        dispatch(setNegocioSelectedData(elementos));
    }

    return(
        <>  
            <div className="item" name="blueItem">
               <Link to="/Negocio-vista" className="item-list" onClick={handleClick}><span className="text-item" >{nombreNegocio}</span></Link>
            </div>
        </>
    );
}

export default ItemListScroll;