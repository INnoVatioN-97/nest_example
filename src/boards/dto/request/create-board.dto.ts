import { IsNotEmpty } from 'class-validator';

/**
 * 보드 생성 요청 DTO
 */
export class CreateBoardDto {
  @IsNotEmpty()
  public title: string;
  @IsNotEmpty()
  public description: string;
}
