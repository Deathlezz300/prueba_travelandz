import {DataSource} from 'typeorm'
import { User } from '../Entity/User'
import { Booking } from '../Entity/Booking';


export const AppDataSource= new DataSource({
    type:'postgres',
    host:'localhost',
    port:5432,
    username:'postgres',
    synchronize:true,
    logging:true,
    entities:[User,Booking]
})

export async function connectDatabase(){
    AppDataSource.setOptions({
        password:process.env.DB_PASSWORD,
        database:process.env.DB_NAME
    })
    await AppDataSource.initialize();
    console.log('Database connected')
}