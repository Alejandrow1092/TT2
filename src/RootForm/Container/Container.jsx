import React from "react";
import { Route } from "react-router-dom";
import Configuracion from "../../Components/Configuracion/Configuracion";
import NavBar3 from "../../Common/NavBar3/NavBar3";

const Container=()=>{
    return(
        <>
            <NavBar3/>
           {/*  <div>
                <Switch>
                    <Route path="/Configuracion" element={Configuracion}/>
                </Switch>
            </div> */}
          
            
        </>
    );
}

export default Container;