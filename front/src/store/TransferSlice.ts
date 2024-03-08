import { createSlice } from '@reduxjs/toolkit';
import { Service } from '../Interface/Transfer/TransferResponse.interface';
import { BookingListResponse } from '../Interface/Transfer/BookingListResponse.interface';

export const TransferSlice = createSlice({
    name: 'Transfer',
    initialState: {
     status:'',
     Services:[] as Service[],
     transfersBooked:[] as BookingListResponse[]
    },
    reducers: {
         changeStatus:(state,{payload})=>{
            state.status=payload;
         },
         setServices:(state,{payload})=>{
            state.Services=payload;
            state.status='';
         },
         setTransfersBooked:(state,{payload})=>{
            state.transfersBooked=payload;
            state.status='';
         },
         changeStatusTransferRedux:(state,{payload}:{payload:string})=>{
            state.transfersBooked=state.transfersBooked.map(tr=>{
               if(tr.reference===payload){
                  return {
                     ...tr,
                     status:'CANCELLED'
                  }
               }

               return tr
            })
         }
    }
});


// Action creators are generated for each case reducer function
export const { changeStatus,setServices,setTransfersBooked,
changeStatusTransferRedux, } = TransferSlice.actions;