import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { AssignmentStatus } from '../enums/assingments.enum';
import { User } from 'src/core/user/entities/user.entity';
import { Item } from 'src/core/items/entities/item.entity';

@Entity()
export class Assignment {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({nullable: true, name:'end_date'})
  endDate?: Date;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', name: 'created_at' })
  createdAt?: Date;

  @Column({ 
    type: 'timestamp', 
    default: () => 'CURRENT_TIMESTAMP',
    onUpdate: 'CURRENT_TIMESTAMP',
    name: 'updated_at'
  })
  updatedAt?: Date;

  @Column({
    type: 'enum',
    enum: AssignmentStatus,
    default: AssignmentStatus.ACTIVE,
  })
  status: AssignmentStatus;


  @ManyToOne(() => User, (user) => user.assignments)
  @JoinColumn({name: 'user_id'})
  user: User

  @ManyToOne(() => Item, (item) => item.assignments)
  @JoinColumn({name: 'item_id'})
  item: Item
}
