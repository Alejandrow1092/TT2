import React from "react";
import './ListScroll.scss';
import ItemListScroll from "../ItemListScroll/ItemListScroll";

const ListScroll =()=>{
    return(
        <>
            <div className="list">
                <ItemListScroll/>
                <ItemListScroll/>
                <ItemListScroll/>
                <ItemListScroll/>
                <ItemListScroll/>
            </div>
        </>
    );
}

export default ListScroll;