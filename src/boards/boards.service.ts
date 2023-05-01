import { Injectable, NotFoundException } from '@nestjs/common';
import { BoardRepository } from './board.repository';
import { BoardStatus } from './boards.model';
import { CreateBoardDto } from './dto/request/create-board.dto';

@Injectable()
export class BoardsService {
  constructor(readonly boardRepository: BoardRepository) {}

  async getAllBoards() {
    return await this.boardRepository.find();
  }

  async createBoard(dto: CreateBoardDto) {
    const board = {
      title: dto.title,
      description: dto.description,
      status: BoardStatus.PUBLIC,
    };

    await this.boardRepository.save(board);
  }

  async getBoardById(id: number) {
    const found = await this.boardRepository.findOneBy({ id });

    if (!found) throw new NotFoundException(`Can't find board with id [${id}]`);
    return found;
  }

  async deleteById(id: number) {
    const found = await this.getBoardById(id);

    found && (await this.boardRepository.delete({ id }));
  }

  async updateBoardStatus(id: number, boardStatus: BoardStatus) {
    const board = await this.getBoardById(id);
    board.status = boardStatus;
    await this.boardRepository.save(board);
    // const prev = this.boardList.find((b) => b.id === id);
    // this.boardList.splice(Number(id), 1, { ...prev, status: boardStatus });
  }
}
