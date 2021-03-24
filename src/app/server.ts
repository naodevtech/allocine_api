import express from 'express';
import router from './router';
import morgan from 'morgan';

import YAML from 'yamljs';

import swaggerUi from 'swagger-ui-express';
const swaggerOptions = YAML.load('./swagger.yml');

export const createServer = async () => {
  const server: express.Application = express();

  server.use(express.json());

  server.use(morgan('tiny'));

  router(server);

  server.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerOptions));

  return server;
};
