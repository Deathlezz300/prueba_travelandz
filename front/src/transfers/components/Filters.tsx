import { FC, FormEvent, useState } from "react";
import { useForm } from "../../Hooks/useForm"
import { InputDebouncer } from "./InputDebouncer"
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";
import {setHours} from "date-fns";
import {setMinutes} from "date-fns";
import { TransferType, ValueFiled, VehiclesType } from "../../Interface/Transfer/TransferResponse.interface";
import { getCitiesByQuery, getCountriesByQuery, getHotelsByQuery } from '../../Helpers/TransferApi';
import { useTransfer } from "../../Hooks/useTransfer";
import { LoaderButtons } from "../../shared/components/LoaderButtons";


const initalObject={
    country:{
        value:'',
        code:''
    },
    city:{
        value:'',
        code:''
    },
    hotel:{
        value:'',
        code:''
    },
    vehicle:'',
    adults:'',
    children:'',
}

interface props{
    vehiculos:VehiclesType[],
}

export const Filters:FC<props> = ({vehiculos}) => {

    const {country,city,hotel,adults,children,setValue,onInputChange,
    vehicle}=useForm(initalObject);

    const [dateMin,SetDate]=useState<Date>();

    const [seconDate,SetSeconDate]=useState<Date>();

    const {onCallTransfers,status}=useTransfer();

    const onSubmitSearch=(evento:FormEvent)=>{
        evento.preventDefault();
        onCallTransfers(city.code,hotel.code,dateMin!,seconDate!,adults,children,vehicle);
    }


    return (
        <section className="w-[100%] flex justify-center">
            <form onSubmit={onSubmitSearch} className="w-[80%] flex-wrap gap-3 flex justify-center items-center pl-2 pt-4">
                <InputDebouncer changeValue={(value:ValueFiled)=>setValue(value,'country')}  
                spanValue="Country" disable={false} functionFetch={getCountriesByQuery}/>

                <InputDebouncer changeValue={(value:ValueFiled)=>setValue(value,'city')}  
                spanValue="City"  disable={country.value.length<=0} 
                functionFetch={getCitiesByQuery} code={country.code}/>

                <InputDebouncer changeValue={(value:ValueFiled)=>setValue(value,'hotel')}  
                spanValue="Hotel"  disable={country.value.length<=0 || city.value.length<=0}
                functionFetch={getHotelsByQuery} code={city.code}/>

                <div className="flex flex-col gap-2">
                    <span className="font-medium">Inbound</span>
                    <DatePicker required className="shadow-md rounded-md outline-none p-2" selected={dateMin} dateFormat="Pp" showTimeSelect 
                    maxTime={setHours(setMinutes(new Date(), 30), 23)} 
                    minTime={setHours(setMinutes(new Date(),new Date().getMinutes()),new Date().getHours())} minDate={new Date()} 
                    onChange={(date:Date)=>SetDate(date)}/>
                </div>

                <div className="flex flex-col gap-2">
                    <span className="font-medium">Outbound</span>
                    <DatePicker required className="p-2 outline-none rounded-md shadow-md" dateFormat="Pp" showTimeSelect selected={seconDate}
                    minDate={dateMin ? new Date(dateMin.getTime() + 172800000) : new Date(new Date().getTime()+172800000)}
                    onChange={(date:Date)=>SetSeconDate(date)}/>
                </div>

                <div className="flex flex-col gap-2 w-[15%]">
                    <span className="font-medium">Vehicle</span>
                    <select className="p-2 rounded-md outline-none shadow-md" name="vehicle"
                     id="" onChange={onInputChange} >
                        {
                            vehiculos.map(ve=>{
                                return <option key={ve.masterVehicleCode} value={ve.masterVehicleCode}>{ve.name}</option>
                            })
                        }
                    </select>
                </div>
                <div className="flex flex-col gap-2 w-[17%]">
                    <span className="font-medium">Adults</span>
                    <input required min={0} className="p-2 outline-none rounded-md shadow-md" type="number" 
                    name="adults" onChange={onInputChange} />
                </div>
                <div className="flex flex-col gap-2 w-[17%]">
                    <span className="font-medium">Children</span>
                    <input required min={0} className="p-2 outline-none rounded-md shadow-md" type="number" 
                    name="children" onChange={onInputChange} />
                </div>
                <button type="submit" disabled={status==='loading' ? true :false} 
                className={`p-2 bg-black w-[15%] font-bold text-lg text-white mt-8 rounded-md
                ${status==='loading' ? 'justify-center items-center':''}`}
                >
                    {
                        status==='loading' ?
                        (
                            <LoaderButtons/>
                        ) : 'Search'
                    }
                </button>
            </form>
        </section>
    )
}
