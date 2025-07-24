import { Injectable } from '@nestjs/common';
import { UserEntity } from 'src/users/domain/entities/user.entity';
import { UserRepository } from 'src/users/domain/repositories/user.repository';
import { UserQueries } from 'src/users/infrastructure/repositories/data-access/sql/user.queries';
import { SqlDatabaseService } from '@lib/external/azure/sql-database/sql-database.service';

@Injectable()
export class UserRepositoryImpl implements UserRepository {
  constructor(private readonly dbService: SqlDatabaseService) {}

  async save(user: UserEntity): Promise<UserEntity> {
    const result = await this.dbService.query<UserEntity>(UserQueries.create, [
      user.first_name,
      user.last_name,
      user.email,
      user.password_hash,
      user.role ?? 'user',
      user.is_active ?? true,
    ]);
    return result[0];
  }
}
