import { Injectable } from '@nestjs/common';
import { CreateUserDto } from '../user/dto/create-user.dto';
import { UserService } from '../user/user.service';
import { User } from '../user/entities/user.entity';

@Injectable()
export class AuthService {
  constructor(private userService: UserService) {}

  async register(createUserDto: CreateUserDto): Promise<User> {
    return this.userService.create(createUserDto);
  }

  async resendActivationEmail() {}

  async validateUser() {}
}
