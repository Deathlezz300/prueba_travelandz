import { createSlice } from '@reduxjs/toolkit';

export const AuthSlice = createSlice({
    name: 'Auth',
    initialState: {
     status:null,
     authenticated:false,
     user:'',
     error:'',
    },
    reducers: {
         changeStatus:(state,{payload})=>{
            state.status=payload;
         },
         setUser:(state,{payload})=>{
            state.status=null;
            state.user=payload;
            state.authenticated=true;
         },
         setError:(state,{payload})=>{
            state.error=payload;
            state.status=null;
         },
         LogOut:(state)=>{
            state.user='';
            state.authenticated=false;
         }

    }
});


// Action creators are generated for each case reducer function
export const { changeStatus,setUser,setError,LogOut } = AuthSlice.actions;