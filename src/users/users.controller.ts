import { Body, Controller, Post } from '@nestjs/common';
import { UserType } from 'src/types/user.type';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}
  @Post()
  registerUser(@Body() user: UserType): Promise<UserType> {
    return this.userService.registerUser(user);
  }
}
