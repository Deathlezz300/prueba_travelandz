import { configureStore} from "@reduxjs/toolkit";
import { AuthSlice } from "./AuthSlice";
import { TransferSlice } from "./TransferSlice";
 
export const store=configureStore({
    middleware:(getDefaultMiddleware)=>getDefaultMiddleware({serializableCheck:false}),
    reducer:{
        auth:AuthSlice.reducer,
        transfer:TransferSlice.reducer
    }
});

export type RootState =ReturnType<typeof store.getState>