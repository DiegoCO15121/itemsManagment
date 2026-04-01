import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Seeder } from 'typeorm-extension';
import { User } from 'src/core/user/entities/user.entity';
import { UserRole } from 'src/core/user/enum/user.enum';

@Injectable()
export class UserSeeder implements Seeder {
  constructor(
    @InjectRepository(User)
    private readonly repo: Repository<User>,
  ) {}
  public async run(): Promise<any> {
    const users: Partial<User>[] = [
      {
        firstName: 'Jairo',
        lastName: 'Martinez',
        role: UserRole.JEFE_DEPARTAMENTO_IA,
      },
      {
        firstName: 'Pavel',
        lastName: 'Sumano',
        role: UserRole.JEFE_PROYECTOS,
      },

      {
        firstName: 'Horacio',
        lastName: 'Arniel',
        role: UserRole.DESARROLLADOR_SALESFORCE,
      },
      {
        firstName: 'Daniel',
        lastName: 'Valdez',
        role: UserRole.DESARROLLADOR_SALESFORCE,
      },
      {
        firstName: 'Javier',
        lastName: 'Avendaño',
        role: UserRole.DESARROLLADOR_SALESFORCE,
      },
      {
        firstName: 'Yu Ban',
        lastName: 'Mena Zabala',
        role: UserRole.DESARROLLADOR_SALESFORCE,
      },
      {
        firstName: 'Rolando',
        lastName: 'Tomás',
        role: UserRole.DESARROLLADOR_SALESFORCE,
      },
      {
        firstName: 'Angel',
        lastName: 'Rosario',
        role: UserRole.DESARROLLADOR_SALESFORCE,
      },

      {
        firstName: 'Mary',
        lastName: 'The Revilla',
        role: UserRole.DESARROLLADOR_FULLSTACK,
      },
      {
        firstName: 'Jazziel',
        lastName: 'Pérez',
        role: UserRole.DESARROLLADOR_FULLSTACK,
      },
      {
        firstName: 'Adrian',
        lastName: 'Martínez',
        role: UserRole.DESARROLLADOR_FULLSTACK,
      },
      {
        firstName: 'Heriberto',
        lastName: 'Gijon',
        role: UserRole.DESARROLLADOR_FULLSTACK,
      },
      {
        firstName: 'Josias',
        lastName: 'Dominguez',
        role: UserRole.DESARROLLADOR_FULLSTACK,
      },

      {
        firstName: 'Hector',
        lastName: 'Paulo',
        role: UserRole.DESARROLLADOR_SALESFORCE,
      },
      {
        firstName: 'Daniel',
        lastName: 'Santiago',
        role: UserRole.DESARROLLADOR_SALESFORCE,
      },
      {
        firstName: 'Fernado',
        lastName: 'Ramirez',
        role: UserRole.DESARROLLADOR_SALESFORCE,
      },

      {
        firstName: 'Diego',
        lastName: 'Crisanto',
        role: UserRole.DESARROLLADOR_FULLSTACK,
      },
      {
        firstName: 'Eduardo',
        lastName: 'Enriquez',
        role: UserRole.DESARROLLADOR_FULLSTACK,
      },
    ];

    await this.repo.save(users);
  }
}
