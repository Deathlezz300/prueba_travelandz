import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./User";

@Entity()
export class Booking{

    @PrimaryGeneratedColumn("increment")
    id:number;

    @Column('varchar')
    referenceBooking:string

    @ManyToOne(()=>User,(user)=>user.bookingReference,{nullable:true})
    reference:User



}