import {Request} from 'express'

export interface customRequest extends Request{
    id?:number,
    name?:string
}