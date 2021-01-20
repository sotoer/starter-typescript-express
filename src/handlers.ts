import { Request, Response } from 'express';

interface HelloResponse {
  message: string;
}

type HelloBuilder = (name: string) => HelloResponse;

const helloBuilder: HelloBuilder = (name) => ({ message: name });

export const rootHandler = (_req: Request, res: Response): Response => {
  return res.send('API is working 🤓');
};

export const helloHandler = (req: Request, res: Response): Response => {
  const { params } = req;
  const { name } = params;
  const response = helloBuilder(`Hello ${name}`);

  return res.json(response);
};
