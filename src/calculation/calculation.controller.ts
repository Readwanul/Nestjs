import { Controller,Get } from '@nestjs/common';
import { CalculationService } from './calculation.service';

@Controller('calculation')
export class CalculationController {
    constructor(private readonly calculationService: CalculationService) {}


    @Get('add')
    getAdd(): number {
      return this.calculationService.add(100, 20);
    }
  
    @Get('sub')
    getSub(): number {
      return this.calculationService.sub(100, 20);
    }
  
    @Get('date')
    getDate(): string {
      return this.calculationService.date();
    }
    @Get('Result')
    getResult():object{
    const additionResult = this.calculationService.add(100, 20);
    const subtractionResult = this.calculationService.sub(100, 20);
    const currentDate = this.calculationService.date();

    return{
        addition: additionResult,
      subtraction: subtractionResult,
      currentDate: currentDate,
    };
    }
}
