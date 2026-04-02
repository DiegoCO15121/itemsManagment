import { Seeder } from 'typeorm-extension';
import { Repository } from 'typeorm';

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Item } from 'src/core/items/entities/item.entity';
import {
  ItemSpecificType,
  ItemStatus,
  ItemType,
} from 'src/core/items/enums/item.enum';
import { Computer } from 'src/core/items/entities/computer.entity';
import { Area } from 'src/core/areas/entities/area.entity';

@Injectable()
export class ItemSeeder implements Seeder {
  constructor(
    @InjectRepository(Item)
    private readonly repo: Repository<Item>,

    @InjectRepository(Area)
    private readonly AreaRepository: Repository<Area>
  ) {}
  public async run(): Promise<any> {
    const areas = await this.AreaRepository.find()

    const items: Partial<Item>[] = [
      {
        // Mesa Jefes
        name: 'Monitor Samsung',
        description: 'Monitor Curvo de 30″',
        status: ItemStatus.AVAILABLE,
        type: ItemType.FURNITURE,
        serialNumber: '6MPPH9TXB00333L',
        specificType: ItemSpecificType.MONITOR,
        area: areas[0]
      },
      {
        name: 'MacBook Pro',
        description: '14-inch, 2021',
        status: ItemStatus.AVAILABLE,
        type: ItemType.DEVICE,
        serialNumber: 'GC7G357453',
        computer: {
          memory: '8 GB',
          cpu: 'Apple M1',
        } as Computer,
        specificType: ItemSpecificType.COMPUTER,
        area: areas[0]
      },
      {
        name: 'Monitor Samsung',
        description: 'Monitor Curvo de 30″',
        status: ItemStatus.AVAILABLE,
        type: ItemType.FURNITURE,
        serialNumber: '6LG2H9TY807686V',
        specificType: ItemSpecificType.MONITOR,
        area: areas[0]
      },
      {
        name: 'MacBook Air',
        description: '13-inch, M4, 2025',
        status: ItemStatus.AVAILABLE,
        type: ItemType.DEVICE,
        serialNumber: 'HYC6H6465H',
        computer: {
          memory: '16 GB',
          cpu: 'Apple M4',
        } as Computer,
        specificType: ItemSpecificType.COMPUTER,
        area: areas[0]
      },

      // Mesa 1
      {
        name: 'Monitor Samsung',
        description: 'Monitor Curvo de 30″',
        status: ItemStatus.AVAILABLE,
        type: ItemType.FURNITURE,
        serialNumber: '6MPPH9TXB00321M',
        specificType: ItemSpecificType.MONITOR,
        area: areas[1]
      },
      {
        name: 'Macbook Air',
        description: 'M1, 2020',
        status: ItemStatus.AVAILABLE,
        type: ItemType.DEVICE,
        serialNumber: 'HXJLV89T1WFV',
        computer: {
          memory: '8 GB',
          cpu: 'Apple M1',
        } as Computer,
        specificType: ItemSpecificType.COMPUTER,
        area: areas[1]
      },
      {
        name: 'Monitor Samsung',
        description: 'Monitor Curvo de 30″',
        status: ItemStatus.AVAILABLE,
        type: ItemType.FURNITURE,
        serialNumber: '6MPPH9TXB00361H',
        specificType: ItemSpecificType.MONITOR,
        area: areas[1]
      },
      {
        name: 'MacBook Pro  ',
        description: '13-inch, M1, 2020',
        status: ItemStatus.AVAILABLE,
        type: ItemType.DEVICE,
        serialNumber: 'C02FC7AKQ05F',
        computer: {
          memory: '8 GB',
          cpu: 'Apple M1',
        } as Computer,
        specificType: ItemSpecificType.COMPUTER,
        area: areas[1]
      },
      {
        name: 'Monitor Samsung',
        description: 'Monitor Curvo de 30″',
        status: ItemStatus.AVAILABLE,
        type: ItemType.FURNITURE,
        serialNumber: '6MPPH9TXB00327W',
        specificType: ItemSpecificType.MONITOR,
        area: areas[1]
      },

      // Mesa 2
      {
        name: 'Monitor Samsung',
        description: 'Monitor Curvo de 30″',
        status: ItemStatus.AVAILABLE,
        type: ItemType.FURNITURE,
        serialNumber: '6MPPH9TXB00325Z',
        specificType: ItemSpecificType.MONITOR,
        area: areas[1]
      },
      {
        name: 'MacBook Air',
        description: '13-inch, M3, 2024',
        status: ItemStatus.AVAILABLE,
        type: ItemType.DEVICE,
        serialNumber: 'C02FC7AKQ05F',
        computer: {
          memory: '8 GB',
          cpu: 'Apple M3',
        } as Computer,
        specificType: ItemSpecificType.COMPUTER,
        area: areas[1]
      },
      {
        name: 'Monitor Samsung',
        description: 'Monitor Curvo de 30″',
        status: ItemStatus.AVAILABLE,
        type: ItemType.FURNITURE,
        serialNumber: '6MPPH9TXB00174J',
        specificType: ItemSpecificType.MONITOR,
        area: areas[1]
      },
      {
        name: 'MacBook Air',
        description: '13-inch, M4, 2025',
        status: ItemStatus.AVAILABLE,
        type: ItemType.DEVICE,
        serialNumber: 'C02FC7AKQ05F',
        computer: {
          memory: '16 GB',
          cpu: 'Apple M4',
        } as Computer,
        specificType: ItemSpecificType.COMPUTER,
        area: areas[1]
      },
      {
        name: 'Monitor Samsung',
        description: 'Monitor Curvo de 30″',
        status: ItemStatus.AVAILABLE,
        type: ItemType.FURNITURE,
        serialNumber: '6MPPH9TXB00360W',
        specificType: ItemSpecificType.MONITOR,
        area: areas[1]
      },
      {
        name: 'MacBook Air',
        description: '13-inch, M4, 2025',
        status: ItemStatus.AVAILABLE,
        type: ItemType.DEVICE,
        serialNumber: 'J2RH9D22N0',
        computer: {
          memory: '16 GB',
          cpu: 'Apple M4',
        } as Computer,
        specificType: ItemSpecificType.COMPUTER,
        area: areas[1]
      },

      // Mesa 3
      {
        name: 'Monitor Samsung',
        description: 'Monitor Curvo de 30″',
        status: ItemStatus.AVAILABLE,
        type: ItemType.FURNITURE,
        serialNumber: '6MPPH9TXB00358K',
        specificType: ItemSpecificType.MONITOR,
        area: areas[0]
      },
      {
        name: 'Macbook Air',
        description: 'MacBook Air (M1,2020)',
        status: ItemStatus.AVAILABLE,
        type: ItemType.DEVICE,
        serialNumber: 'FVFLT2FV1WFY',
        computer: {
          memory: '8 GB',
          cpu: 'Apple M1',
        } as Computer,
        specificType: ItemSpecificType.COMPUTER,
        area: areas[0]
      },
      {
        name: 'Monitor Samsung',
        description: 'Monitor Curvo de 30″',
        status: ItemStatus.AVAILABLE,
        type: ItemType.FURNITURE,
        serialNumber: '6MPPH9TXB00339T',
        specificType: ItemSpecificType.MONITOR,
        area: areas[0]
      },
      {
        name: 'MacBook Pro',
        description: '13-inch, M1, 2020',
        status: ItemStatus.AVAILABLE,
        type: ItemType.DEVICE,
        serialNumber: 'C02F91SZQ05H',
        computer: {
          memory: '8 GB',
          cpu: 'Apple M1',
        } as Computer,
        specificType: ItemSpecificType.COMPUTER,
        area: areas[0]
      },
      {
        name: 'Monitor Samsung',
        description: 'Monitor Curvo de 30″',
        status: ItemStatus.AVAILABLE,
        type: ItemType.FURNITURE,
        serialNumber: '6MPPH9TXB00359L',
        specificType: ItemSpecificType.MONITOR,
        area: areas[0]
      },
      {
        name: 'MacBook Air',
        description: 'M1, 2020',
        status: ItemStatus.AVAILABLE,
        type: ItemType.DEVICE,
        serialNumber: 'HXJMF5V1WFV',
        computer: {
          memory: '8 GB',
          cpu: 'Apple M1',
        } as Computer,
        specificType: ItemSpecificType.COMPUTER,
        area: areas[0]
      },

      // Mesa 4
      {
        name: 'Monitor Samsung',
        description: 'Monitor Curvo de 30″',
        status: ItemStatus.AVAILABLE,
        type: ItemType.FURNITURE,
        serialNumber: '6MPPH9TXB00332K',
        specificType: ItemSpecificType.MONITOR,
        area: areas[0]
      },
      {
        name: 'MacBook Air',
        description: 'M1, 2020',
        status: ItemStatus.AVAILABLE,
        type: ItemType.DEVICE,
        serialNumber: 'HXJMFDN71WFV',
        computer: {
          memory: '8 GB',
          cpu: 'Apple M1',
        } as Computer,
        specificType: ItemSpecificType.COMPUTER,
        area: areas[0]
      },
      {
        name: 'Monitor Samsung',
        description: 'Monitor Curvo de 30″',
        status: ItemStatus.AVAILABLE,
        type: ItemType.FURNITURE,
        serialNumber: '6MPPH9TXB00329E',
        specificType: ItemSpecificType.MONITOR,
        area: areas[0]
      },
      {
        name: 'MacBook Pro',
        description: 'M2, 2022',
        status: ItemStatus.AVAILABLE,
        type: ItemType.DEVICE,
        serialNumber: 'FDJ6L670W5',
        computer: {
          memory: '8 GB',
          cpu: 'Apple M2',
        } as Computer,
        specificType: ItemSpecificType.COMPUTER,
        area: areas[0]
      },

      // Mesa 5
      {
        name: 'Monitor Samsung',
        description: 'Monitor Curvo de 30″',
        status: ItemStatus.AVAILABLE,
        type: ItemType.FURNITURE,
        serialNumber: '6LG2H9TY807083A',
        specificType: ItemSpecificType.MONITOR,
        area: areas[1]
      },
      {
        name: 'Monitor Samsung',
        description: 'Monitor Curvo de 30″',
        status: ItemStatus.AVAILABLE,
        type: ItemType.FURNITURE,
        serialNumber: '6MPPH9TXB00335R',
        specificType: ItemSpecificType.MONITOR,
        area: areas[1]
      },
      {
        name: 'Monitor Samsung',
        description: 'Monitor Curvo de 30″',
        status: ItemStatus.AVAILABLE,
        type: ItemType.FURNITURE,
        serialNumber: '6MPPH9TXB00363D',
        specificType: ItemSpecificType.MONITOR,
        area: areas[1]
      },

      // Mesa 6
      {
        name: 'Monitor Samsung',
        description: 'Monitor Curvo de 30″',
        status: ItemStatus.AVAILABLE,
        type: ItemType.FURNITURE,
        serialNumber: '6LG2H9TY807574E',
        specificType: ItemSpecificType.MONITOR,
        area: areas[0]
      },
      {
        name: 'Monitor Samsung',
        description: 'Monitor Curvo de 30″',
        status: ItemStatus.AVAILABLE,
        type: ItemType.FURNITURE,
        serialNumber: '6LG2H9TY806936P',
        specificType: ItemSpecificType.MONITOR,
        area: areas[0]
      },
    ];

    await this.repo.save(items);
  }
}
