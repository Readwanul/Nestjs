import { Body,Controller,Get, Post } from '@nestjs/common';
import { CalculationService } from './calculation.service';
import { Newdto } from 'src/New.dto';

@Controller('calculation')
export class CalculationController {
    constructor(private readonly calculationService: CalculationService) {}


    @Get('add')
    getAdd(@Body() data:Newdto): number {
      return this.calculationService.add(data.num, 20);
    }
  
    @Get('sub')
    getSub(): number {
      return this.calculationService.sub(100, 20);
    }
  
    @Get('date')
    getDate(): string {
      return this.calculationService.date();
    }
    @Get()
    getResult(@Body() data:Newdto):object{
    const additionResult = this.calculationService.add(data.num, data.num2);
    const subtractionResult = this.calculationService.sub(data.num, data.num2);
    const currentDate = this.calculationService.date();

    return{
        addition: additionResult,
      subtraction: subtractionResult,
      currentDate: currentDate,
    };
    }
}
