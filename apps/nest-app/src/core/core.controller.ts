import { Controller, Get } from '@nestjs/common';

import { CoreService } from './core.service';

@Controller()
export class CoreController {
  constructor(private readonly appService: CoreService) {}

  @Get()
  getData() {
    return this.appService.getData();
  }
}
