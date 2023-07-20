/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

import { ProductModule } from './product.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { Transport, MicroserviceOptions } from '@nestjs/microservices';
import { productConfig } from '../common/microservice';

async function bootstrap() {
  const app = await NestFactory.create(ProductModule, { cors: true });

  app.connectMicroservice({
    transport: Transport.KAFKA,
    options: {
      consumer:{
        groupId:productConfig.name
      },
      client: {
        brokers: [process.env['MICSRV_KAFKA_BROKERS']],
        clientId:productConfig.name
       /*  sasl:{
          mechanism:'scram-sha-256',
          username:process.env['MICSRV_KAFKA_USERNAME'],
          password:process.env['MICSRV_KAFKA_PASSWORD']
        },
        ssl:true */
      },
    },
  } as MicroserviceOptions);

  const globalPrefix = 'api/v1';
  app.setGlobalPrefix(globalPrefix);
  const port = process.env['PRODUCT_PORT'] || 5001;

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
  );

  app.startAllMicroservices();

  await app.listen(port);
}

bootstrap();
