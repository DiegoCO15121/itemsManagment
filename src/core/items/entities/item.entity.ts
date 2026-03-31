import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { ItemStatus, ItemType } from '../enums/item.enum';
import { Device } from './device.entity';
import { Assignment } from 'src/core/assignments/entities/assignment.entity';

@Entity()
export class Item {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  name: string;

  @Column({ enum: ItemStatus, type: 'enum', default: ItemStatus.AVAILABLE })
  status: ItemStatus;

  @Column({ enum: ItemType, type: 'enum', default: ItemType.FURNITURE })
  type: ItemType;

  @OneToOne(() => Device, (device) => device.item)
  device: Device;

  @OneToMany(() => Assignment, (assignment) => assignment.item)
  assignment: Assignment

}
