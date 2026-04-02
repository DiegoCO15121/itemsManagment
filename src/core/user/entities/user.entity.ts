import {
    Column,
    Entity,
    JoinColumn, ManyToOne,
    OneToMany,
    PrimaryGeneratedColumn
} from 'typeorm';
import { UserRole } from '../enum/user.enum';
import { Assignment } from 'src/core/assignments/entities/assignment.entity';
import { Area } from 'src/core/areas/entities/area.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column({
    type: 'enum',
    enum: UserRole,
    default: UserRole.FULLSTACK_DEVELOPER,
  })
  role: UserRole;

  @OneToMany(() => Assignment, (assigment) => assigment.user)
  assignments: Assignment[];

  @OneToMany(() => Area, (area) => area.userInCharge)
  areaInCharge: Area[]

  @ManyToOne(() => Area, (area) => area.user)
  @JoinColumn({name: 'area_id'})
  area: Area;
}
