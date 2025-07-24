import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TaskModule } from 'src/tasks/task.module';
import { UserModule } from 'src/users/user.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, envFilePath: '.env.local' }), //enviroment global
    UserModule,
    TaskModule,
  ],
})
export class AppModule {}
