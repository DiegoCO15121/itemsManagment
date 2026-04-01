import { Seeder } from 'typeorm-extension';
import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Assignment } from 'src/core/assignments/entities/assignment.entity';
import { User } from 'src/core/user/entities/user.entity';
import { Item } from 'src/core/items/entities/item.entity';
import { AssignmentStatus } from 'src/core/assignments/enums/assingments.enum';

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
        status: AssignmentStatus.ACTIVE,
      },
      {
        user: users[0],
        item: items[1],
        status: AssignmentStatus.ACTIVE,
      },
      {
        user: users[1],
        item: items[2],
        status: AssignmentStatus.ACTIVE,
      },
      {
        user: users[1],
        item: items[3],
        status: AssignmentStatus.ACTIVE,
      },

      // mesa 1
      {
        user: users[2],
        item: items[4],
        status: AssignmentStatus.ACTIVE,
      },
      {
        user: users[2],
        item: items[5],
        status: AssignmentStatus.ACTIVE,
      },
      {
        user: users[3],
        item: items[6],
        status: AssignmentStatus.ACTIVE,
      },
      {
        user: users[3],
        item: items[7],
        status: AssignmentStatus.ACTIVE,
      },
      {
        user: users[4],
        item: items[8],
        status: AssignmentStatus.ACTIVE,
      },

      // mesa 2
      {
        user: users[5],
        item: items[9],
        status: AssignmentStatus.ACTIVE,
      },
      {
        user: users[5],
        item: items[10],
        status: AssignmentStatus.ACTIVE,
      },
      {
        user: users[6],
        item: items[11],
        status: AssignmentStatus.ACTIVE,
      },
      {
        user: users[6],
        item: items[12],
        status: AssignmentStatus.ACTIVE,
      },
      {
        user: users[7],
        item: items[13],
        status: AssignmentStatus.ACTIVE,
      },
      {
        user: users[7],
        item: items[14],
        status: AssignmentStatus.ACTIVE,
      },

      // mesa3
      {
        user: users[8],
        item: items[15],
        status: AssignmentStatus.ACTIVE,
      },
      {
        user: users[8],
        item: items[16],
        status: AssignmentStatus.ACTIVE,
      },
      {
        user: users[9],
        item: items[17],
        status: AssignmentStatus.ACTIVE,
      },
      {
        user: users[9],
        item: items[17],
        status: AssignmentStatus.ACTIVE,
      },
      {
        user: users[10],
        item: items[18],
        status: AssignmentStatus.ACTIVE,
      },
      {
        user: users[10],
        item: items[18],
        status: AssignmentStatus.ACTIVE,
      },

      // mesa 4
      {
        user: users[11],
        item: items[19],
        status: AssignmentStatus.ACTIVE,
      },
      {
        user: users[11],
        item: items[20],
        status: AssignmentStatus.ACTIVE,
      },
      {
        user: users[12],
        item: items[21],
        status: AssignmentStatus.ACTIVE,
      },
      {
        user: users[12],
        item: items[22],
        status: AssignmentStatus.ACTIVE,
      },

      // Mesa 5
      {
        user: users[13],
        item: items[23],
        status: AssignmentStatus.ACTIVE,
      },
      {
        user: users[14],
        item: items[24],
        status: AssignmentStatus.ACTIVE,
      },
      {
        user: users[15],
        item: items[25],
        status: AssignmentStatus.ACTIVE,
      },

      // Mesa 6
      {
        user: users[16],
        item: items[26],
        status: AssignmentStatus.ACTIVE,
      },
      {
        user: users[17],
        item: items[27],
        status: AssignmentStatus.ACTIVE,
      },
    ];

    await this.repo.save(assignments);
  }
}
