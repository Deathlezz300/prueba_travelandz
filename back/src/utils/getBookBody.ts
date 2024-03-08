import {Request} from 'express'
import { User } from '../Entity/User'

export const getBookingBody=(req:Request,user:User)=>{

    const object={
        language: "en",
        holder: {
            name: user.name,
            surname: user.surname,
            email: user.email,
            phone: user.phone
        },
        transfers: [
            {
                rateKey:req.body.rateKey,
                transferDetails: [
                    {
                        type: "FLIGHT",
                        direction: req.body.direction,
                        code: "XR1234",
                        companyName: "null"
                    }
                ]
            }
        ],
        
        clientReference: `${user.name}${user.id}`,
        welcomeMessage: `Welcome ${user.name} ${user.surname}`,
        remark: "Booking remarks go here."
    }

    return object;

}