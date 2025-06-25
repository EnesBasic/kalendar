export const config = {
  env: process.env.NODE_ENV || 'development',
  db: {
    name: process.env.DB_NAME || 'your_db_name',
    user: process.env.DB_USER || 'your_db_user',
    password: process.env.DB_PASSWORD || 'your_db_password',
    host: process.env.DB_HOST || 'localhost',
    port: Number(process.env.DB_PORT) || 5432,
    ssl: process.env.DB_SSL === 'true',
    encryptionKey: process.env.DB_ENCRYPTION_KEY || 'your_default_encryption_key'
  }
};