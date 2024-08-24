import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostgresModule } from './frameworks/data-services/type-orm/postgres/postgres.module';
import { UsersModule } from './users/users.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [PostgresModule, UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
