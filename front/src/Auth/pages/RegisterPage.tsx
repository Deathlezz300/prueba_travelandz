import { Link } from "react-router-dom"
import logo from '../../assets/logo.webp'
import {useForm} from 'react-hook-form'
import { useAuth } from "../../Hooks/useAuth"

export interface inputFieldsRegister{
    name:string,
    surname:string,
    email:string,
    phone:string
}

export const RegisterPage = () => {


    const {register,handleSubmit,formState:{errors}}=useForm<inputFieldsRegister>();

    const {status,onRegiser}=useAuth()

    const onSubmitForm=(formData:inputFieldsRegister)=>{
        onRegiser(formData);
    }

    return (
        <section className="w-[100%] flex justify-center items-center h-svh">

            <form onSubmit={handleSubmit(onSubmitForm)}  
            className={`w-[30%] flex flex-col items-center bg-white shadow-md rounded-lg p-4 gap-4`}>
                <img src={logo} className="w-[20%]" alt="" />
                <div className="w-[95%] flex flex-col gap-2 relative">
                    <span className="font-medium">Name</span>
                    <input {...register('name',{
                        required:'Name is required'
                    })} 
                    className="rounded-md p-2 bg-gray-200 text-black font-normal" type="text"/>
                    <label className={`font-semibold text-red-600 top-[73px] text-sm absolute 
                    ${errors.name ? 'block' : 'hidden'}`} 
                    htmlFor="">{errors.name?.message}</label>
                </div>
                <div className="w-[95%] flex flex-col gap-2 relative">
                    <span className="font-medium">Last Name</span>
                    <input {...register('surname',{
                        required:"Last name is required"
                    })} 
                    className="rounded-md p-2 bg-gray-200 text-black font-normal" type="text"/>
                    <label className={`font-semibold text-red-600 text-sm absolute top-[73px] 
                    ${errors.surname ? 'block' : 'hidden'}`} 
                    htmlFor="">{errors.surname?.message}</label>
                </div>
                <div className="w-[95%] flex flex-col gap-2 relative">
                    <span className="font-medium">Email</span>
                    <input {...register('email',{
                        required:"Email is required",
                        pattern:{
                            value:/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message:'Must be a valid email'
                        }
                    })}
                     className="rounded-md p-2 bg-gray-200 text-black font-normal" type="email"/>
                    <label className={`font-semibold absolute top-[73px]
                    text-red-600 text-sm ${errors.email ? 'block' : 'hidden'}`} 
                    htmlFor="">{errors.email?.message}</label>
                </div>
                <div className="w-[95%] flex flex-col gap-2 relative">
                    <span className="font-medium">Phone number</span>
                    <input {...register('phone',{
                        required:"Phone number is required"
                    })}
                     className="rounded-md p-2 bg-gray-200 text-black font-normal" type="number"/>
                    <label className={`font-semibold text-red-600 text-sm absolute top-[73px] 
                    ${errors.phone ? 'block' : 'hidden'}`} 
                    htmlFor="">{errors.phone?.message}</label>
                </div>

                <div className="w-[95%] flex justify-end pt-2">
                    <button disabled={status==='loading' ? true :false} type="submit" className="p-3 w-[100%] bg-blue-600 text-white font-bold rounded-md
                    text-lg"
                    >
                        {
                        status==='loading' ? (
                            <svg className="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24"></svg>
                        ) 
                        :'Create account'
                    }
                    </button>
                </div>

                <div className="w-[95%] flex justify-end mt-1 text-sm">
                    <Link to='/auth/login' className="font-bold text-blue-500" >Already have an account?</Link>
                </div>
                
            </form>

        </section>
    )
}
