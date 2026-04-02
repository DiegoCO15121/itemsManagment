import {
  IsEnum,
  IsNumber,
  IsObject,
  IsOptional,
  IsString,
  ValidateIf,
  ValidateNested,
} from 'class-validator';
import { ItemSpecificType, ItemStatus, ItemType } from '../enums/item.enum';
import { CreateComputerDto } from './computer.dto';

export class CreateItemDto {
  @IsString()
  name: string;

  @IsString()
  description: string;

  @IsEnum(ItemType)
  type: ItemType;

  @IsEnum(ItemStatus)
  status: ItemStatus;

  @IsString()
  serialNumber: string;

  @IsNumber()
  areaId: number;

  @IsEnum(ItemSpecificType)
  specifyTypeItem: ItemSpecificType;

  @IsObject()
  @ValidateNested()
  @ValidateIf((o: CreateItemDto) => o.specifyTypeItem === ItemSpecificType.COMPUTER)
  computer?: CreateComputerDto;
}
