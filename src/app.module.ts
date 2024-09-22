import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './application/users/users.module';
import typeormConfig from './infrastructure/data/typeorm/typeorm.config';
import { TypeOrmModuleConnection } from './infrastructure/data/typeorm/typeorm.module';

@Module({
  imports: [
    TypeOrmModuleConnection,
    UsersModule,
    ConfigModule.forRoot({
      isGlobal: true,
      load: [typeormConfig],
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
