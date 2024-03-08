import {Request,Response} from 'express'
import {TravelandzApi} from '../api/TravelandzApi'
import { Transfer } from '../interface/Transfers/Transfers.interface'
import { BookTransfer, BookingDetail, BringTransfers, ListBookings } from '../services/TransferService'
import { customRequest } from '../interface/Auth/AuthInterface'

const getTransfers=async(req:Request,res:Response)=>{

    try{


        const data=await BringTransfers(req)
        

        return res.status(200).json(data)


    }catch(error){
        console.log(error)
    }

}

const PostBookTransfer=async(req:Request,res:Response)=>{

    try{

        const data=await BookTransfer(req);

        return res.status(200).json(data);

    }catch(error){
        return res.status(500).json(error)
    }
}

const getBookList=async(req:Request,res:Response)=>{

    try{

        const List=await ListBookings(req);

        return res.status(200).json(List)
        

    }catch(error){
        console.log(error)
    }

}

const getDetailBook=async(req:customRequest,res:Response)=>{

    try{

        const data=await BookingDetail(req)

        return res.status(200).json(data);

    }catch(error:any){
        res.status(error.code).json(error.data)
    }

}

const cancelBooking=async(req:Request,res:Response)=>{

    try{

        const data=await BookingDetail(req);

        return res.status(200).json(data);

    }catch(error:any){
        res.status(error.code).json({
            ok:false,
            message:error.data
        })
    }

}


export {
    getTransfers,
    PostBookTransfer,
    getBookList,
    getDetailBook,
    cancelBooking
}


            
