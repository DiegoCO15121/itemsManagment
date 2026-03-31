import { IsEnum, IsOptional, IsString } from "class-validator";
import { ItemStatus, ItemType } from "../enums/item.enum";

export class CreateItemDto {
    
    @IsString()
    name: string

    @IsString()
    description: string

    @IsEnum(ItemType)
    type: ItemType

    @IsEnum(ItemStatus)
    status: ItemStatus

    @IsOptional()
    @IsString()
    serialNumber: string

    @IsOptional()
    @IsString()
    memory: string

    @IsOptional()
    @IsString()
    cpu: string

}
