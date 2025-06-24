import { sequelize } from '../src/database';
import { User } from '../src/models/User';

describe('Database', () => {
  beforeAll(async () => {
    await sequelize.sync({ force: true });
  });

  afterAll(async () => {
    await sequelize.close();
  });

  test('should create a user', async () => {
    const user = await User.create({
      email: 'test@example.com',
      password_hash: 'hashed_password',
      role: 'operator'
    });
    
    expect(user.id).toBeDefined();
    expect(user.email).toBe('test@example.com');
  });

  test('should enforce unique email', async () => {
    await expect(
      User.create({
        email: 'test@example.com',
        password_hash: 'another_hash',
        role: 'operator'
      })
    ).rejects.toThrow();
  });
});