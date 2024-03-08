import { Request, raw } from "express";
import { TravelandzApi } from "../api/TravelandzApi"
import { getDates } from "../helpers/getDates"
import { BookingBody, Transfer } from "../interface/Transfers/Transfers.interface"
import { BookingList, BookingResponse } from "../interface/Api/TransferApiResponse";
import { customRequest } from '../interface/Auth/AuthInterface';
import { AppDataSource } from "../DB/connection";
import { User } from "../Entity/User";
import { Booking } from "../Entity/Booking";
import { getBookingBody } from "../utils/getBookBody";
import { getFormatedDate } from "../helpers/getFormatDate";


const BringTransfers=async(req:Request):Promise<Transfer | null>=>{

    try{

        const {ubi,inbound,outbound,adults,children,infants,hotel}=req.params;


        const {vehicle}=req.query as {vehicle:string};

        const {Date2,formattedDate}=getDates(inbound,outbound);

        const {data}=await TravelandzApi.get<Transfer>(`/availability/en/from/ATLAS/${hotel}/to/IATA/${ubi}/${Date2}/${formattedDate}/${adults}/${children}/${infants}`)


        const filtrado:Transfer={
            ...data,
            services:[
                ...data.services.filter(m=>m.vehicle.code===vehicle)
            ]
        }

        return filtrado;

    }catch(error){

        return null;

    }

}

const BookTransfer=async(req:customRequest)=>{

    try{



        const {user}=await BringUserWithBookings(req.id!)

        if(!user){
            return {
                code:404,
                message:"User doesn't exists"
            }
        }



        const BookingRepository=AppDataSource.getRepository(Booking);

        const bodyData=getBookingBody(req,user)

        const {data}=await TravelandzApi.post<BookingResponse>('/bookings',bodyData);

        const booking=new Booking();

        booking.referenceBooking=data.bookings[0].reference;

        booking.reference=user;

        await BookingRepository.save(booking);

        return{
            ok:true,
            reference:data.bookings[0].reference,
            status:data.bookings[0].status,

        }

    }catch(error){
        return {
            ok:false,
            message:'An unexpected error happened'
        }
    }

}

const BringUserWithBookings=async(id:number)=>{

    const userRepository=AppDataSource.getRepository(User);

    const user=await userRepository.findOne({
        where:{
            id
        },
        relations:{
            bookingReference:true
        }
    });

    console.log(user);

    return {
        userRepository,
        user
    };

}

const ListBookings=async(req:customRequest)=>{

    try{

        const {from,to}=req.query;

        //formato 2024-03-06

        const fromNew=getFormatedDate(from as any);
        const toNew=getFormatedDate(to as any);
    

        const {data}=await TravelandzApi.get<BookingList>(`/bookings/en?fromDate=${fromNew}&toDate=${toNew}&dateType=FROM_DATE`);

        const BookingRepository=AppDataSource.getRepository(Booking);


        const bookingsUser=await BookingRepository.find({
            where:{
                reference:{
                    id:req.id
                }
            },
            relations:{
                reference:true
            },
        });

        console.log(bookingsUser);

        console.log(data);

        return [...data.bookings.filter(book=>{
            return bookingsUser.find(m=>m.referenceBooking===book.reference)
        })]
        

    }catch(error){
        console.log(error)
    }

}

const BookingDetail=async(req:customRequest)=>{

    try{

        const {reference}=req.params;

        const userRepository=AppDataSource.getRepository(User);

        const validate=await userRepository.findOne({
            where:{
                id:req.id,
                bookingReference:{
                    referenceBooking:reference
                }
            }
        })

        if(!validate){
            throw new Error(JSON.stringify({code:401,data:'Book detail isnt from you'}));
        }

        const url=`/bookings/en/reference/${reference}`;

        let data2;

        if(req.method==='GET'){
            const {data}=await TravelandzApi.get(url);
            data2=data;
        }else{
            const {data}=await TravelandzApi.delete(url);
            data2=data;
        }

        return {
            ok:true,
            message:`Transfer Booked ${reference} cancelled`
        };

    }catch(error){
        console.log(error)
    }

}


export {
    BringTransfers,
    BookTransfer,
    ListBookings,
    BookingDetail
}

