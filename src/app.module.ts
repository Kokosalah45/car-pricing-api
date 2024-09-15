import { Module } from "@nestjs/common";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { UsersModule } from "./application/users/users.module";
import typeorm from "./infrastructure/data/typeorm/config";

@Module({
  imports: [
    UsersModule,
    ConfigModule.forRoot({
      isGlobal: true,
      load: [typeorm],
    }),
    TypeOrmModule.forRootAsync({
      useFactory: async (configService) => configService.get("typeorm"),
      inject: [ConfigService],
    }),

    // MongooseModule.forRoot('mongodb://127.0.0.1:8001/test'),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
