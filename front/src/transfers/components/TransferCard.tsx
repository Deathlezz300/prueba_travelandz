import { FC, useState } from "react"
import { Service } from "../../Interface/Transfer/TransferResponse.interface"
import { BookTransfer } from "../../Helpers/TransferApi"
import { showAlert } from "../../Helpers/ShowAlert"
import { LoaderButtons } from "../../shared/components/LoaderButtons"

interface props{
    transfer:Service
}

export const TransferCard:FC<props> = ({transfer}) => {

    const [status,SetStatus]=useState('');

    const onBookTransfer=async()=>{
        SetStatus('loading');
       const res=await BookTransfer(transfer.rateKey,transfer.direction);

       if(!res.ok){
            showAlert(res.message,'error')
       }else{
            showAlert(`Transfer booked reference:${res.reference}`,'success')
       }

       SetStatus('');

    }

    return (
        <div className="w-[100%] rounded-lg flex bg-white shadow-md flex-col gap-2">
            <img src={transfer.content.images[0].url} 
            className="w-[100%] rounded-lg rounded-b-none object-cover object-center bg-white
            border-b-[2px] border-b-[#8a8a8a]" alt="" />
            <div className="flex px-4 pb-2 gap-2 flex-col">
                <span>From:{transfer.pickupInformation.from.description}</span>
                <span>To:{transfer.pickupInformation.to.description}</span>
                <span className="">Direction:{transfer.direction}</span>
                <span>Type:{transfer.transferType}</span>
                <div className="w-[100%] justify-between flex">
                    <span>Category:{transfer.category.name}</span>
                    <span className="font-semibold">Price:{transfer.price.totalAmount} {transfer.price.currencyId}</span>
                </div>
                <button type="button" disabled={status==='loading' ? true :false}   onClick={onBookTransfer} 
                className={`p-2 bg-black w-[100%] cursor-pointer text-lg 
                text-white font-medium rounded-lg ${status==='loading' ? 'justify-center items-center' : ''}`}
                >{
                    status==='loading'? <LoaderButtons/> : 'Book Transfer'
                }</button>
            </div>
        </div>
  )
}
