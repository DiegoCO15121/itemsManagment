import { Injectable } from '@nestjs/common';
import { CreateAreaDto } from './dto/create-area.dto';
import { UpdateAreaDto } from './dto/update-area.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Area } from './entities/area.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AreasService {
  constructor(
    @InjectRepository(Area) private AreaRepository: Repository<Area>,
  ) {}

  async create(createAreaDto: CreateAreaDto) {
    const area = this.AreaRepository.create(createAreaDto);

    await this.AreaRepository.save(area);
  }

  async findAll() {
    return `This action returns all areas`;
  }

  findOne(id: number) {
    return `This action returns a #${id} area`;
  }

  async update(id: number, updateAreaDto: UpdateAreaDto) {
    const area = await this.AreaRepository.preload({ id, ...updateAreaDto });

    return {
      message: 'Area actualizada correctamente',
    };
  }

  remove(id: number) {
    return `This action removes a #${id} area`;
  }
}
