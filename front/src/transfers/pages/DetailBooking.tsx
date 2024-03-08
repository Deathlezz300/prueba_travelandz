import { useParams } from "react-router-dom"


export const DetailBooking = () => {

  const {reference}=useParams();
  return (
    <div>DetailBooking {reference} </div>
  )
}
