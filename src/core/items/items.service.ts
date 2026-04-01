import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateItemDto } from './dto/create-item.dto';
import { UpdateItemDto } from './dto/update-item.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Item } from './entities/item.entity';
import { DataSource, Repository } from 'typeorm';
import { Device } from './entities/device.entity';
import { PaginationItemDTO } from './dto/pagination-item.dto';
import { ItemType } from './enums/item.enum';

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
        serialNumber: createItemDto.serialNumber
      });

      const savedItem = await manager.save(item);

      if (createItemDto.type === ItemType.DEVICE) {
        if (
          !createItemDto.memory ||
          !createItemDto.cpu
        ) {
          throw new BadRequestException('Faltan datos del device');
        }
        const device = manager.create(Device, {
          item: savedItem,
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

    const query = this.ItemRespository.createQueryBuilder('item');

    query
      .orderBy('item.id', 'DESC')
      .skip((page - 1) * limit)
      .take(limit);

    const [items, total] = await query.getManyAndCount();
    return { total, items };
  }

  async findOne(id: number) {
    const item = await this.ItemRespository.findOneBy({ id });

    if (!item) throw new NotFoundException('Item no encontrado');

    return item;
  }

  async update(id: number, updateItemDto: UpdateItemDto) {
    const item = await this.ItemRespository.preload({
      id,
      ...updateItemDto,
    });

    if (!item) throw new NotFoundException('Item no encontrado');

    return await this.ItemRespository.save(item);
  }

  async remove(id: number) {
    const item = await this.findOne(id);

    return this.ItemRespository.delete(id);
  }
}
