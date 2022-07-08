import { DataSourceOptions } from 'typeorm';
// import { join } from 'path';
import { config as configEnv } from 'dotenv';

configEnv();

const config = {
  host: process.env.POSTGRES_HOST,
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
  port: parseInt(process.env.PORT),
};

const connectionOptions: DataSourceOptions = {
  ...config,
  type: 'postgres',
  dropSchema: false,
  entities: ['dist/**/*.entity{.ts,.js}'],
  migrationsRun: true,
  migrations: ['src/migrations/**/*{.ts,.js}'],
  migrationsTableName: 'migrations',
};

export default connectionOptions;
