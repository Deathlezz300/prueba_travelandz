import {Navigate, Outlet} from "react-router-dom"
import { useAuth } from "../Hooks/useAuth"
import { NavBar } from "./components/NavBar";

export const Transfer = () => {

    const {authenticated}=useAuth();

  if(!authenticated) return <Navigate to="/auth/login"/>

    return(
      <>
        <NavBar/>
        <Outlet/>
      </>
    )


}
