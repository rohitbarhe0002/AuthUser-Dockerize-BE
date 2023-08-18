import { Router } from 'express';
import AuthController from '../controllers/auth.controller';
import limiter from '../middlewares/rateLimit.middlewares';
import AuthService from '../services/auth.services';


const router = Router();
const authService = new AuthService();
const authController = new AuthController(authService);

router.post('/login', limiter, authController.login.bind(authController));

export default router;
