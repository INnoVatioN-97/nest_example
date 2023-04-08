import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { Board, BoardStatus } from './boards.model';
import { BoardsService } from './boards.service';
import { CreateBoardDto } from './dto/request/create-board.dto';

@Controller('boards')
export class BoardsController {
  constructor(private boardsService: BoardsService) {}

  @Get()
  getAllBoards(): Board[] {
    return this.boardsService.getAllBoards();
  }

  @Post()
  createBoard(
    @Body() dto: CreateBoardDto,
    // @Body('title') title: string,
    // @Body('description') description: string,
  ) {
    this.boardsService.createBoard(dto);
  }

  @Get('/:id')
  getBoardById(@Param('id') id: string) {
    return this.boardsService.getBoardById(id);
  }

  @Delete('/:id')
  deleteById(@Param('id') id: string): void {
    this.boardsService.deleteById(id);
  }

  @Patch('/:id/status')
  updateBoardStatus(
    @Param('id') id: string,
    @Body('status') status: BoardStatus,
  ) {
    this.boardsService.updateBoardStatus(id, status);
  }
}
