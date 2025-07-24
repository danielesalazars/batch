import { Injectable } from '@nestjs/common';
import { CreateUserDto } from 'src/users/application/dtos/create-user.dto';
import { UserRepository } from 'src/users/domain/repositories/user.repository';
import { UserEntity } from 'src/users/domain/entities/user.entity';
import { UserMapper } from 'src/users/application/mappers/user.mapper';
import * as bcrypt from 'bcrypt';

@Injectable()
export class CreateUserUseCase {
  constructor(private readonly userRepository: UserRepository) {}

  async execute(dto: CreateUserDto): Promise<UserEntity> {
    const hashedPassword = await bcrypt.hash(dto.password, 10);

    const userEntity = UserMapper.fromCreateDto(dto, hashedPassword);

    return this.userRepository.save(userEntity);
  }
}
