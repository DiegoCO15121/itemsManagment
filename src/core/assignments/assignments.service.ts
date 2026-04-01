import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateAssignmentDto } from './dto/create-assignment.dto';
import { UpdateAssignmentDto } from './dto/update-assignment.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Assignment } from './entities/assignment.entity';
import { Repository } from 'typeorm';
import { PaginationAssignmentDTO } from './dto/pagination-assignment.dto';
import { AssignmentStatus } from './enums/assingments.enum';

@Injectable()
export class AssignmentsService {
  constructor(
    @InjectRepository(Assignment)
    private assignmentRepository: Repository<Assignment>,
  ) {}

  async create(createAssignmentDto: CreateAssignmentDto) {
    const existing = await this.assignmentRepository.findOne({
      where: {
        item: { id: createAssignmentDto.itemId },
        status: AssignmentStatus.ACTIVE,
      },
    });

    if (existing) {
      throw new BadRequestException('El item ya está asignado');
    }

    const assignment = this.assignmentRepository.create({
      user: { id: createAssignmentDto.userId },
      item: { id: createAssignmentDto.itemId },
    });

    await this.assignmentRepository.save(assignment);

    return {
      message: 'assigment Creada',
    };
  }

  async findAll(paginationAssignmentDTO: PaginationAssignmentDTO) {
    const { limit = 10, page = 1 } = paginationAssignmentDTO;

    const query = this.assignmentRepository.createQueryBuilder('assignment');

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
      relations: ['item', 'user'],
    });

    if (!assignment) throw new NotFoundException('Asignacion no encontrada');

    return assignment;
  }

  async update(id: number, updateAssignmentDto: UpdateAssignmentDto) {
    const assignment = await this.findOne(id);

    assignment.status = updateAssignmentDto.status;

    if (updateAssignmentDto.status === AssignmentStatus.INACTIVE) {
      assignment.endDate = new Date();
    }

    await this.assignmentRepository.save(assignment);

    return {
      message: 'Asignaacion actualizada correctamente',
    };
  }

  async remove(id: number) {
    await this.findOne(id);

    await this.assignmentRepository.delete(id);
  }
}
