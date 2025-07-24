import { Module } from '@nestjs/common';
import { ScheduleModule } from '@nestjs/schedule';
import { TasksSchedulerService } from './application/services/task.scheduler.service';
import { UserModule } from '../users/user.module';

@Module({
  imports: [ScheduleModule.forRoot(), UserModule],
  providers: [TasksSchedulerService],
  exports: [],
})
export class TaskModule {}
