import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({ example: 'Juan', description: 'Nombre del usuario' })
  @IsNotEmpty()
  readonly first_name: string;

  @ApiProperty({ example: 'Pérez', description: 'Apellido del usuario' })
  @IsNotEmpty()
  readonly last_name: string;

  @ApiProperty({
    example: 'juan.perez@example.com',
    description: 'Correo electrónico del usuario',
  })
  @IsEmail()
  readonly email: string;

  @ApiProperty({
    example: 'S3cre7P@ss',
    description: 'Contraseña del usuario (mín. 8 caracteres)',
    minLength: 8,
  })
  @MinLength(8)
  readonly password: string;
}
