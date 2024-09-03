import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
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
      password: '123',
      username: 'postgres',
      entities: [UserTypeORMMapper],
      synchronize: true,
    }),

    MongooseModule.forRoot('mongodb://localhost:8081'),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
