import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { User } from './user.entity';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('/find')
  findById(@Param('id') id: number) {
    return this.userService.findOne(id);
  }

  @Post()
  async saveOne(@Body() user: User) {
    await this.userService.save(user);
  }

  @Get('/all')
  findAll() {
    return this.userService.findAll();
  }
}
