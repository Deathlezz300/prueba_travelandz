import {Request} from 'express'
import { User } from '../Entity/User'
import { AppDataSource } from '../DB/connection'
import { Like } from 'typeorm'
import { generarJWT } from '../utils/generateJWT'
import { customRequest } from '../interface/Auth/AuthInterface'


const RegisterUser=async(req:Request)=>{


    try{

        const userRepository=AppDataSource.getRepository(User);

        const userDuplicate=await userRepository.findOneBy({
            email:req.body.email
        })

        if(userDuplicate){
            return {
                ok:false,
                message:'User already exists'
            }
        }

        const newUser=new User();

        Object.assign(newUser,req.body);

        const UserBd=await userRepository.save(newUser)

        const token=await generarJWT(UserBd.id,UserBd.name+' '+UserBd.surname);

        return {
            ok:true,
            name:UserBd.name+' '+UserBd.surname,
            token
        }

    }catch(error){
        console.log(error)
    }


}

const findUser=async(req:Request)=>{


    try{

        const userRepository=AppDataSource.getRepository(User);

        const userFind=await userRepository.findOne({
            where:{
                name:Like(`%${req.body.name}%`),
                surname:Like(`%${req.body.surname}%`)
            }
        })
        
        return userFind;

    }catch(error){
        console.log(error)
    }
}


const findUserId=async(id:number)=>{

    try{

        const userRepository=AppDataSource.getRepository(User);

        const userFind=await userRepository.findOneBy({
            id
        })

        return userFind

    }catch(error){
        console.log(error)
    }

}

export{
    RegisterUser,
    findUser,
    findUserId
}