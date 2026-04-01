import { PartialType } from '@nestjs/mapped-types';
import { CreateAssignmentDto } from './create-assignment.dto';
import { IsEnum } from 'class-validator';
import { AssignmentStatus } from '../enums/assingments.enum';

export class UpdateAssignmentDto {
  @IsEnum(AssignmentStatus)
  status: AssignmentStatus;
}
