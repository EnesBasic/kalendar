import { sequelize } from './index';
import { User } from '../models/User';

async function seed() {
  await sequelize.sync({ force: true });
  
  await User.create({
    email: 'admin@example.com',
    password_hash: await bcrypt.hash('Admin123!', 10),
    role: 'admin'
  });

  console.log('Database seeded successfully');
}

seed().catch(console.error);
import bcrypt from 'bcrypt';
import { Sequelize } from 'sequelize-typescript';
