import { IsDate, IsOptional } from 'class-validator';

export class UpdateAssignmentDto {
  @IsOptional()
  @IsDate()
  assignmentDate: Date;

  @IsOptional()
  @IsDate()
  returnedDate: Date;
}
