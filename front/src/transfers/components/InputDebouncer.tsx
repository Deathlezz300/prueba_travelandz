import {useState,FC, useEffect, ChangeEvent, useRef} from 'react'
import { useForm } from '../../Hooks/useForm';

interface props{
    changeValue:Function,
    spanValue:string,
    disable:boolean,
    functionFetch:Function,
    code?:string
}

const initialObject={
    texto:''
}


export const InputDebouncer:FC<props> = ({changeValue,spanValue,disable,functionFetch,code}) => {

    const [data,SetState]=useState<any[]>([]);

    const [hide,SetHide]=useState(false);

    const {texto,onInputChange,setValue}=useForm(initialObject);

    const ref=useRef<any>(null);

    const clickItem=(value:string,code:string)=>{

        changeValue({value,code});
    
        setValue(value,'texto');

        SetHide(true);

    }

    const onInputChangeValue=(evento:ChangeEvent<HTMLInputElement>)=>{

        onInputChange(evento);

        SetHide(false);
        
    }

    useEffect(()=>{
        
        if(texto.length<=0){
            SetState([])
        }else{
            if(ref.current){
                clearTimeout(ref.current);
                ref.current=null;
            }
            ref.current=setTimeout(()=>{
                if(code){
                    functionFetch(texto,code).then((res:any)=>SetState(res));
                }else{
                    functionFetch(texto).then((res:any)=>SetState(res));
                }
            },500)
        }

    },[texto])

    return (
        <div className='w-[15%] flex flex-col relative gap-2' onFocus={()=>SetHide(false)} onBlur={()=>setTimeout(()=>SetHide(true),100)}>

            <span className='font-medium'>{spanValue}</span>
            <input disabled={disable} type="text" autoComplete='off' 
            className="p-2 rounded-md w-[95%] outline-none shadow-md" value={texto} 
            onChange={onInputChangeValue} name='texto' />

            <div className='z-10 flex flex-col w-[100%] gap-1 max-h-[100px] overflow-y-scroll absolute top-[80px]'>
                {
                    texto.length>0 && !hide && data.length ? data.map(value=>{
                        return (
                            <span key={value.code} className='cursor-pointer p-2 bg-white shadow-sm rounded-md' 
                            onClick={()=>clickItem(value.name,value.code)}>{value.name}</span>
                        ) 
                    }) : ''
                }
            </div>

        </div>
    )
}
