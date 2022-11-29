import {createBrowserRouter, RouterProvider, Route, Router, Routes} from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom/client";
import Login from "./Components/Login/Login"
import VistaNegocioAdmin from "./Components/VistaNegocioAdmin/VistaNegocioAdmin"

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
        <Route path="/VistaNegocioAdmin" element={<VistaNegocioAdmin/>}/>
      </Routes>
    </div>
  );
}

export default App;
