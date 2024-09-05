import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserTypeORMMapper } from './application/users/UserData.TypeORM-mapper';
import { UsersModule } from './application/users/users.module';

@Module({
  imports: [
    UsersModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      password: 'postgres',
      username: 'postgres',
      entities: [UserTypeORMMapper],
    }),

    // MongooseModule.forRoot('mongodb://127.0.0.1:8001/test'),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
