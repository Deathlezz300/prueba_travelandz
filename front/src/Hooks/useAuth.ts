
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../store/store";
import { inputDataLogin } from "../Auth/pages/LoginPage";
import { LoginApiCall, RegiserApiCall } from "../Helpers/AuthApi";
import { LogOut, changeStatus, setError, setUser } from "../store/AuthSlice";
import Cookies from 'js-cookie';
import { showAlert } from "../Helpers/ShowAlert";
import { useNavigate } from "react-router-dom";
import { LoginResponse } from "../Interface/Auth/ApiAuth.interface";
import { inputFieldsRegister } from "../Auth/pages/RegisterPage";

export const useAuth=()=>{


    const {user,status,authenticated}=useSelector((state:RootState)=>state.auth);

    const dispatch=useDispatch();

    const navigate=useNavigate();

    const onLogin=async(formData:inputDataLogin)=>{

        dispatch(changeStatus('loading'));

        const response=await LoginApiCall(formData);

        if(!response?.ok){
            dispatch(setError(response.message));
            showAlert(response.message,'error');
            setTimeout(()=>setError(''),300);
            return ;
        }

        Cookies.set('token',response.token);
        dispatch(setUser(response.name));
        
        return navigate('/transfers/home');

    }

    const onRegiser=async(formData:inputFieldsRegister)=>{

        dispatch(changeStatus('loading'));

        const data=await RegiserApiCall(formData);

        if(!data.ok){
            dispatch(setError(data.message));
            showAlert(data.message,'error');
            setTimeout(()=>setError(''),300);
            return ;
        }

        Cookies.set('token',data.token);
        dispatch(setUser(data.name));
        
        return navigate('/transfers/home');

    }

    const onValidateToken=async(data:LoginResponse)=>{

        if(data.ok){
            dispatch(setUser(data.name));

            Cookies.set('token',data.token);
        }


    }

    const onLogout=()=>{
        dispatch(LogOut());

        Cookies.remove('token')

        return navigate('/auth/login')
    }

    return {
        user,
        status,
        authenticated,
        onLogin,
        onRegiser,
        onValidateToken,
        onLogout
    }

}