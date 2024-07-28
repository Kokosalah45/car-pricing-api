import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostgresModule } from './postgres/frameworks/data-services/postgres/postgres.module';
import { PostgresModule } from './frameworks/data-services/postgres/postgres.module';

@Module({
  imports: [PostgresModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
