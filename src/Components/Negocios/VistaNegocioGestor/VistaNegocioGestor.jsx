import React from "react";
import './VistaNegocioGestor.scss';
import NegocioInfo from "../../NegocioInfo/NegocioInfo";
import ListScroll from "../../../Common/ListScroll/ListScroll";
import EmpleadoInfo from "../../EmpleadoInfo/EmpleadoInfo"
import ItemArea from "../../../Common/ItemArea/ItemArea";
import ButtonX from "../../../DesingComp/ButtonX/Buttonx"
import axios from "axios";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useState } from "react";

const VistaNegocioGestor =()=>{
    const[negocio, setNegocio]=useState(null);
    const[empData, setEmpData]=useState([])

    const userId=useSelector(state=>state.appTT.userData.id);
    console.log(userId);

    useEffect(()=>{
        const consultaNegocioGestor=()=>{
            axios.get(`http://localhost:8080/negocio-gestor/${userId}`)
            .then(({data})=>{
                console.log(data[0].idnegocio);
                setNegocio(data);
                //console.log(negocios)
            })
            .catch(({response})=>{
                console.log(response.data+" hola");
            });
            
            if(negocio!==null){
            axios.get(`http://localhost:8080/negocio-empleados/${negocio[0].idnegocio}`)
                .then(({data})=>{
                    console.log(data);
                    setEmpData(data);
                    //console.log(negocios)
                })
                .catch(({response})=>{
                    console.log(response.data+" hola");
                });
            }
        }

     /*    const consultaEmpleados=()=>{
            
            useEffect(()=>{
                axios.get(`http://localhost:8080/negocio-empleados/1`)
                .then(({data})=>{
                    console.log(data);
                    setEmpData(data);
                    //console.log(negocios)
                })
                .catch(({response})=>{
                    console.log(response.data+" hola");
                });
            },[])
        } */
        
        consultaNegocioGestor();
        //consultaEmpleados();
            
    },[])

    //console.log(negocio[0]);

    return(
        <>
            <div className="container-empleado">
                <div className="infoNegocio-empleado">
                    {negocio!==null&&
                        <NegocioInfo elem={negocio[0]}/>
                    }
                    </div>
                <div className="infoArea">
                    <span>Areas registradas</span>
                    <div className="areas">
                        <ItemArea/>
                        <ItemArea/>
                        <ItemArea/>
                        <ItemArea/>
                        <ItemArea/>
                        <ItemArea/>
                        <ItemArea/>
                        <ItemArea/>
                        <ItemArea/>
                        <ItemArea plus="true"/>
                    </div>
                </div>
                {/* <div className="inputArea">
                    <span>Nombre del area</span>
                    <input></input>
                    <button>Agregar</button>
                </div> */}
                <div className="infoEmpleado">
                    <div className="left-grid-empleado">
                        <div className="gestores">
                            <p>Empleados</p>
                            <ListScroll elementos={empData}/>
                        </div>
                        <div>
                            <ButtonX title="Agregar empleado"/>
                        </div>
                    </div>
                    <div className="right-grid-empleado">
                        <EmpleadoInfo empData={empData}/>
                    </div>
                </div>
            </div>
        </>
    );
}

export default VistaNegocioGestor;