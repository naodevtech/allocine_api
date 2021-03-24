import express from 'express';
import router from './router';

export const createServer = async () => {
  const server: express.Application = express();

  server.use(express.json());

  router(server);

  return server;
};
