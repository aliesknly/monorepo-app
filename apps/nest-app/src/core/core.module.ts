import { Module } from '@nestjs/common';

import { CoreController } from './core.controller';
import { CoreService } from './core.service';
import { ProductClientRMQ } from '../common/microservice';

@Module({
  imports: [ProductClientRMQ],
  controllers: [CoreController],
  providers: [CoreService],
})
export class CoreModule {}
