import { TypeOrmModuleOptions } from '@nestjs/typeorm';

console.log('typeormConfig', {
  DB_USER_NAME: process.env.DB_USER_NAME,
  DB_PASSWORD: process.env.DB_PASSWORD,
  DB_NAME: process.env.DB_NAME,
  DB_HOST: process.env.DB_HOST,
});

export const typeORMConfig: TypeOrmModuleOptions = {
  type: 'mysql',
  username: 'root',
  password: 'Rhduddlf1@',
  database: 'DB_NEST',
  host: '127.0.0.1',
  port: 3306,
  entities: [__dirname + '/../**/*.entity.{js,ts}'],
  synchronize: true,
};
