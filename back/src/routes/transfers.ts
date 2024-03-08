import {Router} from 'express'
import { PostBookTransfer, cancelBooking, getBookList, getDetailBook, getTransfers } from '../controllers/TransferController'
import { validarJWT } from '../middleware/validateJWT'
import { check } from 'express-validator'
import { validarCampos } from '../middleware/validarCampos'

const TransferRouter=Router()


TransferRouter.get('/:ubi/:hotel/:inbound/:outbound/:adults/:children/:infants',getTransfers)

TransferRouter.post('/book',[
    validarJWT,
    check('rateKey').not().isEmpty(),
    check('direction').not().isEmpty(),
    validarCampos
],PostBookTransfer)

TransferRouter.get('/list',validarJWT,getBookList)

TransferRouter.get('/detail/:reference',validarJWT,getDetailBook);

TransferRouter.delete('/booking/:reference',validarJWT,cancelBooking)

export default TransferRouter