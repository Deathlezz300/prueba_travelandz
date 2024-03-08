import { Request,Response } from "express";
import { getMatchCitys, getMatchCountries, getPossibleHotels, getTransferTypes, getVehicleTypes } from "../services/FilterService";


const getFilterData=async(req:Request,res:Response)=>{

    try{

        const vehciles=await getVehicleTypes();


        let VehiclesTypes:any[]=[];

        vehciles.forEach(ve=>{
            VehiclesTypes.find(s=>ve.masterVehicleCode===s.masterVehicleCode) ? '' : VehiclesTypes.push(ve);
        })

        return res.status(200).json({
            VehiclesTypes,
        })


    }catch(error){
        console.log(error)
    }


}

const getHotelsSearch=async(req:Request,res:Response)=>{

    const data=await getPossibleHotels(req)

    return res.status(200).json(data)

}

const getPossiblesCities=async(req:Request,res:Response)=>{
    
    console.log(req.params);

    console.log(req.query);

    const data=await getMatchCitys(req);

    return res.status(200).json(data)

}

const getPossibleCountries=async(req:Request,res:Response)=>{

    const data=await getMatchCountries(req);

    return res.status(200).json(data);

}


export {
    getFilterData,
    getHotelsSearch,
    getPossiblesCities,
    getPossibleCountries
}