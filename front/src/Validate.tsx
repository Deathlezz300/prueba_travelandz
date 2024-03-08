import  { useEffect } from 'react'
import { useLoaderData, Outlet } from 'react-router-dom'
import { useAuth } from './Hooks/useAuth';

export const Validate = () => {

    const data:any=useLoaderData();

    const {onValidateToken}=useAuth();


    useEffect(()=>{
        if(data){
            onValidateToken(data);
        }
    },[])

  return (
    <Outlet></Outlet>
  )
}
