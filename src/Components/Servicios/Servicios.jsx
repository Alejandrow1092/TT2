import React from "react";
import Footer from "../../Common/Footer/Footer";
import NavBar3 from "../../Common/NavBar3/NavBar3";
import './Servicios.scss';
import ServiciosGestor from "./ServiciosGestor/ServiciosGestor";
import medicineIcon from "../../asets/informe-medico.png";
import LinerMessage from "../../Common/ChatComponents/LinerMessage/LinerMessage";
import UserMessage from "../../Common/ChatComponents/UserMessage/UserMessage";
import ChatWindow from "../../Common/ChatComponents/ChatWindow/ChatWindow";
import { useSelector, useDispatch } from "react-redux";
import correoIcon from "../../asets/correo.png"
import botiquinIcon from "../../asets/botiquin.png"
import { useState } from "react";


const Servicios=()=>{
    const user=useSelector((state)=>state.appTT.userType);
    const [selected, setSelected]=useState(user==="Empleado"?"buzon":"medico");    
    const[selectedBuzon, setSelectedBuzon]=useState("no");
    const [selectedQueja, setSelectedQueja]=useState("no");
    const[medicoNueva, setMedicoNueva]=useState("no")
    console.log(selectedQueja)

    return(
        <>
            <NavBar3/>
            <div className="servicios">
                <div className="menu-servicios">
                    
                    {user==="Empleado"&&
                    <button onClick={()=>{setSelected("buzon"); setSelectedBuzon("no")}}>
                        <p>Buzon de quejas</p>
                        <img src={correoIcon} width="30px" alt="" />
                    </button>
                    }

                    <button onClick={()=>{setSelected("medico"); setMedicoNueva("no"); setSelectedQueja("no");}}>
                        <p>Solicitudes medicas</p>
                        <img src={medicineIcon} width="30px" alt="" />
                    </button>
                </div>
                <div className="panel-servicios">
                    {/* <div className="panel-left">
                        <UserMessage/>
                        <UserMessage/>
                        <UserMessage/>
                    </div>
                    <div className="panel-right">
                        <ChatWindow selected="yes" use="medico"/>
                    </div> */}

                    {selected==="medico"&&
                        <>
                        <div className="panel-left" onClick={()=>setSelectedQueja("yes")}>
                            <UserMessage/>
                            <UserMessage/>
                            <UserMessage/>
                        </div>
                         <div className="panel-right-medico">
                            {user==="Gestor"&&
                             <ChatWindow selected={selectedQueja} use="medico" pendiente="no"/>
                            }
                            {user==="Empleado"&&
                                <>
                                    <button className="botiquin" onClick={()=>setMedicoNueva("yes")}>
                                        <p>Nueva solicitud medica</p>
                                        <img src={botiquinIcon} width="30px" alt="" />
                                    </button>
                                    {medicoNueva==="yes"&&
                                        <ChatWindow use="medico-nueva"/> 
                                    }
                                    {medicoNueva==="no"&&
                                        <ChatWindow selected={selectedQueja} use="medico" pendiente="yes"/>
                                    }
                                </>
                            }
                            
                            
                         </div>
                        </>
                    }

                    {selected==="buzon"&&
                    <>
                    <div className="panel-left" onClick={()=>setSelectedBuzon("yes")}>
                        <UserMessage/>
                        <UserMessage/>
                    </div>
                    <div className="panel-right">
                        <ChatWindow selected={selectedBuzon} use="buzon"/>
                    </div>
                    </>  
                    } 
                        
                   {/*  <div className="panel-right-medico"> */}
                        {/* <button className="botiquin">
                            <p>Nueva solicitud medica</p>
                            <img src={botiquinIcon} width="30px" alt="" />
                        </button>
                        <ChatWindow selected="no" use="medico" pendiente="yes"/> */}


{/* 
                        <ChatWindow selected="yes" use="medico" pendiente="yes"/> */}
                    
                        
                        {/* <ChatWindow use="medico-nueva"/> */}
                    
                   {/*  </div> */}
                </div>

            </div>

            <Footer/>
        </>
    );
}

export default Servicios;