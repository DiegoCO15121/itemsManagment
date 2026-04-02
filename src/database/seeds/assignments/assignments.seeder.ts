import { Seeder } from 'typeorm-extension';
import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Assignment } from 'src/core/assignments/entities/assignment.entity';
import { User } from 'src/core/user/entities/user.entity';
import { Item } from 'src/core/items/entities/item.entity';

@Injectable()
export class AssignmentSeeder implements Seeder {
  constructor(
    @InjectRepository(Assignment)
    private readonly repo: Repository<Assignment>,

    @InjectRepository(User)
    private readonly userRepo: Repository<User>,

    @InjectRepository(Item)
    private readonly itemRepo: Repository<Item>,
  ) {}
  public async run(): Promise<any> {
    const users = await this.userRepo.find();
    const items = await this.itemRepo.find();

    const assignments: Partial<Assignment>[] = [
      // Jefes
      {
        user: users[0],
        item: items[0],
      },
      {
        user: users[0],
        item: items[1],
      },
      {
        user: users[1],
        item: items[2],
      },
      {
        user: users[1],
        item: items[3],
      },

      // mesa 1
      {
        user: users[2],
        item: items[4],
      },
      {
        user: users[2],
        item: items[5],
      },
      {
        user: users[3],
        item: items[6],
      },
      {
        user: users[3],
        item: items[7],
      },
      {
        user: users[4],
        item: items[8],
      },

      // mesa 2
      {
        user: users[5],
        item: items[9],
      },
      {
        user: users[5],
        item: items[10],
      },
      {
        user: users[6],
        item: items[11],
      },
      {
        user: users[6],
        item: items[12],
      },
      {
        user: users[7],
        item: items[13],
      },
      {
        user: users[7],
        item: items[14],
      },

      // mesa3
      {
        user: users[8],
        item: items[15],
      },
      {
        user: users[8],
        item: items[16],
      },
      {
        user: users[9],
        item: items[17],
      },
      {
        user: users[9],
        item: items[17],
      },
      {
        user: users[10],
        item: items[18],
      },
      {
        user: users[10],
        item: items[18],
      },

      // mesa 4
      {
        user: users[11],
        item: items[19],
      },
      {
        user: users[11],
        item: items[20],
      },
      {
        user: users[12],
        item: items[21],
      },
      {
        user: users[12],
        item: items[22],
      },

      // Mesa 5
      {
        user: users[13],
        item: items[23],
      },
      {
        user: users[14],
        item: items[24],
      },
      {
        user: users[15],
        item: items[25],
      },

      // Mesa 6
      {
        user: users[16],
        item: items[26],
      },
      {
        user: users[17],
        item: items[27],
      },
    ];

    await this.repo.save(assignments);
  }
}
