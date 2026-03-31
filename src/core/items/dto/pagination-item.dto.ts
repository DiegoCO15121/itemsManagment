import { IsOptional, IsString } from "class-validator";

export class PaginationItemDTO {
  @IsOptional()
  @IsString()
  page?: number = 1;

  @IsOptional()
  @IsString()
  limit?: number = 10;
}