import { Injectable } from '@nestjs/common';
import { EventPattern } from '@nestjs/microservices';
import { ProductEvents } from '../common/microservice';

@Injectable()
export class ProductService {
  getData(): { message: string } {
    return { message: 'Product' };
  }

 
}
