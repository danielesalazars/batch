import { Module } from '@nestjs/common';
import { UserService } from 'src/users/application/services/user.service';
import { UserRepository } from 'src/users/domain/repositories/user.repository';
import { UserRepositoryImpl } from 'src/users/infrastructure/repositories/data-access/sql/user.repository.impl';
import { SqlDatabaseModule } from '@lib/external/azure/sql-database/sql-database.module';

import { CreateUserUseCase } from 'src/users/application/use-cases/create-user.use-case';

@Module({
  imports: [SqlDatabaseModule],
  controllers: [],
  providers: [
    UserService,
    { provide: UserRepository, useClass: UserRepositoryImpl },
    CreateUserUseCase,
  ],
  exports: [UserService],
})
export class UserModule {}
