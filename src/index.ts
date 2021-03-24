import { createServer } from './app/server';
import { PORT } from './app/config/constants';
import database from './app/database';

const bootstrap = async () => {
  const app = await createServer();
  app.listen(PORT);
  console.info(`Server is listening on port ${PORT} 🎯`);
};

bootstrap();
