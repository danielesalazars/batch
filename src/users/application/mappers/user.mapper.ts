import { UserEntity } from 'src/users/domain/entities/user.entity';
import { CreateUserDto } from 'src/users/application/dtos/create-user.dto';
import { UserResponseDto } from 'src/users/application/dtos/user-response.dto';

export class UserMapper {
  static fromCreateDto(dto: CreateUserDto, passwordHash: string): UserEntity {
    return new UserEntity({
      id: undefined, // id generado automáticamente
      first_name: dto.first_name,
      last_name: dto.last_name,
      email: dto.email,
      password_hash: passwordHash, // password ya encriptado
      role: 'user', // role por defecto
      is_active: true, // is_active por defecto
      created_at: new Date(),
      updated_at: new Date(),
    });
  }

  /*
   * Convierte una UserEntity en un UserResponseDto para enviar al cliente.
   */
  static toResponseDto(entity: UserEntity): UserResponseDto {
    return {
      id: entity.id,
      first_name: entity.first_name,
      last_name: entity.last_name,
      email: entity.email,
      role: entity.role,
      is_active: entity.is_active,
      created_at: entity.created_at,
      updated_at: entity.updated_at,
    };
  }
}
