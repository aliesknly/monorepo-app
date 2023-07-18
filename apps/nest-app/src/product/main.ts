/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

/* import { Logger } from '@nestjs/common'; */
import { NestFactory } from '@nestjs/core';

import { ProductModule } from './product.module';
/* import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'; */
import { Transport, MicroserviceOptions } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    ProductModule,
    { transport: Transport.TCP }
  );
  /*   const app = await NestFactory.create(ProductModule, { cors: true });
  
  const globalPrefix = 'api/v1';
  app.setGlobalPrefix(globalPrefix);
  const port = process.env.PORT || 5001;

  const config = new DocumentBuilder()
    .setTitle('Mono Repo core')
    .setDescription('The API description')
    .setVersion('1.0')
    .addTag('Api V1')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/api/v1/doc', app, document);

  Logger.log(
    `🚀 Application Product is running on: http://localhost:${port}/${globalPrefix}`
    ); */
  await app.listen();
}

bootstrap();
