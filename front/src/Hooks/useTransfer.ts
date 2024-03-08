import { useDispatch, useSelector } from "react-redux";
import { BringBookList, CancelTransfer, getTransfers } from "../Helpers/TransferApi"
import { RootState } from "../store/store";
import { changeStatusTransferRedux, setServices, setTransfersBooked } from "../store/TransferSlice";
import { changeStatus } from "../store/TransferSlice";
import { showAlert } from "../Helpers/ShowAlert";

export const useTransfer=()=>{
 
    const {status,Services,transfersBooked}=useSelector((state:RootState)=>state.transfer);

    const dispatch=useDispatch();

    const onCallTransfers=async(city:string,hotel:string,inbound:Date,outbound:Date,
        adults:string,children:string,vehicle:string)=>{

        dispatch(changeStatus('loading'))

        const transfers=await getTransfers(city,hotel,inbound,outbound,
            adults,children,vehicle);

        dispatch(setServices(transfers.services));

    }

    const onBringBookedTransfers=async(from:Date,to:Date)=>{

        dispatch(changeStatus('loading'));

        const data=await BringBookList(from,to);

        dispatch(setTransfersBooked(data))

    }


    const changeStatusTransfer=async(reference:string)=>{

        const data=await CancelTransfer(reference);
        
        console.log(data);

        dispatch(changeStatusTransferRedux(reference));
        showAlert(data.message,'success');
            
        return true
        

    }

    return{
        onCallTransfers,
        status,
        Services,
        transfersBooked,
        onBringBookedTransfers,
        changeStatusTransfer
    }

}