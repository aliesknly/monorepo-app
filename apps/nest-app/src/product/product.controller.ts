import { Controller, Get } from '@nestjs/common';

import { ProductService } from './product.service';
import { EventPattern, MessagePattern } from '@nestjs/microservices';
import { ProductEvents, productConfig } from '../common/microservice';

@Controller()
export class ProductController {
  constructor(private readonly appService: ProductService) {}

  @Get()
  getData() {
    return this.appService.getData();
  }

  @MessagePattern(ProductEvents.CREATE_PRODUCT)
  async createNewProduct(product: any) {
    console.log('este es el evento', product);
    return product
  }

  @MessagePattern(productConfig.events.SHOW_PRODUCT)
  async showProduct(element) {
    console.log('recivido');
    return element;
  }
}
