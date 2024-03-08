import {Request,Response} from 'express'
import { RegisterUser, findUser, findUserId } from '../services/AuthService'
import { generarJWT } from '../utils/generateJWT';
import { customRequest } from '../interface/Auth/AuthInterface';

const RegisterAccount=async(req:Request,res:Response)=>{
    
    try{

        const data=await RegisterUser(req);

        return res.status(200).json(data);

    }catch(error){
        console.log(error)
    }

}

const LoginAccount=async(req:Request,res:Response)=>{

    try{

        const user=await findUser(req);

        if(!user){
            return res.status(400).json({
                ok:false,
                message:"Credentials doesn't match"
            })
        }

        const token=await generarJWT(user.id,user.name+' '+user.surname);

        return res.status(200).json({
            ok:true,
            name:user.name+' '+user.surname,
            token
        })

    }catch(error){
        console.log(error)
    }

}

const ValidateToken=async(req:customRequest,res:Response)=>{

    const user=await findUserId(req.id!);

    if(!user){
        return res.status(404).json({
            ok:false,
            message:"User id doesn't exists"
        })
    }

    const token=await generarJWT(user.id,user.name+' '+user.surname);

    return res.status(200).json({
        ok:true,
        name:user.name+' '+user.surname,
        token
    })

}

export{
    RegisterAccount,
    LoginAccount,
    ValidateToken
}