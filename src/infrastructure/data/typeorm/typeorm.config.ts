import { registerAs } from '@nestjs/config';
import path from 'node:path';
import { DataSource, DataSourceOptions } from 'typeorm';

const config: DataSourceOptions = {
  type: 'postgres',
  host: process.env.DATABASE_HOST,
  port: +process.env.DATABASE_PORT,
  username: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  entities: [
    path.join(__dirname, '../../../', '/**/*.TypeORM-mapper{.ts,.js}'),
  ],
  migrations: [path.join(__dirname, '/migrations/*{.ts,.js}')],
  synchronize: false,
};
export const TYPE_ORM_CONFIG = 'TYPE_ORM_CONFIG';
export default registerAs(TYPE_ORM_CONFIG, () => config);
export const connectionSource = new DataSource(config as DataSourceOptions);
