import express, { Express, Request, Response, NextFunction } from 'express';
import * as dotenv from 'dotenv';
import authRoutes from './routes/authRoutes';
const app: Express = express();

dotenv.config();
app.use(express.json());
app.use('/api/auth', authRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Server Is Running on Port ${process.env.PORT}`);
});
