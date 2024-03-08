import { useLoaderData } from "react-router-dom"
import { AvailableTransfer } from "../components/AvailableTransfer"
import { Filters } from "../components/Filters"
import { VehiclesType } from "../../Interface/Transfer/TransferResponse.interface"

export const Home = () => {

  const data:any=useLoaderData();

  return (
    <>
      <Filters vehiculos={data!.VehiclesTypes as VehiclesType[]}/>
      <AvailableTransfer/>
    </>
  )
}
