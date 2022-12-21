import React from "react";
import './ListScroll.scss';
import ItemListScroll from "../ItemListScroll/ItemListScroll";

const ListScroll =(props)=>{
    const {nombre, tipo}=props;

    return(
        <>
            <div className="list">
                <ItemListScroll nombreNegocio={nombre} tipo={tipo}/>
                <ItemListScroll nombreNegocio="Alpura A.C de C.V" tipo={tipo}/>
              {/*   <ItemListScroll/>
                <ItemListScroll/>
                <ItemListScroll/>
                <ItemListScroll/> */}
            </div>
        </>
    );
}

export default ListScroll;