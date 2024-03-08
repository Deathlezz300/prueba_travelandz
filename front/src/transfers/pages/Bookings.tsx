import { useState } from "react"
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";
import { useTransfer } from "../../Hooks/useTransfer";
import { BookedTransferList } from "../components/BookedTransferList";
import { LoaderButtons } from "../../shared/components/LoaderButtons";

export const Bookings = () => {

  const {status,onBringBookedTransfers}=useTransfer();

  const [firstDate,SetDate]=useState<Date>();

  const [seconDate,SetSeconDate]=useState<Date>();

  const onSearchBookedTransfers=()=>{
    onBringBookedTransfers(firstDate!,seconDate!)
  }

  return (
    <section className="w-[100%] flex flex-col items-center">
      <div className="w-[90%] flex gap-2 justify-start items-end pt-4">
          <div className="flex flex-col gap-2">
              <span className="font-medium">From</span>
              <DatePicker required className="shadow-md p-2 rounded-md outline-none" 
              onChange={(date:Date)=>SetDate(date)} selected={firstDate}/>
          </div>
          <div className="flex flex-col gap-2">
              <span className="font-medium">To</span>
              <DatePicker required className="shadow-md p-2 rounded-md outline-none" 
              onChange={(date:Date)=>SetSeconDate(date)} selected={seconDate}/>
          </div>
          <button type="button" disabled={status==='loading' ? true : false} 
          onClick={onSearchBookedTransfers} className={`text-white h-fit font-medium bg-black
          p-2 rounded-md w-[10%] cursor-pointer flex justify-center items-center`}>
            {
                        status==='loading' ?
                        (
                            <LoaderButtons/>
                        ) : 'Search'
                    }
          </button>
      </div>
      <BookedTransferList/>
    </section>
  )
}
