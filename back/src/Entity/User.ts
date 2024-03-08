import { BaseEntity, Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Booking } from "./Booking";


@Entity()
export class User extends BaseEntity{

    @PrimaryGeneratedColumn('increment')
    id!:number

    @Column()
    name!:string

    @Column()
    surname!:string

    @Column()
    email!:string

    @Column()
    phone!:string
    
    @CreateDateColumn()
    createdDate:string

    @OneToMany(()=>Booking,(booking)=>booking.reference,{nullable:true})
    bookingReference:Booking[]

}