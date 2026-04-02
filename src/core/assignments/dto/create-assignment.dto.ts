import { IsDate, IsNumber } from "class-validator";

export class CreateAssignmentDto {
    @IsNumber()
    userId: number
    
    @IsNumber()
    itemId: number

    @IsDate()
    assigmentDate: Date
}
