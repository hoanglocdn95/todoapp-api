import { DataSourceOptions } from 'typeorm';
import { join } from 'path';
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
  synchronize: true,
  dropSchema: false,
  entities: ['dist/**/*.entity{.ts,.js}'],
};

export default connectionOptions;
