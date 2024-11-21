/* eslint-disable prettier/prettier */
import { Controller, Get, Post } from '@nestjs/common';
import { CalculationService } from './calculation/calculation.service';

@Controller()
export class AppController {
  constructor(private readonly CalculationService: CalculationService) {}

  @Get()
  
  getem():number{
    return this.CalculationService.add(100,10);
  }
  

  //@Post('/num')
  /*postname():number{
    return this.appService.getnumber();
  }*/

}
