import { Controller, Get } from '@nestjs/common';

import { ProductService } from './product.service';
import { EventPattern } from '@nestjs/microservices';
import { ProductEvents } from '../common/microservice';

@Controller()
export class ProductController {
  constructor(private readonly appService: ProductService) {}

  @Get()
  getData() {
    return this.appService.getData();
  }

  @EventPattern(ProductEvents.CREATE_PRODUCT)
  async createNewProduct(product: any) {
    console.log('este es el evento', product);
  }
}
