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

  @EventPattern(ProductEvents.CREATE_PRODUCT)
  async createNewProduct(product: any) {
    console.log('este es el evento', product);
  }

  @MessagePattern(productConfig.events.SHOW_PRODUCT)
  async showProduct(){
    console.log("recivido")
    return 'mi mensaje'
  }
}
