import React from "react";
import "./AddGestor.scss";
import FieldX from "../../DesingComp/FieldX/FieldX"
import ButtonX from "../../DesingComp/ButtonX/Buttonx"
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setnegocionuevo } from "../../rootReducer";
import { setgestornuevo } from "../../rootReducer";
const AddGestor=(props)=>{
    const{userForm}=props;

    const dispatch=useDispatch();

    const [nombre, setNombre]=useState(" ");
    const[razon, setRazon]=useState("");
    const[domiclio, setDomiclio]=useState("");
    const[actividad, setActividad]=useState("");

    const [nombre1, setNombre1]=useState(" ");
    const[appellidos, setApellidos]=useState("");
    const[domiclio1, setDomiclio1]=useState("");
    const[numCel, setNumCel]=useState("");
    const[numCasa, setNumCasa]=useState("");
    const[correo, setCorreo]=useState("")
    const[con, setCon]=useState("");

   /*  const[]=useState(""); */


    const fun=()=>{
        if(userForm==="creaGestor"){
            dispatch(setnegocionuevo(""))
        }
        else{
            dispatch(setgestornuevo(""))
        }
    }

    fun();

    return(
        <>  
            {userForm==="creaGestor"&&
            <div className="form-gestor">
                <h4>Datos del gestor</h4>
                <div className="field-sec">
                    <FieldX className="fieldx" label="Nombre" state={nombre1} fun={setNombre1}/>
                    <FieldX className="fieldx" label="Apellidos" state={appellidos} fun={setApellidos}/>
                    <FieldX className="fieldx" label="Domiclio" state={domiclio1} fun={setDomiclio1}/>
                    <div className="group">
                        <FieldX className="fieldx num-gestor" label="Num de celular" fun={setNumCel} state={numCel}/>
                        <FieldX className="fieldx num-gestor" label="Num de casa" fun={setNumCasa} state={numCasa}/>
                    </div>
                </div>
               
                <h4>Credenciales de acceso</h4>
                <div className="field-sec">
                  
                    <FieldX className="fieldx" label="Correo" state={correo} fun={setCorreo}/>
                    <div className="group-1 ">
                        <FieldX className="fieldx group2" label="Contraseña" state={con} fun={setCon}/>
                        {/* <ButtonX title="Generar contraseña"/> */}
                        {/* <button className="genera-con">
                            <p>Generar contraseña</p>
                        </button> */}
                    </div>
                    
                </div>
                <div className="btn-bottom">
                    <ButtonX title="Añadir" fun={dispatch(setnegocionuevo(nombre1))} state={nombre1}/>
                    <ButtonX title="Cancelar"/>
                </div>
                
              {/*   <FieldX className="fieldx" label="Alejandro" state="Alejandro"/> */}
            </div>
            }


            {userForm==="creaNegocio"&&
            
            <div className="form-gestor">
            <h4>Datos del negocio</h4>
            <div className="field-sec">
                <FieldX className="fieldx" label="Nombre" fun={setNombre} state={nombre}/>
                <FieldX className="fieldx" label="Razon social" fun={setRazon} state={razon}/>
                <FieldX className="fieldx" label="Domiclio" fun={setDomiclio} state={domiclio}/>
                <FieldX className="fieldx" label="Actividad economica (Sector economico)" fun={setActividad} state={actividad}/>
                {/* <div className="group">
                    <FieldX className="fieldx num-gestor" label="Num de celular" state="Alejandro"/>
                    <FieldX className="fieldx num-gestor" label="Num de casa" state="Alejandro"/>
                </div> */}
            </div>
           
           {/*  <h4>Credenciales de acceso</h4>
            <div className="field-sec">
                <FieldX className="fieldx" label="Correo" state="Alejandro"/>
                <div className="group-1 ">
                    <FieldX className="fieldx group2" label="Contraseña" state="Alejandro"/>
                    <button className="genera-con">
                        <p>Generar contraseña</p>
                    </button>
                </div>
                
            </div> */}
            <div className="btn-bottom">
                <ButtonX title="Añadir" fun={dispatch(setnegocionuevo(nombre))} state={nombre}/>
                <ButtonX title="Cancelar"/>
            </div>
            
      
        </div>
            }
        </>
    );
}

export default AddGestor;