import { Injectable } from '@nestjs/common';
import { CreateUserDto } from 'src/users/application/dtos/create-user.dto';
import { CreateUserUseCase } from 'src/users/application/use-cases/create-user.use-case';
import { UserResponseDto } from 'src/users/application/dtos/user-response.dto';

@Injectable()
export class UserService {
  constructor(private readonly createUserUseCase: CreateUserUseCase) {}

  async createUser(dto: CreateUserDto): Promise<UserResponseDto> {
    return await this.createUserUseCase.execute(dto);
  }
}
