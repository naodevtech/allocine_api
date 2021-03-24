import { Sequelize } from 'sequelize';
import databaseOptions, { databaseInformations } from './config/database';

// Import modules here TODO

export interface Database {
  sequelize: Sequelize;
  Sequelize: Sequelize;
}
const sequelize: Sequelize = new Sequelize(
  databaseOptions.database,
  databaseOptions.username,
  databaseOptions.password,
  {
    host: databaseOptions.host,
    dialect: 'mysql',
    port: databaseOptions.port
  }
);

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully. 🟢');
  })
  .catch((error) => {
    console.error('Unable to connect to the database:', error);
  });

const db = {
  sequelize: sequelize,
  Sequelize: Sequelize
};

db.sequelize = sequelize;

db.Sequelize = Sequelize;

db.sequelize.sync();

export default db;
