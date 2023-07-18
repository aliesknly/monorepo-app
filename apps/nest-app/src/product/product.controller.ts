import { Controller, Get } from '@nestjs/common';

import { ProductService } from './product.service';

@Controller()
export class ProductController {
  constructor(private readonly appService: ProductService) {}

  @Get()
  getData() {
    return this.appService.getData();
  }
}
