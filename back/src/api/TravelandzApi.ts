import axios, { InternalAxiosRequestConfig } from 'axios';
import crypto from 'crypto';
import { getSignature } from '../helpers/getSignature';

const TravelandzApi=axios.create({
    baseURL:'https://api.test.hotelbeds.com/transfer-api/1.0'
})

const TravelandzApiCache=axios.create({
    baseURL:'https://api.test.hotelbeds.com/transfer-cache-api/1.0'
})

TravelandzApi.interceptors.request.use((config:InternalAxiosRequestConfig)=>{
    config.headers['Api-key']=process.env.apikey;
    config.headers['X-Signature']=getSignature()
    return config;
})

TravelandzApiCache.interceptors.request.use((config:InternalAxiosRequestConfig)=>{
    config.headers['Api-key']=process.env.apikey;
    config.headers['X-Signature']=getSignature()
    return config;
})

export {
    TravelandzApi,
    TravelandzApiCache
}