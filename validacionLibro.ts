import Joi from 'joi';

export const esquemaLibro = Joi.object({
  titulo: Joi.string().required(),
  autor: Joi.string().required(),
  fechaPublicacion: Joi.date().iso().required(),
  isbn: Joi.string().pattern(/^(?=(?:\D*\d){10}(?:(?:\D*\d){3})?$)[\d-]+$/).required(),
  genero: Joi.string().required()
});

export const esquemaActualizacionLibro = Joi.object({
  titulo: Joi.string(),
  autor: Joi.string(),
  fechaPublicacion: Joi.date().iso(),
  isbn: Joi.string().pattern(/^(?=(?:\D*\d){10}(?:(?:\D*\d){3})?$)[\d-]+$/),
  genero: Joi.string()
}).min(1);