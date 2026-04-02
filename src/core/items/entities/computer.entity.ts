import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Item } from './item.entity';

@Entity()
export class Computer {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  memory: string;

  @Column()
  cpu: string;

  @OneToOne(() => Item, (item) => item.computer)
  @JoinColumn({ name: 'item_id' })
  item: Item;
}
