import { IsNumber } from "class-validator";

export class CreateAssignmentDto {
    @IsNumber()
    userId: number
    
    @IsNumber()
    itemId: number
    
}
