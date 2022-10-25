import {createBrowserRouter, RouterProvider, Route} from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom/client";
import Login from "./Components/Login/Login"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login/>,
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
