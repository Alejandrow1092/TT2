import React from "react";
import "./AddGestor.scss";
import FieldX from "../../DesingComp/FieldX/FieldX"
import ButtonX from "../../DesingComp/ButtonX/Buttonx"
import { useState } from "react";

const AddGestor=(props)=>{
    const{userForm}=props;

    const [nombre, setNombre]=useState(" ");

    return(
        <>  
            {userForm==="creaGestor"&&
            <div className="form-gestor">
                <h4>Datos del gestor</h4>
                <div className="field-sec">
                    <FieldX className="fieldx" label="Nombre" state="Alejandro"/>
                    <FieldX className="fieldx" label="Apellidos" state="Alejandro"/>
                    <FieldX className="fieldx" label="Domiclio" state="Alejandro"/>
                    <div className="group">
                        <FieldX className="fieldx num-gestor" label="Num de celular" state="Alejandro"/>
                        <FieldX className="fieldx num-gestor" label="Num de casa" state="Alejandro"/>
                    </div>
                </div>
               
                <h4>Credenciales de acceso</h4>
                <div className="field-sec">
                    <FieldX className="fieldx" label="Correo" state="Alejandro"/>
                    <div className="group-1 ">
                        <FieldX className="fieldx group2" label="Contraseña" state="Alejandro"/>
                        {/* <ButtonX title="Generar contraseña"/> */}
                        <button className="genera-con">
                            <p>Generar contraseña</p>
                        </button>
                    </div>
                    
                </div>
                <div className="btn-bottom">
                    <ButtonX title="Añadir"/>
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
                <FieldX className="fieldx" label="Razon social" state="Alejandro"/>
                <FieldX className="fieldx" label="Domiclio" state="Alejandro"/>
                <FieldX className="fieldx" label="Actividad economica (Sector economico)" state="Alejandro"/>
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
                <ButtonX title="Añadir"/>
                <ButtonX title="Cancelar"/>
            </div>
            
      
        </div>
            }
        </>
    );
}

export default AddGestor;