import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Seeder } from 'typeorm-extension';
import { User } from 'src/core/user/entities/user.entity';
import { UserRole } from 'src/core/user/enum/user.enum';
import { Area } from 'src/core/areas/entities/area.entity';

@Injectable()
export class UserSeeder implements Seeder {
  constructor(
    @InjectRepository(User)
    private readonly repo: Repository<User>,

    @InjectRepository(Area)
    private readonly AreaRepository: Repository<Area>
  ) {}
  public async run(): Promise<any> {
    const areas = await this.AreaRepository.find()

    const users: Partial<User>[] = [
      {
        firstName: 'Jairo',
        lastName: 'Martinez',
        role: UserRole.IA_MANAGER,
        area: areas[0]
      },
      {
        firstName: 'Pavel',
        lastName: 'Sumano',
        role: UserRole.PROJECT_MANAGER,
        area: areas[0]
      },

      {
        firstName: 'Horacio',
        lastName: 'Arniel',
        role: UserRole.SALESFORCE_DEVELOPER,
        area: areas[1]
      },
      {
        firstName: 'Daniel',
        lastName: 'Valdez',
        role: UserRole.SALESFORCE_DEVELOPER,
        area: areas[1]
      },
      {
        firstName: 'Javier',
        lastName: 'Avendaño',
        role: UserRole.SALESFORCE_DEVELOPER,
        area: areas[1]
      },
      {
        firstName: 'Yu Ban',
        lastName: 'Mena Zabala',
        role: UserRole.SALESFORCE_DEVELOPER,
        area: areas[1]
      },
      {
        firstName: 'Rolando',
        lastName: 'Tomás',
        role: UserRole.SALESFORCE_DEVELOPER,
        area: areas[1]
      },
      {
        firstName: 'Angel',
        lastName: 'Rosario',
        role: UserRole.SALESFORCE_DEVELOPER,
        area: areas[1]
      },

      {
        firstName: 'Mary',
        lastName: 'The Revilla',
        role: UserRole.FULLSTACK_DEVELOPER,
        area: areas[0]
      },
      {
        firstName: 'Jazziel',
        lastName: 'Pérez',
        role: UserRole.FULLSTACK_DEVELOPER,
        area: areas[0]
      },
      {
        firstName: 'Adrian',
        lastName: 'Martínez',
        role: UserRole.FULLSTACK_DEVELOPER,
        area: areas[0]
      },
      {
        firstName: 'Heriberto',
        lastName: 'Gijon',
        role: UserRole.FULLSTACK_DEVELOPER,
        area: areas[0]
      },
      {
        firstName: 'Josias',
        lastName: 'Dominguez',
        role: UserRole.FULLSTACK_DEVELOPER,
        area: areas[0]
      },

      {
        firstName: 'Hector',
        lastName: 'Paulo',
        role: UserRole.SALESFORCE_DEVELOPER,
        area: areas[1]
      },
      {
        firstName: 'Daniel',
        lastName: 'Santiago',
        role: UserRole.SALESFORCE_DEVELOPER,
        area: areas[1]
      },
      {
        firstName: 'Fernado',
        lastName: 'Ramirez',
        role: UserRole.SALESFORCE_DEVELOPER,
        area: areas[1]
      },

      {
        firstName: 'Diego',
        lastName: 'Crisanto',
        role: UserRole.FULLSTACK_DEVELOPER,
        area: areas[0]
      },
      {
        firstName: 'Eduardo',
        lastName: 'Enriquez',
        role: UserRole.FULLSTACK_DEVELOPER,
        area: areas[0]
      },
    ];

    await this.repo.save(users);
  }
}
