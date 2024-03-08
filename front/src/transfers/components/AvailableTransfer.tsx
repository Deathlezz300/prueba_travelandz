import { useTransfer } from "../../Hooks/useTransfer"
import { TransferCard } from "./TransferCard"


export const AvailableTransfer = () => {

  const {Services,status}=useTransfer()

  return (
    <section className="w-[100%] flex justify-center items-center">
      <div className="w-[75%] grid py-10 gap-5 grid-cols-3 grid-flow-row">
        {
          status!='loading' && Services.length>0 ? Services.map(ser=>{
            return <TransferCard transfer={ser}/>
          }) :''
        }
      </div>
    </section>
  )
}
