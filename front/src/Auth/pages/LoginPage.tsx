import logo from '../../assets/logo.webp'
import { Link } from 'react-router-dom'
import {useForm} from 'react-hook-form'
import { useAuth } from '../../Hooks/useAuth'

export interface inputDataLogin{
    name:string,
    surname:string
}

export const LoginPage = () => {

    const {register,handleSubmit,formState:{errors}}=useForm<inputDataLogin>()

    const onSubmitForm=(DataForm:inputDataLogin)=>{
        onLogin(DataForm);
    }

    const {onLogin,status}=useAuth();

    return (
        <section className="w-[100%] flex justify-center items-center h-svh">

        <form onSubmit={handleSubmit(onSubmitForm)} className="w-[30%] gap-5 flex flex-col items-center bg-white shadow-md rounded-lg p-4">
            <img src={logo} className="w-[20%]" alt="" />
            <div className="w-[95%] flex flex-col gap-2 relative">
                <span className="font-medium">Name</span>
                <input {...register('name',{
                    required:'Name is required'
                })} 
                className="rounded-md p-2 bg-gray-200 text-black font-normal" type="text"/>
                <label className={`font-semibold text-red-600 text-sm absolute top-[73px] 
                    ${errors.name ? 'block' : 'hidden'}`} 
                    htmlFor="">{errors.name?.message}</label>
            </div>
            <div className="w-[95%] flex flex-col gap-2 relative">
                <span className="font-medium">Last Name</span>
                <input {...register('surname',{
                    required:'Last name is required'
                })} 
                className="rounded-md p-2 bg-gray-200 text-black font-normal" type="text"/>
                <label className={`font-semibold text-red-600 text-sm absolute top-[73px] 
                    ${errors.surname ? 'block' : 'hidden'}`} 
                    htmlFor="">{errors.surname?.message}</label>
            </div>
            
            <div className="w-[95%] flex justify-end pt-2">
                <button disabled={status==='loading' ? true :false} type="submit" className="p-3 w-[100%] bg-blue-600 text-white font-bold rounded-md
                text-lg"
                >
                    {
                        status==='loading' ? (
                            <svg className="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24"></svg>
                        ) 
                        :'Login'
                    }
                </button>
            </div>

            <div className={`w-[95%] flex justify-end mt-1 text-sm`}>
                <Link to='/auth/register' className="font-bold text-blue-500" >Don't have an account?</Link>
            </div>

        </form>

    </section>
  )
}
