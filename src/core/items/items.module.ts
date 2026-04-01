import { forwardRef, Module } from '@nestjs/common';
import { ItemsService } from './items.service';
import { ItemsController } from './items.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Item } from './entities/item.entity';
import { Device } from './entities/device.entity';
import { AssignmentsModule } from '../assignments/assignments.module';

@Module({
  controllers: [ItemsController],
  providers: [ItemsService],
  imports: [TypeOrmModule.forFeature([Item, Device]), forwardRef(() => AssignmentsModule)],
  exports: [TypeOrmModule]  
})
export class ItemsModule {}
