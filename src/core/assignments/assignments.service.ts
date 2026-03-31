import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateAssignmentDto } from './dto/create-assignment.dto';
import { UpdateAssignmentDto } from './dto/update-assignment.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Assignment } from './entities/assignment.entity';
import { Repository } from 'typeorm';
import { PaginationAssignmentDTO } from './dto/pagination-assignment.dto';

@Injectable()
export class AssignmentsService {
  constructor(
    @InjectRepository(Assignment)
    private assignmentRepository: Repository<Assignment>,
  ) {}

  async create(createAssignmentDto: CreateAssignmentDto) {
    const assignment = this.assignmentRepository.create({
      user: { id: createAssignmentDto.user_id },
      item: { id: createAssignmentDto.item_id },
    });

    await this.assignmentRepository.save(assignment);

    return {
      message: 'assigment Creada',
    };
  }

  async findAll(paginationAssignmentDTO: PaginationAssignmentDTO) {
    const { limit = 10, page = 10 } = paginationAssignmentDTO;

    const query = this.assignmentRepository.createQueryBuilder('assingment');

    query
      .orderBy('id', 'DESC')
      .skip((page - 1) * limit)
      .take(limit);

    const [assignments, total] = await query.getManyAndCount();

    return { assignments, total };
  }

  async findOne(id: number) {
    const assignment = await this.assignmentRepository.findOne({
      where: { id },
      relations: ['items', 'users'],
    });

    if (!assignment) throw new NotFoundException('Asignacion no encontrada');

    return assignment;
  }

  async update(id: number, updateAssignmentDto: UpdateAssignmentDto) {
    const assigment = await this.assignmentRepository.preload({
      id,
      ...updateAssignmentDto,
    });

    if (!assigment) throw new NotFoundException('Asignacion no encontrada');

    await this.assignmentRepository.save(assigment);

    return {
      message: 'Asignaacion actualizada correctamente',
    };
  }

  async remove(id: number) {
    const assignment = await this.findOne(id);

    await this.assignmentRepository.delete(assignment);
  }
}
