import React from "react";
import "./ListaCuestionarios.scss";

const ListaCuestionarios=()=>{
    return(
        <>
            <div className="container-drops">
                <div className="container-groups">
                    <div className="select-group-drop">
                        <span>Año:</span>
                        <select>
                            <option>Primera</option>
                            <option>Primera</option>
                        </select>
                    </div>
                    <div className="select-group-drop">
                        <span>Mes:</span>
                        <select>
                            <option>Primera</option>
                            <option>Primera</option>
                        </select>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ListaCuestionarios;