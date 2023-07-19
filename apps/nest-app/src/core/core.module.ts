import { Module } from '@nestjs/common';

import { CoreController } from './core.controller';
import { CoreService } from './core.service';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { productConfig } from '../common/microservice';

@Module({
  imports: [
    ClientsModule.register([
      { name: productConfig.name, transport: Transport.TCP },
    ]),
  ],
  controllers: [CoreController],
  providers: [CoreService],
})
export class CoreModule {}
