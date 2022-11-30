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
          <Route path="/Configuracion" element={<Configuracion/>}/>
          <Route path="/dashboard" element={<Dashboard/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
