import PruebaApi from "../Api/PruebaApi"
import { inputDataLogin } from "../Auth/pages/LoginPage"
import { inputFieldsRegister } from "../Auth/pages/RegisterPage";
import { LoginResponse, RegisterResponse } from "../Interface/Auth/ApiAuth.interface";
import Cookies from "js-cookie";

export const LoginApiCall=async(formData:inputDataLogin)=>{

    try{

        const {data}=await PruebaApi.post<LoginResponse>('/auth/login',formData);

        return data;

    }catch(error:any){
        return error.response.data;
    }

}

export const RegiserApiCall=async(formData:inputFieldsRegister):Promise<RegisterResponse | any>=>{

    try{

        const {data}=await PruebaApi.post<RegisterResponse>('/auth/register',formData)

        return data;

    }catch(error:any){
        return error.response.data
    }

}

export const ValidateTokenApi=async()=>{

    try{

        if(!Cookies.get('token')){
            return null;
        }

        const {data}=await PruebaApi.get<LoginResponse>('/auth/validate');

        return data;
    }catch(error){

    }

}