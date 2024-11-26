/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { CalculationModule } from './calculation/calculation.module';
import { DatabaseModule } from './calculation/database.module';


@Module({
  imports:[CalculationModule,DatabaseModule],
})
export class AppModule {}
