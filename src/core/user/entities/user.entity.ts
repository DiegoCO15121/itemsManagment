import { Column, Entity, ManyToMany, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { UserRole } from "../enum/user.enum";
import { Assignment } from "src/core/assignments/entities/assignment.entity";

@Entity()
export class User {

    @PrimaryGeneratedColumn('increment')
    id: number

    @Column()
    firstName: string

    @Column()
    lastName: string

    @Column({type:'enum', enum:UserRole, default: UserRole.DESARROLLADOR_FULLSTACK})
    role: UserRole

    @OneToMany(() => Assignment, (assigment) => assigment.user)
    assignments: Assignment[]
}
