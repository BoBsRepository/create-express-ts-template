import express, { Router } from 'express';
import { testRoute, login, register } from '../controllers/authController';
const router: Router = express.Router();

router.get('/', testRoute);
router.post('/login', login);
router.post('/register', register);

export default router;
