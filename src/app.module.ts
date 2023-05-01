import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BoardRepository } from './boards/board.repository';
import { BoardsModule } from './boards/boards.module';
import { BoardsService } from './boards/boards.service';
import { typeORMConfig } from './configs/typeorm.config';
import { TypeOrmExModule } from './configs/typeorm.customRepository.module';

@Module({
  controllers: [AppController],
  providers: [AppService, BoardsService],
  imports: [
    TypeOrmModule.forRoot(typeORMConfig),
    BoardsModule,
    TypeOrmExModule.forCustomRepository([BoardRepository]),
  ],
})
export class AppModule {}
