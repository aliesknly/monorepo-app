import { ClientsModule, Transport } from '@nestjs/microservices';
import { MicroserviceName } from './microservice.dicctionary';
import { productConfig } from './product.microservice.dicctionary';

export const ProductClientRMQ = ClientsModule.register([
  {
    name: MicroserviceName.PRODUCT,
    transport: Transport.RMQ,
    options: {
      urls: [process.env['MICSRV_RBMQ_BROKERS']],
      queue: MicroserviceName.PRODUCT,
      queueOptions: {
        durable: false
      },
    },
  },
]);

export const ProductClientKAFKA = ClientsModule.register([
  {
    name: productConfig.name,
    transport: Transport.KAFKA,
    options: {
      client: {
        clientId:"colasms",
        brokers: ['localhost:9092'],
       /*  sasl: {
          mechanism: 'scram-sha-256',
          username: process.env['MICSRV_KAFKA_USERNAME'],
          password: process.env['MICSRV_KAFKA_PASSWORD'],
        }, */
      },
      consumer: {
        groupId: "colasms",
      },
    },
  },
])