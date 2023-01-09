import React from "react";
import './ListScroll.scss';
import ItemListScroll from "./ItemListScroll/ItemListScroll";

const ListScroll =(props)=>{
    const {elementos}=props;

    return(
        <>
            <div className="list">
                {
                    elementos.map((elem, i)=>{
                        return(
                            <ItemListScroll nombreNegocio={elem.nombre} id={elem.idNegocio} elementos={elem}/>
                        );
                    })
                }   
                
            </div>
        </>
    );
}

export default ListScroll;