import { ApiProperty } from '@nestjs/swagger';

export class UserResponseDto {
  @ApiProperty({ example: 1 })
  id: string;

  @ApiProperty({ example: 'Juan' })
  first_name: string;

  @ApiProperty({ example: 'Pérez' })
  last_name: string;

  @ApiProperty({ example: 'juan.perez@example.com' })
  email: string;

  @ApiProperty({ example: 'user' })
  role: string;

  @ApiProperty({ example: true })
  is_active: boolean;

  @ApiProperty({ example: '2025-01-01T10:00:00Z' })
  created_at: Date;

  @ApiProperty({ example: '2025-01-01T10:00:00Z' })
  updated_at: Date;
}
