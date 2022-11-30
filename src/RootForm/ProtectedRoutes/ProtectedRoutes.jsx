import { Outlet } from "react-router-dom";
import Login from "../../Components/Login/Login";

const useAuth=()=>{
    const auth=localStorage.getItem('auth')==='true';
    const user = {loggedIn: auth};
    console.log(user);
    return user && user.loggedIn;
}

const ProtectedRoutes=()=>{
    const isAuth = useAuth();
    return isAuth? <Outlet/> : <Login/>;
}

export default ProtectedRoutes;