import { Controller, Get, Post, Body } from '@nestjs/common';
import { Rate } from './interfaces/rate.interface';

@Controller('rate')
export class AppController {
  private rates: Rate[] = [];

  private calculateRate(distance: number): number {
    const baseRate = 10; // Base rate
    const costPerKilometer = 2; // Additional cost per kilometer
    return baseRate + (costPerKilometer * distance);
  } 

  @Post()
  createRate(@Body() rateData: Rate) {
    var distance = rateData.distancia;
    rateData.tarifa = this.calculateRate(distance);

    this.rates.push(rateData);
    return rateData;
  }

  @Get()
  getAllRates() {
    return this.rates;
  }
}