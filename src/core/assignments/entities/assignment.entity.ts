import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { User } from 'src/core/user/entities/user.entity';
import { Item } from 'src/core/items/entities/item.entity';

@Entity()
export class Assignment {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @ManyToOne(() => User, (user) => user.assignments)
  @JoinColumn({name: 'user_id'})
  user: User

  @ManyToOne(() => Item, (item) => item.assignments)
  @JoinColumn({name: 'item_id'})
  item: Item

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', name: 'assignment_at' })
  assignmentDate?: Date;

  @Column({nullable: true, name:'returned_date'})
  returnedDate?: Date;

  @Column({ 
    type: 'timestamp', 
    default: () => 'CURRENT_TIMESTAMP',
    onUpdate: 'CURRENT_TIMESTAMP',
    name: 'updated_at'
  })
  updatedAt?: Date;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', name: 'created_at' })
  createdAt?: Date;  
}
