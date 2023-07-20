import { Body, Controller, Get, Post } from '@nestjs/common';

import { CoreService } from './core.service';

@Controller()
export class CoreController {
  constructor(private readonly appService: CoreService) {}

  @Get()
  getData() {
    return this.appService.getData();
  }

  @Post()
  createNewProduct(@Body() body: any): string {
    return this.appService.createNewProduct(body);
  }

  @Get('/show')
  showProduct() {
    return this.appService.showMessage();
  }
}
