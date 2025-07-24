import { Injectable, Logger } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { UserService } from '../../../users/application/services/user.service';
import { CreateUserDto } from '../../../users/application/dtos/create-user.dto';

@Injectable()
export class TasksSchedulerService {
  // Clase renombrada
  private readonly logger = new Logger(TasksSchedulerService.name);

  constructor(private readonly userService: UserService) {}

  // Tarea Batch de Inserción de usuarios  (cada 5 minutos)
  @Cron(CronExpression.EVERY_5_MINUTES)
  async handleDummyUserInsertionTask() {
    this.logger.log(
      '--- Iniciando tarea programada: Inserción de usuarios dummy ---',
    );
    try {
      const email = `scheduled_user_${Date.now()}@example.com`;
      const createUserDto: CreateUserDto = {
        first_name: 'Scheduled',
        last_name: 'Task',
        email: email,
        password: 'hashedPasswordFromTask',
      };

      await this.userService.createUser(createUserDto);
      this.logger.log(`Usuario dummy '${email}' insertado con éxito.`);
    } catch (error) {
      this.logger.error(
        `Error en la tarea programada de inserción de usuario dummy: ${error.message}`,
        error.stack,
      );
    }
    this.logger.log(
      '--- Tarea programada de inserción de usuarios dummy finalizada ---',
    );
  }
}
