import { forwardRef, Module } from '@nestjs/common';
import { AssignmentsService } from './assignments.service';
import { AssignmentsController } from './assignments.controller';
import { UserModule } from '../user/user.module';
import { Assignment } from './entities/assignment.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  controllers: [AssignmentsController],
  providers: [AssignmentsService],
  /* imports: [forwardRef(() => UserModule)], */
  imports: [
    forwardRef(() => UserModule),
    TypeOrmModule.forFeature([Assignment]),
  ],
})
export class AssignmentsModule {}
