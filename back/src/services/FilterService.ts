import { Request } from "express";
import { TravelandzApiCache } from "../api/TravelandzApi"
import { City, HotelName, TransferTypes, VehicleTypes } from "../interface/Filters/Filters.interface";

const getPossibleHotels=async(req:Request)=>{

    const {citycode}=req.params

    const {query}=req.query as {query:string}

    console.log(query)

    const {data}=await TravelandzApiCache.get<HotelName[]>(`/hotels?fields=ALL&language=en&destinationCodes=${citycode}`);

    return [...data.filter(hotel=>hotel.name.split(' ').join().replaceAll(',','')
    .toLowerCase().includes(query.split(' ').join().replaceAll(',','').toLowerCase()))];

}

const getVehicleTypes=async()=>{

    const {data}=await TravelandzApiCache.get<VehicleTypes[]>('/masters/vehicles?fields=ALL&language=en&offset=0')

    return data

}

const getTransferTypes=async()=>{
    const {data}=await TravelandzApiCache.get<TransferTypes[]>('/masters/transferTypes?fields=ALL&language=en&offset=0');

    return data;

}

const getMatchCitys=async(req:Request)=>{

    const {query}=req.query as {query:string};

    const {countrycode}=req.params;

    const {data}=await TravelandzApiCache.get<City[]>(`/locations/destinations?fields=ALL&language=en&countryCodes=${countrycode}`)

    return [...data.filter(city=>city.name.split(' ').join().replaceAll(',','').toLowerCase()
    .includes(query.split(' ').join().replaceAll(',','').toLowerCase()))]

}

const getMatchCountries=async(req:Request)=>{

    const {query}=req.query as {query:string};

    const {data}=await TravelandzApiCache.get<City[]>(`/locations/countries?fields=ALL&language=en`)

    return [...data.filter(city=>city.name.split(' ').join().replaceAll(',','').toLowerCase()
    .includes(query.split(' ').join().replaceAll(',','').toLowerCase()))]

}



export {
    getPossibleHotels,
    getVehicleTypes,
    getTransferTypes,
    getMatchCitys,
    getMatchCountries
}