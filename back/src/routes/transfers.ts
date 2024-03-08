import {Router} from 'express'
import { PostBookTransfer, cancelBooking, getBookList, getDetailBook, getTransfers } from '../controllers/TransferController'
import { validarJWT } from '../middleware/validateJWT'

const TransferRouter=Router()


TransferRouter.get('/:ubi/:hotel/:inbound/:outbound/:adults/:children/:infants',getTransfers)

TransferRouter.post('/book',validarJWT,PostBookTransfer)

TransferRouter.get('/list',validarJWT,getBookList)

TransferRouter.get('/detail/:reference',validarJWT,getDetailBook);

TransferRouter.delete('/booking/:reference',validarJWT,cancelBooking)

export default TransferRouter