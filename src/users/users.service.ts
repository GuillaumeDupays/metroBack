import { Injectable } from '@nestjs/common';
import { UserEntity } from './users.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserType } from 'src/types/user.type';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserEntity)
    private repoUser: Repository<UserEntity>,
  ) {}
  async registerUser(user: UserType): Promise<UserType> {
    return await this.repoUser.save(user);
  }
}
