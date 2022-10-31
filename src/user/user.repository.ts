import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { Builder } from 'builder-pattern';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UserRepository extends Repository<User> {
  async createUser(userCreationDto: CreateUserDto): Promise<User> {
    const { email, password } = userCreationDto;
    const createdUser = Builder(User).email(email).password(password).build();
    return await this.save(createdUser);
  }
}
