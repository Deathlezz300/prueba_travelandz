import { Navigate, Outlet } from "react-router-dom"
import { useAuth } from "../Hooks/useAuth"
import { useEffect } from "react";

export const AuthRout = () => {

  const {authenticated}=useAuth();


  if(authenticated) return <Navigate to="/transfers"/>

  return (
    <>
      <Outlet/>
    </>
  )
  
}
