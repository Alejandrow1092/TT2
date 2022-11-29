import React from "react";
import './AdminListNegocio.scss';
import NegocioItem from "../NegocioItem/NegocioItem";

const AdminListNegocio =()=>{
    return(
        <>
            <div className="list">
                <NegocioItem/>
                <NegocioItem/>
                <NegocioItem/>
                <NegocioItem/>
                <NegocioItem/>
                <NegocioItem/>
                <NegocioItem/>
                <NegocioItem/>
                <NegocioItem/>
                <NegocioItem/>
                <NegocioItem/>
            </div>
        </>
    );
}

export default AdminListNegocio;