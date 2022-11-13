import {createBrowserRouter, RouterProvider, Route, Router, Routes} from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom/client";
import Login from "./Components/Login/Login"
import Dashboard from "./Components/Dashboard/Dashboard"

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
        <Route path="/Dashboard" element={<Dashboard/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
