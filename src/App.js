import {createBrowserRouter, RouterProvider, Route, Router, Routes} from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom/client";
import Login from "./Components/Login/Login"
import DashboardGestor from "./Components/Dashboard/DashboardGestor/DashboardGestor"
import Configuracion from "./Components/Configuracion/Configuracion";
import ProtectedRoutes from "./RootForm/ProtectedRoutes/ProtectedRoutes";
import NavBar3 from "./Common/NavBar3/NavBar3";
import Container from "./RootForm/Container/Container";
import Dashboard from "./Components/Dashboard/Dashboard";
import ListaNegocios from "./Components/ListaNegocios/ListaNegocios";
import VistaNegocioGestor from "./Components/VistaNegocioGestor/VistaNegocioGestor"
import VistaNegocioAdmin from "./Components/VistaNegocioAdmin/VistaNegocioAdmin"
import EmpleadoInfo from "./Components/EmpleadoInfo/EmpleadoInfo";
import Formulario from "./Components/Formulario/Formulario";
import ProgramarForm from "./Components/ProgramarForm/ProgramarForm";


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
        <Route path="/login" element={<Login/>}/>
        <Route element={<ProtectedRoutes/>}>
          <Route path="/Negocios" element={<ListaNegocios/>}/>
          <Route path="/Negocio-vista" element={<VistaNegocioAdmin/>}/>
          <Route path="/Empleado-vista" element={<EmpleadoInfo/>}/>
          <Route path="/Configuracion" element={<Configuracion/>}/>
          <Route path="/Dashboard" element={<Dashboard/>}/>
          <Route path="/VistaNegocioGest" element={<VistaNegocioGestor/>}/>
          <Route path="/Formulario" element={<Formulario/>}/>
          <Route path="/ProgramarForm" element={<ProgramarForm/>}/>
        </Route>
       
      </Routes>
    </div>
  );
}

export default App;
