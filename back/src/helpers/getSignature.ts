import crypto from 'crypto';

export const getSignature=():string=>{


   
    const timestamp = Math.floor(Date.now() / 1000).toString();

   
    const dataToHash = process.env.apikey! + process.env.secret! + timestamp;

    const hashedData = crypto.createHash('sha256').update(dataToHash).digest('hex');

    return hashedData;

}