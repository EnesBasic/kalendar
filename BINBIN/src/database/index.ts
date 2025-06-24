import { Sequelize } from 'sequelize-typescript';
import { config } from '../config';
import { User } from '../models/User';
import { Operator } from '../models/Operator';
import { Machine } from '../models/Machine';
import { Shift } from '../models/Shift';
import { Schedule } from '../models/Schedule';
import { ScheduleEntry } from '../models/ScheduleEntry';
import { secureDatabase } from './security';

const sequelize = new Sequelize({
  database: config.db.name,
  username: config.db.user,
  password: config.db.password,
  host: config.db.host,
  port: config.db.port,
  dialect: 'postgres',
  models: [User, Operator, Machine, Shift, Schedule, ScheduleEntry],
  dialectOptions: {
    ssl: config.db.ssl ? {
      require: true,
      rejectUnauthorized: false
    } : false
  },
  pool: {
    max: 20,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
  logging: config.env === 'development' ? console.log : false
});

export const initializeDatabase = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync({ alter: config.env === 'development' });
    await secureDatabase(sequelize);
    
    console.log('Database connected and secured');
    return sequelize;
  } catch (error) {
    console.error('Database connection failed:', error);
    process.exit(1);
  }
};

export { sequelize };