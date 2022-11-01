import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { UserRepository } from './user.repository';

@Injectable()
export class UserService {
  constructor(private userRepository: UserRepository) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    return await this.userRepository.createUser(createUserDto);
  }

  async findAll(): Promise<User[]> {
    return await this.userRepository.find();
  }

  async findById(id: string): Promise<User> {
    return await this.userRepository.findOne({ where: { id } }).catch(() => {
      throw new NotFoundException('User not found by id.');
    });
  }

  async findByEmail(email: string): Promise<User> {
    return await this.userRepository.findOne({ where: { email } }).catch(() => {
      throw new NotFoundException('User not found by email.');
    });
  }

  async update(id: string, updateUserDto: UpdateUserDto): Promise<User> {
    const found = this.findByEmail(updateUserDto.email);
    if (found) {
      throw new BadRequestException('Email already in use!');
    }
    await this.userRepository.update(id, updateUserDto);
    return await this.findById(id);
  }

  async remove(id: string) {
    await this.userRepository.delete(id);
  }
}
