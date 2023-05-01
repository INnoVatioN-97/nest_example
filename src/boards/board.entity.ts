import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { BoardStatus } from './boards.model';

@Entity()
export class Board extends BaseEntity {
  @PrimaryGeneratedColumn() // JPA의 @Id @GeneratedValue()와 같다.
  id: number;

  @Column()
  title: string;

  @Column()
  desciption: string;

  @Column()
  status: BoardStatus;
}
