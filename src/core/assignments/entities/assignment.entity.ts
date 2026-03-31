import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { AssignmentStatus } from '../enums/assingments.enum';
import { User } from 'src/core/user/entities/user.entity';
import { Item } from 'src/core/items/entities/item.entity';

@Entity()
export class Assignment {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({nullable: true})
  end_data?: Date;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created_at?: Date;

  @Column({ 
    type: 'timestamp', 
    default: () => 'CURRENT_TIMESTAMP',
    onUpdate: 'CURRENT_TIMESTAMP'
  })
  updated_at?: Date;

  @Column({
    type: 'enum',
    enum: AssignmentStatus,
    default: AssignmentStatus.ACTIVE,
  })p
  status?: AssignmentStatus;


  @ManyToOne(() => User, (user) => user.assignment)
  @JoinColumn({name: 'user_id'})
  user: User

  @ManyToOne(() => Item, (item) => item.assignment)
  @JoinColumn({name: 'item_id'})
  item: Item
}
