import {Router} from 'express'
import { LoginAccount, RegisterAccount, ValidateToken } from '../controllers/AuthController';
import { validarJWT } from '../middleware/validateJWT';

const AuthRouter=Router();


AuthRouter.post('/register',RegisterAccount);
AuthRouter.post('/login',LoginAccount);
AuthRouter.get('/validate',validarJWT,ValidateToken);

export default AuthRouter