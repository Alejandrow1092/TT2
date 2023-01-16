import {createBrowserRouter, RouterProvider, Route, Router, Routes, Navigate} from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom/client";
import Login from "./Components/Login/Login"
import DashboardGestor from "./Components/Dashboard/DashboardGestor/DashboardGestor"
import Configuracion from "./Components/Configuracion/Configuracion";
import ProtectedRoutes from "./RootForm/ProtectedRoutes/ProtectedRoutes";
import NavBar3 from "./Common/NavBar3/NavBar3";
import Container from "./RootForm/Container/Container";
import Dashboard from "./Components/Dashboard/Dashboard";
import VistaNegocioGestor from "./Components/Negocios/VistaNegocioGestor/VistaNegocioGestor"
import VistaNegocioAdmin from "./Components/VistaNegocioAdmin/VistaNegocioAdmin"
import EmpleadoInfo from "./Components/EmpleadoInfo/EmpleadoInfo";
import Formulario from "./Components/Formulario/Formulario";
import SetForm from "./Components/SetForm/SetForm";
import Negocios from "./Components/Negocios/Negocios";
import Buzon from "./Components/Buzon/Buzon";
import Servicios from "./Components/Servicios/Servicios";
import Resultados from "./Components/Resultados/Resultados";
import Footer from "./Common/Footer/Footer";
//import './App.css';

/* const router = createBrowserRouter([
  {
    path: "/",
    element: <Login/>,
  },
]); */

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navigate to="/login"/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route element={<ProtectedRoutes/>}>
          <Route path="/Negocios" element={<Negocios/>}/>
          <Route path="/Negocio-vista" element={<VistaNegocioAdmin/>}/>
          <Route path="/Empleado-vista" element={<EmpleadoInfo/>}/>
          <Route path="/Configuracion" element={<Configuracion/>}/>
          <Route path="/Dashboard" element={<Dashboard/>}/>
          <Route path="/VistaNegocioGest" element={<VistaNegocioGestor/>}/>
          <Route path="/Formulario" element={<Formulario/>}/>
          <Route path="/SetForm" element={<SetForm/>}/>
          <Route path="/Buzon" element={<Buzon/>}/>
          <Route path="/Servicios" element={<Servicios/>}/>
          <Route path="/Resultados" element={<Resultados/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;