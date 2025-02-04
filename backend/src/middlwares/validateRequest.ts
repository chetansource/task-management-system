import { Request, Response, NextFunction } from 'express';
import { AnyZodObject, ZodError } from 'zod';

export const validateRequest = (schema: AnyZodObject) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      await schema.parseAsync(req.body);
      next();
    } catch (err){
      if (err instanceof ZodError) {
        res.status(400).json({ success: false, message: 'Validation failed', error: err.errors });
        return;
      } else if (err instanceof Error) {
        res.status(500).json({ success: false, message: 'Something went wrong', error: err.message });
        return;
      }
      res.status(500).json({ success: false, message: 'Something went wrong', error: 'Unknown error' });
     }
  };
};