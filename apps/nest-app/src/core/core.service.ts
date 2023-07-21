import { Get, Inject, Injectable } from '@nestjs/common';
import { ProductEvents, productConfig } from '../common/microservice';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class CoreService {
  constructor(@Inject(productConfig.name) private productClient: ClientProxy) {}
  getData(): { message: string } {
    return { message: 'Core' };
  }

  createNewProduct(product: any) {
    const productCreated = this.productClient.emit(
      ProductEvents.CREATE_PRODUCT,
      product
    );
    return { productCreated, message: 'send queue' };
  }

  async showMessage() {
    return await this.productClient.emit(ProductEvents.SHOW_PRODUCT, {
      casa: 'azul',
    });
  }
}
