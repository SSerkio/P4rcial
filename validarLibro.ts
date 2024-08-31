import { Request, Response, NextFunction } from 'express';
import { esquemaLibro, esquemaActualizacionLibro } from '../validacion/validacionLibro';

export const validarLibro = (req: Request, res: Response, next: NextFunction) => {
  const { error } = esquemaLibro.validate(req.body);
  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }
  next();
};

export const validarActualizacionLibro = (req: Request, res: Response, next: NextFunction) => {
  const { error } = esquemaActualizacionLibro.validate(req.body);
  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }
  next();
};