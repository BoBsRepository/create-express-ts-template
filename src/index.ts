import express, { Express, Request, Response, NextFunction } from 'express';
import * as dotenv from 'dotenv';
import CheckError from './util/checkError';
import authRoutes from './routes/authRoutes';
dotenv.config();
import './database/connectDb';
const app: Express = express();

app.use(express.json());
app.use('/api/auth', authRoutes);

app.get('/', (req: Request, res: Response) => {
  res.json({ success: true, message: 'API IS WORKING 🥳' });
});

app.all('*', (req: Request, res: Response, next: NextFunction) => {
  next(new CheckError(`Can't find ${req.originalUrl} on this server!`, 404));
});

app.listen(process.env.PORT, () => {
  console.log(`[⚡] Server Is Running on http://localhost:${process.env.PORT}`);
});

export default app;
