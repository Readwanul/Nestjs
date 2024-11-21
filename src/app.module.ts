/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { CalculationModule } from './calculation/calculation.module';
import { CalculationService } from './calculation/calculation.service';
import { AppController } from './app.controller';

@Module({
  providers:[CalculationService,],
  controllers:[AppController]
})
export class AppModule {}
