import express, { Express, Request, Response, NextFunction } from 'express';
import * as dotenv from 'dotenv';
const app: Express = express();

dotenv.config();
app.get('/', (req: Request, res: Response) => {
  res.send('Working!');
});

app.listen(process.env.PORT, () => {
  console.log(`Server Is Running on Port ${process.env.PORT}`);
});
