import { Injectable } from '@nestjs/common';

@Injectable()
export class CoreService {
  getData(): { message: string } {
    return { message: "Core" };
  }
}
