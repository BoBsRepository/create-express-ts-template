import express, { Router } from 'express';
import { testRoute } from '../controllers/authController';
const route: Router = express.Router();

route.get('/', testRoute);

export default route;
