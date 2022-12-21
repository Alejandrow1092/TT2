import React from "react";
import './ItemListScroll.scss';
import { Link } from "react-router-dom";

const ItemListScroll =(props)=>{
    const{nombreNegocio, tipo}=props;
    
    return(
        <>  
            <div className="item" name="blueItem">
               {/*  {tipo==="negocio"&&<Link to="/Negocio-vista"><span className="text-item" >{nombreNegocio}</span></Link>}
                {tipo==="empleado"&&<Link to="/Empleado-vista"><span className="text-item" >{nombreNegocio}</span></Link>} */}
                <Link to="/Negocio-vista" className="item-list"><span className="text-item" >{nombreNegocio}</span></Link>
               {/*  <Link to="/Empleado-vista"><span className="text-item" >{nombreNegocio}</span></Link> */}
            </div>
           {/*  <div className="item" name="whiteItem">
                <span className="text-item-black">Corporativo computacion</span>
            </div> */}
        </>
    );
}

export default ItemListScroll;