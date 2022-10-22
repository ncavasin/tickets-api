import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { MovieModule } from './movie/movie.module';
import { RoomModule } from './room/room.module';
import { ShowModule } from './show/show.module';
import { TagModule } from './tag/tag.module';

@Module({
  imports: [UserModule, MovieModule, RoomModule, ShowModule, TagModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
