import { Injectable } from '@nestjs/common';

@Injectable()
export class Hostess {
  speech() {
    return 'hello world!';
  }
}
