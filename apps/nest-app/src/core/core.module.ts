import { Module } from '@nestjs/common';

import { CoreController } from './core.controller';
import { CoreService } from './core.service';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { MicroserviceName, productConfig } from '../common/microservice';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: productConfig.name,
        transport: Transport.KAFKA,
        options: {
          client: {
            clientId:productConfig.name,
            brokers: [process.env['MICSRV_KAFKA_BROKERS']],
           /*  sasl: {
              mechanism: 'scram-sha-256',
              username: process.env['MICSRV_KAFKA_USERNAME'],
              password: process.env['MICSRV_KAFKA_PASSWORD'],
            }, */
          },
          consumer: {
            groupId: productConfig.name,
          },
        },
      },
    ]),
  ],
  controllers: [CoreController],
  providers: [CoreService],
})
export class CoreModule {}
