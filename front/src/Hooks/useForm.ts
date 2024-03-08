import {ChangeEvent, useState} from 'react'

export const useForm=<T extends object>(inputForm:T)=>{
    
    const [form,SetForm]=useState(inputForm);


    const onInputChange=({target}:ChangeEvent<HTMLInputElement | HTMLSelectElement>)=>{

        const {name,value}=target;

        SetForm({
            ...form,
            [name]:value
        });

    }

    const setValue=(value:string | any,name:string)=>{

        SetForm({
            ...form,
            [name]:value
        })

    }


    return {
        ...form,
        onInputChange,
        setValue
    }

}