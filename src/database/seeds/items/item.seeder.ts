import { Seeder } from 'typeorm-extension';
import { Repository } from 'typeorm';

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Item } from 'src/core/items/entities/item.entity';
import { ItemStatus, ItemType } from 'src/core/items/enums/item.enum';
import { Device } from 'src/core/items/entities/device.entity';

@Injectable()
export class ItemSeeder implements Seeder {
  constructor(
    @InjectRepository(Item)
    private readonly repo: Repository<Item>,
  ) {}
  public async run(): Promise<any> {
    const items: Partial<Item>[] = [
      {
        // Mesa Jefes
        name: 'Monitor Samsung',
        description: 'Monitor Curvo de 30″',
        status: ItemStatus.ASSIGNED,
        type: ItemType.FURNITURE,
        serialNumber: '6MPPH9TXB00333L',
      },
      {
        name: 'MacBook Pro',
        description: '14-inch, 2021',
        status: ItemStatus.ASSIGNED,
        type: ItemType.DEVICE,
        serialNumber: 'GC7G357453',
        device: {
          memory: '8 GB',
          cpu: 'Apple M1',
        } as Device,
      },
      {
        name: 'Monitor Samsung',
        description: 'Monitor Curvo de 30″',
        status: ItemStatus.ASSIGNED,
        type: ItemType.FURNITURE,
        serialNumber: '6LG2H9TY807686V',
      },
      {
        name: 'MacBook Air',
        description: '13-inch, M4, 2025',
        status: ItemStatus.ASSIGNED,
        type: ItemType.DEVICE,
        serialNumber: 'HYC6H6465H',
        device: {
          memory: '16 GB',
          cpu: 'Apple M4',
        } as Device,
      },

      // Mesa 1
      {
        name: 'Monitor Samsung',
        description: 'Monitor Curvo de 30″',
        status: ItemStatus.ASSIGNED,
        type: ItemType.FURNITURE,
        serialNumber: '6MPPH9TXB00321M',
      },
      {
        name: 'Macbook Air',
        description: 'M1, 2020',
        status: ItemStatus.ASSIGNED,
        type: ItemType.DEVICE,
        serialNumber: 'HXJLV89T1WFV',
        device: {
          memory: '8 GB',
          cpu: 'Apple M1',
        } as Device,
      },
      {
        name: 'Monitor Samsung',
        description: 'Monitor Curvo de 30″',
        status: ItemStatus.ASSIGNED,
        type: ItemType.FURNITURE,
        serialNumber: '6MPPH9TXB00361H',
      },
      {
        name: 'MacBook Pro  ',
        description: '13-inch, M1, 2020',
        status: ItemStatus.ASSIGNED,
        type: ItemType.DEVICE,
        serialNumber: 'C02FC7AKQ05F',
        device: {
          memory: '8 GB',
          cpu: 'Apple M1',
        } as Device,
      },
      {
        name: 'Monitor Samsung',
        description: 'Monitor Curvo de 30″',
        status: ItemStatus.ASSIGNED,
        type: ItemType.FURNITURE,
        serialNumber: '6MPPH9TXB00327W',
      },

      // Mesa 2
      {
        name: 'Monitor Samsung',
        description: 'Monitor Curvo de 30″',
        status: ItemStatus.ASSIGNED,
        type: ItemType.FURNITURE,
        serialNumber: '6MPPH9TXB00325Z',
      },
      {
        name: 'MacBook Air',
        description: '13-inch, M3, 2024',
        status: ItemStatus.ASSIGNED,
        type: ItemType.DEVICE,
        serialNumber: 'C02FC7AKQ05F',
        device: {
          memory: '8 GB',
          cpu: 'Apple M3',
        } as Device,
      },
      {
        name: 'Monitor Samsung',
        description: 'Monitor Curvo de 30″',
        status: ItemStatus.ASSIGNED,
        type: ItemType.FURNITURE,
        serialNumber: '6MPPH9TXB00174J',
      },
      {
        name: 'MacBook Air',
        description: '13-inch, M4, 2025',
        status: ItemStatus.ASSIGNED,
        type: ItemType.DEVICE,
        serialNumber: 'C02FC7AKQ05F',
        device: {
          memory: '16 GB',
          cpu: 'Apple M4',
        } as Device,
      },
      {
        name: 'Monitor Samsung',
        description: 'Monitor Curvo de 30″',
        status: ItemStatus.ASSIGNED,
        type: ItemType.FURNITURE,
        serialNumber: '6MPPH9TXB00360W',
      },
      {
        name: 'MacBook Air',
        description: '13-inch, M4, 2025',
        status: ItemStatus.ASSIGNED,
        type: ItemType.DEVICE,
        serialNumber: 'J2RH9D22N0',
        device: {
          memory: '16 GB',
          cpu: 'Apple M4',
        } as Device,
      },

      // Mesa 3
      {
        name: 'Monitor Samsung',
        description: 'Monitor Curvo de 30″',
        status: ItemStatus.ASSIGNED,
        type: ItemType.FURNITURE,
        serialNumber: '6MPPH9TXB00358K',
      },
      {
        name: 'Macbook Air',
        description: 'MacBook Air (M1,2020)',
        status: ItemStatus.ASSIGNED,
        type: ItemType.DEVICE,
        serialNumber: 'FVFLT2FV1WFY',
        device: {
          memory: '8 GB',
          cpu: 'Apple M1',
        } as Device,
      },
      {
        name: 'Monitor Samsung',
        description: 'Monitor Curvo de 30″',
        status: ItemStatus.ASSIGNED,
        type: ItemType.FURNITURE,
        serialNumber: '6MPPH9TXB00339T',
      },
      {
        name: 'MacBook Pro',
        description: '13-inch, M1, 2020',
        status: ItemStatus.ASSIGNED,
        type: ItemType.DEVICE,
        serialNumber: 'C02F91SZQ05H',
        device: {
          memory: '8 GB',
          cpu: 'Apple M1',
        } as Device,
      },
      {
        name: 'Monitor Samsung',
        description: 'Monitor Curvo de 30″',
        status: ItemStatus.ASSIGNED,
        type: ItemType.FURNITURE,
        serialNumber: '6MPPH9TXB00359L',
      },
      {
        name: 'MacBook Air',
        description: 'M1, 2020',
        status: ItemStatus.ASSIGNED,
        type: ItemType.DEVICE,
        serialNumber: 'HXJMF5V1WFV',
        device: {
          memory: '8 GB',
          cpu: 'Apple M1',
        } as Device,
      },

      // Mesa 4
      {
        name: 'Monitor Samsung',
        description: 'Monitor Curvo de 30″',
        status: ItemStatus.ASSIGNED,
        type: ItemType.FURNITURE,
        serialNumber: '6MPPH9TXB00332K',
      },
      {
        name: 'MacBook Air',
        description: 'M1, 2020',
        status: ItemStatus.ASSIGNED,
        type: ItemType.DEVICE,
        serialNumber: 'HXJMFDN71WFV',
        device: {
          memory: '8 GB',
          cpu: 'Apple M1',
        } as Device,
      },
      {
        name: 'Monitor Samsung',
        description: 'Monitor Curvo de 30″',
        status: ItemStatus.ASSIGNED,
        type: ItemType.FURNITURE,
        serialNumber: '6MPPH9TXB00329E',
      },
      {
        name: 'MacBook Pro',
        description: 'M2, 2022',
        status: ItemStatus.ASSIGNED,
        type: ItemType.DEVICE,
        serialNumber: 'FDJ6L670W5',
        device: {
          memory: '8 GB',
          cpu: 'Apple M2',
        } as Device,
      },

      // Mesa 5
      {
        name: 'Monitor Samsung',
        description: 'Monitor Curvo de 30″',
        status: ItemStatus.ASSIGNED,
        type: ItemType.FURNITURE,
        serialNumber: '6LG2H9TY807083A',
      },
      {
        name: 'Monitor Samsung',
        description: 'Monitor Curvo de 30″',
        status: ItemStatus.ASSIGNED,
        type: ItemType.FURNITURE,
        serialNumber: '6MPPH9TXB00335R',
      },
      {
        name: 'Monitor Samsung',
        description: 'Monitor Curvo de 30″',
        status: ItemStatus.ASSIGNED,
        type: ItemType.FURNITURE,
        serialNumber: '6MPPH9TXB00363D',
      },

      // Mesa 6
      {
        name: 'Monitor Samsung',
        description: 'Monitor Curvo de 30″',
        status: ItemStatus.ASSIGNED,
        type: ItemType.FURNITURE,
        serialNumber: '6LG2H9TY807574E',
      },
      {
        name: 'Monitor Samsung',
        description: 'Monitor Curvo de 30″',
        status: ItemStatus.ASSIGNED,
        type: ItemType.FURNITURE,
        serialNumber: '6LG2H9TY806936P',
      },
    ];

    await this.repo.save(items);
  }
}
