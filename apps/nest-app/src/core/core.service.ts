import { Get, Inject, Injectable } from '@nestjs/common';
import { ProductEvents, productConfig } from '../common/microservice';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class CoreService {
  constructor(@Inject(productConfig.name) private productClient: ClientProxy) {}
  getData(): { message: string } {
    return { message: 'Core' };
  }

  createNewProduct(product: any): string {
    this.productClient.emit(ProductEvents.CREATE_PRODUCT, product);
    return 'send queue';
  }

  showMessage(){
    this.productClient.emit(ProductEvents.SHOW_PRODUCT,{})
    return "enviado"
  }
}
