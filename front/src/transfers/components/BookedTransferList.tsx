
import { useTransfer } from "../../Hooks/useTransfer"
import { BookedTransferCard } from "./BookedTransferCard"



export const BookedTransferList = () => {

    const {transfersBooked,status}=useTransfer()

    return (
        <section className="w-[90%] grid grid-cols-3 grid-flow-row gap-4 py-6">
            {
                transfersBooked.length>0 && status!='loading' ?
                transfersBooked.map((transfer)=>{
                    return <BookedTransferCard key={transfer.reference} transfer={transfer}/>
                }) : ''
            }
        </section>
    )
}
