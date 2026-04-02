import { IsOptional, IsString } from 'class-validator';

export class CreateComputerDto {
  @IsOptional()
  @IsString()
  memory: string;

  @IsOptional()
  @IsString()
  cpu: string;
}
