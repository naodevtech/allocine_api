export interface databaseInformations {
  username: string;
  password: string;
  database: string;
  host: string;
  dialect: string | 'mysql' | undefined;
  port: string;
  development?: boolean;
  production?: boolean;
}

const development: databaseInformations = {
  username: process.env.DATABASE_USERNAME || 'root',
  password: process.env.DATABASE_PASSWORD || 'root',
  database: process.env.DATABASE_NAME || 'movies_api_development',
  host: process.env.DATABASE_HOST || 'localhost',
  dialect: process.env.DATABASE_DIALECT || 'mysql',
  port: process.env.DATABASE_PORT || '8889',
  development: true
};

const production: databaseInformations = {
  username: process.env.DATABASE_USERNAME || 'root',
  password: process.env.DATABASE_PASSWORD || 'root',
  database: process.env.DATABASE_NAME || 'movies_api_production',
  host: process.env.DATABASE_HOST || 'localhost',
  port: process.env.DATABASE_PORT || '8889',
  dialect: process.env.DATABASE_DIALECT || 'mysql'
};

let databaseOptions: databaseInformations;

process.env.PRODUCTION
  ? (databaseOptions = production)
  : (databaseOptions = development);

export default databaseOptions;
