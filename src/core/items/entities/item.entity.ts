import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ItemSpecificType, ItemStatus, ItemType } from '../enums/item.enum';
import { Computer } from './computer.entity';
import { Assignment } from 'src/core/assignments/entities/assignment.entity';
import { Area } from 'src/core/areas/entities/area.entity';

@Entity()
export class Item {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column({ enum: ItemType, type: 'enum', default: ItemType.FURNITURE })
  type: ItemType;

  @Column({ enum: ItemStatus, type: 'enum', default: ItemStatus.AVAILABLE })
  status: ItemStatus;

  @Column()
  serialNumber: string;

  @ManyToOne(() => Area, (area) => area.item)
  @JoinColumn({ name: 'area_id' })
  area: Area;

  @OneToOne(() => Computer, (computer) => computer.item, { cascade: true })
  computer: Computer;

  @OneToMany(() => Assignment, (assignment) => assignment.item)
  assignments: Assignment[];

  
  @Column({ enum: ItemSpecificType, type: 'enum' })
  specificType: ItemSpecificType;
}
