import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Seeder } from 'typeorm-extension';
import { Area } from 'src/core/areas/entities/area.entity';

@Injectable()
export class AreaSeeder implements Seeder {
  constructor(
    @InjectRepository(Area)
    private readonly repo: Repository<Area>,
  ) {}
  public async run(): Promise<any> {

    const areas: Partial<Area>[] = [
      {
        name: 'Fullstack Area',
      },
      {
        name: 'Salesforce Area',
      },
      {
        name: 'Metting Area',
      },
    ];

    await this.repo.save(areas);
  }
}
