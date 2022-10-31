import { User } from './entities/user.entity';
import { DataSource, Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { Builder } from 'builder-pattern';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UserRepository extends Repository<User> {
  constructor(private dataSource: DataSource) {
    super(User, dataSource.createEntityManager());
  }

  async createUser(userCreationDto: CreateUserDto): Promise<User> {
    const createdUser = Builder(User)
      .email(userCreationDto.email)
      .password(userCreationDto.password)
      .build();
    return await this.save(createdUser);
  }
}
