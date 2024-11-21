import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  getname(): string {
    return 'My name is Readwan';
  }
  getnumber(): number {
    return 1000;
  }

}
