import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { TagModule } from './tag/tag.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    UserModule,
    TagModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      //host: process.env.POSTGRES_HOST,
      host: 'db',
      //port: parseInt(process.env.EXT_DB_PORT),
      port: 5432,
      //username: process.env.POSTGRES_USER,
      username: 'user',
      //password: process.env.POSTGRES_PASSWORD,
      password: 'ticketing.db',
      //database: process.env.POSTGRES_DB,
      database: 'ticketing',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
