import React from "react";
import './ListScroll.scss';
import ItemListScroll from "./ItemListScroll/ItemListScroll";
import { useSelector } from "react-redux";

const ListScroll =(props)=>{
    const {elementos}=props;
    const user=useSelector(state=>state.appTT.userType);
    const negocioNuevo=useSelector(state=>state.appTT.negocioNuevo);
    const gestorNuevo=useSelector(state=>state.appTT.gestorNuevo)
    
    return(
        <>
            <div className="list">
                {user==="Admin"&&
                    elementos.map((elem, i)=>{
                        return(
                            <ItemListScroll nombreNegocio={elem.nombre} id={elem.idNegocio} elementos={elem}/>
                        );
                    })
                   
                }
                {negocioNuevo!==""&&
                        <ItemListScroll nombreNegocio={negocioNuevo}/>
                }
                {gestorNuevo!==""&&
                    <ItemListScroll nombreNegocio={gestorNuevo}/>
                }
                {user==="Gestor"&&
                    elementos.map((elem, i)=>{
                        return(
                            <ItemListScroll elementos={elem}/>
                        );
                    })
                }
                
                
            </div>
        </>
    );
}

export default ListScroll;