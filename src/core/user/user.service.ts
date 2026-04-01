import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { PaginationUserDTO } from './dto/pagination-user.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private UserRepository: Repository<User>,
  ) {}

  async create(createUserDto: CreateUserDto) {
    const user = this.UserRepository.create(createUserDto);

    await this.UserRepository.save(user);

    return {
      userId: user.id,
    };
  }

  async findAll(PaginationUserDTO: PaginationUserDTO) {
    const { page = 1, limit = 10 } = PaginationUserDTO;

    const query = this.UserRepository.createQueryBuilder('user');

    query
      .orderBy('user.id', 'DESC')
      .skip((page - 1) * limit)
      .take(limit);

    const [users, total] = await query.getManyAndCount();
    return { total, users };
  }

  async findOne(id: number) {
    const user = await this.UserRepository.findOne({
      where: { id },
      relations: ['assignments'],
    });

    if (!user) throw new NotFoundException('Usuario no encontrado');

    return user;
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    const user = await this.UserRepository.preload({ id, ...updateUserDto });

    if (!user) throw new NotFoundException('Usuario no encontrado');

    const newUser = await this.UserRepository.save(user);

    return {
      message: 'Usuario actualizado'
    }
  }

  async remove(id: number) {
    const user = await this.UserRepository.findOneBy({ id });

    if (!user) throw new NotFoundException('Usuario no encontrado');

    await this.UserRepository.delete(id);

    return 'Usuario Eliminado Correctamente';
  }
}
