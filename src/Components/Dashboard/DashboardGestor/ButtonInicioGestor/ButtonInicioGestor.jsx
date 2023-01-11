import React from "react";
import ButtonX from "../../../../DesingComp/ButtonX/Buttonx";
import './ButtonInicioGestor.scss';
import { Navigate, useNavigate } from "react-router-dom";
import PDFView from "../../../../Common/PDFView/PDFView";
import { useState } from "react";

const ButtonInicioGestor =()=>{
    const navigate=useNavigate();
    const[showModal, setShowModal]=useState(false);

    const show=(state)=>{
        if(state){
            setShowModal(false)
        }
        else{
            setShowModal(true)
        }
    }

    return(
        <>  
            {showModal&&
                <div>
                    <PDFView fun={show} state={showModal}/>
                </div>
            }
            <div className="title">
                <h1 name="blueTitle">Cuida a tu equipo</h1>
                <h1>Cuida a tu empresa</h1>
            </div>
            <div className="button2">
                <button onClick={setShowModal}>Revisar cuestionario</button>
                <button onClick={()=>navigate("/SetForm")}>¿Cómo está mi equipo?</button>
              {/*   <ButtonX title="Revisar cuestionario"/>
                <ButtonX title="¿Como está mi equipo de trabajo?"/> */}
            </div>
        </>
    );
}

export default ButtonInicioGestor;