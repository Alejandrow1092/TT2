import React from "react";
import "./ListaCuestionarios.scss";

const ListaCuestionarios=(props)=>{
    const{cuest, estadoFecha, fun}=props;
    console.log(cuest);
    return(
        <>
            <div className="container-drops">
                <div className="container-groups">
                    <div className="select-group-drop">
                        <span>Año:</span>
                        <select value={estadoFecha} onChange={(event)=>fun(event.target.value)}>
                            <option value="" disabled >Selecciona una fecha</option>
                            {cuest!=null&&cuest.map((elem, i)=>{
                                return(
                                    <>
                                    <option value={elem.fechaApertura} id={i}>{elem.fechaApertura}</option>
                                    </>
                                )
                            })}
                           {/*  <option>Primera</option>
                            <option>Primera</option> */}
                        </select>
                    </div>
                   {/*  <div className="select-group-drop">
                        <span>Mes:</span>
                        <select>
                            <option>Primera</option>
                            <option>Primera</option>
                        </select>
                    </div> */}
                </div>
            </div>
        </>
    );
}

export default ListaCuestionarios;