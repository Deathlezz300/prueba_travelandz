import {Response } from "express";
import jwt,{JwtPayload,Secret} from 'jsonwebtoken';
import { customRequest } from "../interface/Auth/AuthInterface";

export const validarJWT=(req:customRequest,res:Response,next:Function)=>{
    
    const token=req.cookies.token;

    if(!token){
        return res.status(401).json({
            ok:false,
            message:'No token to validate'
        })
    }

    try{

        const seed=process.env.SECRET_JWT_SEED as string;
        const{id,name}=jwt.verify(token,seed) as JwtPayload;

        console.log(req.params)

        req.id=id;
        req.name=name;


    }catch(error){
        return res.status(401).json({
            ok:false,
            message:'Invalid token'
        })
    }

    next()


}