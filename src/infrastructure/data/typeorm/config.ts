import { registerAs } from "@nestjs/config";
import path from "node:path";
import { DataSource, DataSourceOptions } from "typeorm";

// const testArbitrayValueConfig = {
//   host: 'localhost',
//   port: 5432,
//   username: 'postgres',
//   password: '123',
//   database: 'postgres',
// };

const config: DataSourceOptions = {
  type: "postgres",
  host: process.env.DATABASE_HOST,
  port: +process.env.DATABASE_PORT,
  username: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  entities: [
    path.join(__dirname, "../../../", "/**/*.TypeORM-mapper{.ts,.js}"),
  ],
  migrations: [path.join(__dirname, "/migrations/*{.ts,.js}")],
  synchronize: false,
};

console.log({ config });

export default registerAs("typeorm", () => config);
export const connectionSource = new DataSource(config as DataSourceOptions);
