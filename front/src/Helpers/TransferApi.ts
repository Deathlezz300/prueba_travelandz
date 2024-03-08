import PruebaApi from "../Api/PruebaApi"
import { CountriesResponse, TransfersResponse } from "../Interface/Transfer/TransferResponse.interface";

interface genericResponse{
    ok:boolean,
    message:string
}

export const getFilterBaseData=async()=>{

    const {data}=await PruebaApi.get('/filters');

    return data;

}

export const getCountriesByQuery=async(query:string)=>{

    const {data}=await PruebaApi.get<CountriesResponse[]>(`/filters/countries?query=${query}`);

    return data;

}

export const getCitiesByQuery=async(query:string,countrycode:string,)=>{

    const {data}=await PruebaApi.get(`/filters/${countrycode}/cities?query=${query}`);

    return data;

}

export const getHotelsByQuery=async(query:string,citycode:string)=>{

    const {data}=await PruebaApi.get(`/filters/hotel/${citycode}?query=${query}`);

    return data;

}

export const getTransfers=async(city:string,hotel:string,inbound:Date,outbound:Date,
    adults:string,children:string,vehicle:string)=>{

    const {data}=await PruebaApi.get<TransfersResponse>(`/transfers/${city}/${hotel}/${inbound}/${outbound}/${adults}/
    ${children}/0?vehicle=${vehicle}`);

    return data;
}

export const BookTransfer=async(rateKey:string,direction:string)=>{

    try{

        const {data}=await PruebaApi.post('/transfers/book',{rateKey,direction});

        return data

    }catch(error:any){
        return error.response.data
    }

}

export const BringBookList=async(from:Date,to:Date)=>{

    const {data}=await PruebaApi.get(`/transfers/list?from=${from}&to=${to}`);

    return data;

}

export const CancelTransfer=async(reference:string)=>{

    const {data}=await PruebaApi.delete<genericResponse>(`/transfers/booking/${reference}`);

    return data;

}