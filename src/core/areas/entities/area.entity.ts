import { Item } from 'src/core/items/entities/item.entity';
import { User } from 'src/core/user/entities/user.entity';
import {
    Column,
    Entity,
    JoinColumn,
    ManyToOne,
    OneToMany,
    PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Area {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  name: string;

  @ManyToOne(() => User, (user) => user.areaInCharge, {nullable: true})
  @JoinColumn({ name: 'user_in_charge' })
  userInCharge: User;

  @OneToMany(() => User, (user) => user.area)
  user: User;

  @OneToMany(() => Item, (item) => item.area)
  item: Item;
}
