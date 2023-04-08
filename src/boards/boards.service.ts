import { Injectable } from '@nestjs/common';
import { v1 as uuid } from 'uuid';
import { Board, BoardStatus } from './boards.model';
import { CreateBoardDto } from './dto/request/create-board.dto';

@Injectable()
export class BoardsService {
  private boardList: Board[] = [];

  getAllBoards(): Board[] {
    return this.boardList;
  }

  createBoard(dto: CreateBoardDto) {
    const board = {
      id: uuid(),
      title: dto.title,
      description: dto.description,
      status: BoardStatus.PUBLIC,
    };

    this.boardList.push(board);
  }

  getBoardById(id: string) {
    return this.boardList.find((a) => a.id === id);
  }
}
