import {Router} from 'express'
import { LoginAccount, RegisterAccount, ValidateToken } from '../controllers/AuthController';
import { validarJWT } from '../middleware/validateJWT';
import { check } from 'express-validator';
import { validarCampos } from '../middleware/validarCampos';

const AuthRouter=Router();


AuthRouter.post('/register',[
    check('name').not().isEmpty(),
    check('surname').not().isEmpty(),
    check('email').isEmail(),
    check('phone').not().isEmpty(),
    validarCampos
],RegisterAccount);
AuthRouter.post('/login',[
    check('name').not().isEmpty(),
    check('surname').not().isEmpty(),
    validarCampos
],LoginAccount);
AuthRouter.get('/validate',validarJWT,ValidateToken);

export default AuthRouter