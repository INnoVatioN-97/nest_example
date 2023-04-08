import { Injectable } from '@nestjs/common';
import { v1 as uuid } from 'uuid';
import { Board, BoardStatus } from './boards.model';

@Injectable()
export class BoardsService {
  private boardList: Board[] = [];

  getAllBoards(): Board[] {
    return this.boardList;
  }

  createBoard(title: string, description: string) {
    const board = {
      id: uuid(),
      title,
      description,
      status: BoardStatus.PUBLIC,
    };

    this.boardList.push(board);
  }
}
