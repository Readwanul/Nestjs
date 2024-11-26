import { IsNumber, IsNotEmpty } from "class-validator";

export class Newdto
{
    @IsNotEmpty({message:"Not Possible"})
    @IsNumber()
    num:number;

    @IsNumber()
    num2:number;

}
