/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

import { CoreModule } from './core.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(CoreModule, { cors: true });
  
  const globalPrefix = 'api/v1';
  app.setGlobalPrefix(globalPrefix);
  const port = process.env['CORE_PORT'] || 5000;

  const config = new DocumentBuilder()
    .setTitle('Mono Repo core')
    .setDescription('The API description')
    .setVersion('1.0')
    .addTag('Api V1')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/api/v1/doc', app, document);

  await app.listen(port);
  Logger.log(
    `🚀 Application Core is running on: http://localhost:${port}/${globalPrefix}`
  );
}

bootstrap();
