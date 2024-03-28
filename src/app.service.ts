import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  createRate(rate): number {
    return rate;
  }
}
