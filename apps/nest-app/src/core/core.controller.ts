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
  createNewProduct(@Body() body: any) {
    const product = this.appService.createNewProduct(body);
    return { product, message: 'Objeto enviado' };
  }

  @Get('/show')
  async showProduct() {
    const test = await this.appService.showMessage();
    return { test, message: 'listado' };
  }
}
