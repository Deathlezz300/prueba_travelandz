import { FC, useState } from "react"
import { BookingListResponse } from "../../Interface/Transfer/BookingListResponse.interface"
import { useTransfer } from "../../Hooks/useTransfer";
import { LoaderButtons } from "../../shared/components/LoaderButtons";

interface props{
    transfer:BookingListResponse
}


export const BookedTransferCard:FC<props> = ({transfer}) => {
 
  const [status,SetStatus]=useState<string>();

  const {changeStatusTransfer}=useTransfer();

  const onCancelTransfer=async()=>{
    SetStatus('loading');
    await changeStatusTransfer(transfer.reference);
    SetStatus('')
  }

  return (
    <div className="w-[100%] rounded-lg flex bg-white shadow-md flex-col gap-2 p-2 py-3">
            <div className={`flex px-4 pb-2 gap-2 flex-col ${transfer.status!='CONFIRMED' ? 'justify-center h-full' : ''}`}>
                <span>Transfer ID:{transfer.reference}</span>
                <span className={`${transfer.status==='CONFIRMED' ?
                'text-green-600' : 'text-red-600'} before:content-['Status:'] before:text-black`} >
                {' '+transfer.status}</span>
                <span>Amount:{transfer.totalAmount} {transfer.currency}</span>
                {
                    transfer.modificationsPolicies.cancellation && transfer.status==='CONFIRMED' ? 
                    <button type="button" disabled={status==='loading' ? true :false}  onClick={onCancelTransfer}
                    className={`mt-2 text-white p-2 font-medium bg-black rounded-md
                    cursor-pointer ${status==='loading' ? 'justify-center items-center' : ''}`}>
                        {
                            status==='loading' ? (
                                <LoaderButtons/>
                            ) : 'Cancel'
                        }
                    </button> :''
                }
            </div>
        </div>
  )
}
