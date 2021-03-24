import express, { Request, Response } from 'express';

const Router = (app: express.Application) => {
  const apiRoutes: express.Router = express.Router();
  app.get('/', (request: Request, response: Response) => {
    return response.status(200).json({
      message: 'Hello World'
    });
  });
  app.use('/api/v1/', apiRoutes);
};

export default Router;
