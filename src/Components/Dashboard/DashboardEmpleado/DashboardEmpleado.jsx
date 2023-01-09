import React from "react";
import "./DashboardEmpleado.scss";
import Post1 from "../DashboardGestor/Post1/Post1";
import PostHeader1 from "../DashboardGestor/PostHeader1/PostHeader1"; 

const DashboardEmpleado=()=>{
    return(
        <>
             <div className="post-section">
                <div className="post-header-1">
                    <PostHeader1/>
                </div>
                <Post1/>
                <Post1/>
                <Post1/>
                <Post1/>
            </div>
        </>  
    );
}

export default DashboardEmpleado;