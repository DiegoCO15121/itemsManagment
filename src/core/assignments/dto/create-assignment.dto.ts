import { IsNumber } from "class-validator";

export class CreateAssignmentDto {
    @IsNumber()
    user_id: number
    
    @IsNumber()
    item_id: number
    
}
