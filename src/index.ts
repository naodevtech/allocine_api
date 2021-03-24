import { createServer } from './app/server';
import { PORT } from './config/constants';

const bootstrap = async () => {
  const app = await createServer();
  app.listen(PORT);
  console.info(`Server is listening on port ${PORT} 🎯`);
};

bootstrap();
