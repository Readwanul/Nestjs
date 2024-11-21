import { Injectable } from '@nestjs/common';

@Injectable()
export class CalculationService {
    add(x:number,y:number):number{
        return x+y;
    }
    sub(x:number,y:number):number{
        return x-y;
    }
    date():string{
        return new Date().toISOString();
    }
}
