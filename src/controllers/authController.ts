import { Request, Response } from 'express';
import asyncHandler from '../util/catchAsync';

export const testRoute = asyncHandler(async (req: Request, res: Response) => {
  res.json({ success: true });
});
