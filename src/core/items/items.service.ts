import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateItemDto } from './dto/create-item.dto';
import { UpdateItemDto } from './dto/update-item.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Item } from './entities/item.entity';
import { DataSource, Repository } from 'typeorm';
import { Device } from './entities/device.entity';
import { PaginationItemDTO } from './dto/pagination-item.dto';

@Injectable()
export class ItemsService {
  constructor(
    @InjectRepository(Item) private ItemRespository: Repository<Item>,
    @InjectRepository(Device) private DeviceRepository: Repository<Device>,
    private dataSource: DataSource,
  ) {}

  async create(createItemDto: CreateItemDto) {
    return await this.dataSource.transaction(async (manager) => {
      const item = manager.create(Item, {
        name: createItemDto.name,
        description: createItemDto.description,
        type: createItemDto.type,
        status: createItemDto.status,
      });

      const savedItem = await manager.save(item);

      if (createItemDto.type === 'device') {
        const device = manager.create(Device, {
          item: savedItem,
          serial_number: createItemDto.serialNumber,
          memory: createItemDto.memory,
          cpu: createItemDto.cpu,
        });

        await manager.save(device);
      }

      return savedItem;
    });
  }

  async findAll(paginationItemDto: PaginationItemDTO) {
    const { page = 1, limit = 10 } = paginationItemDto;

    const query = this.ItemRespository.createQueryBuilder('user');

    query
      .orderBy('id', 'DESC')
      .skip((page - 1) * limit)
      .take(limit);

    const [items, total] = await query.getManyAndCount();
    return { total, items };
  }

  async findOne(id: number) {
    const item = await this.ItemRespository.findOneBy({ id });

    if (!item) throw new NotFoundException('Usuario no encontrado');

    return item;
  }

  update(id: number, updateItemDto: UpdateItemDto) {
    return `This action updates a #${id} item`;
  }

  async remove(id: number) {
    const item = await this.findOne(id);

    return this.ItemRespository.delete(id);
  }
}
