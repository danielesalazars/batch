import * as dotenv from 'dotenv';
dotenv.config({ path: '.env.local' });

import { NestFactory } from '@nestjs/core';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import { Logger } from '@nestjs/common';

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter(),
  );
  const logger = new Logger('Bootstrap');

  // Inicia el servicio
  const port = process.env.PORT ?? 4000;
  await app.listen(port, '0.0.0.0');

  logger.log(
    `Microservicio batch NestJS iniciado en el puerto ${process.env.PORT || 4000}`,
  );
}
bootstrap();
