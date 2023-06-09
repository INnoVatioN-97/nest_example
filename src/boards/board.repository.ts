import { CustomRepository } from 'src/configs/typeorm.customRepository.decorator';
import { Repository } from 'typeorm';
import { Board } from './board.entity';

@CustomRepository(Board)
export class BoardRepository extends Repository<Board> {}
