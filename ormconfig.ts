import { DataSourceOptions } from 'typeorm';
import { join } from 'path';
import { config as configEnv } from 'dotenv';

configEnv();

const config = {
  host: process.env.POSTGRES_HOST,
  user: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
};

const connectionOptions: DataSourceOptions = {
  ...config,
  type: 'postgres',
  port: 5432,
  synchronize: true,
  dropSchema: false,
  migrationsRun: true,
  migrations: [join(__dirname, 'migrations/*{.ts,.js}')],
};

export default connectionOptions;
