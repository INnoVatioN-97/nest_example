import { Injectable } from '@nestjs/common';
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
      id: this.boardList.length.toString(),
      title: dto.title,
      description: dto.description,
      status: BoardStatus.PUBLIC,
    };

    this.boardList.push(board);
  }

  getBoardById(id: string) {
    return this.boardList.find((a) => a.id === id);
  }

  deleteById(id: string) {
    console.log('deleteById >>> prev: ', this.boardList);
    this.boardList = this.boardList.filter((b) => b.id !== id);
    console.log('deleteById >>> now: ', this.boardList);
  }

  updateBoardStatus(id: string, boardStatus: BoardStatus) {
    const board = this.getBoardById(id);
    board.status = boardStatus;

    const prev = this.boardList.find((b) => b.id === id);
    this.boardList.splice(Number(id), 1, { ...prev, status: boardStatus });
  }
}
