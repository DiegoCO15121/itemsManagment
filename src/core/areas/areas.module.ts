import { forwardRef, Module } from '@nestjs/common';
import { AreasService } from './areas.service';
import { AreasController } from './areas.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Area } from './entities/area.entity';
import { UserModule } from '../user/user.module';

@Module({
  controllers: [AreasController],
  providers: [AreasService],
  imports: [
    TypeOrmModule.forFeature([Area]), forwardRef(() => UserModule)
  ]
})
export class AreasModule {}
