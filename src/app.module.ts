import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BoardsService } from './boards/boards.service';
import { BoardsModule } from './boards/boards.module';

@Module({
  controllers: [AppController],
  providers: [AppService, BoardsService],
  imports: [BoardsModule],
})
export class AppModule {}
