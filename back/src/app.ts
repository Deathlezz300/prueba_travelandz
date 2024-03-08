import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import TransferRouter from './routes/transfers';
import FilterRouter from './routes/Filters';
import cookieParser from 'cookie-parser';
import "reflect-metadata"
import { connectDatabase } from './DB/connection';
import AuthRouter from './routes/Auth';

const app=express();

dotenv.config();
app.use(cors({origin:'http://localhost:5173',credentials:true}));
app.use(express.json());
app.use(cookieParser())

app.use('/api/transfers',TransferRouter);
app.use('/api/filters',FilterRouter);
app.use('/api/auth',AuthRouter)

connectDatabase();

app.listen(process.env.PORT,()=>{
    console.log(`Servidor corriendo en el puerto ${process.env.PORT}`)
})