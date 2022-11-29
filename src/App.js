import {createBrowserRouter, RouterProvider, Route, Router, Routes} from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom/client";
import Login from "./Components/Login/Login"
import ListaNegocios from "./Components/ListaNegocios/ListaNegocios"

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
        <Route path="/ListaNegocios" element={<ListaNegocios/>}/>
      </Routes>
    </div>
  );
}

export default App;
