import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmQueryService } from '@nestjs-query/query-typeorm';
import { Repository } from 'typeorm';

import { CreateTodoDTO } from './dto/CreateTodoDTO';
import { UpdateTodoDTO } from './dto/UpdateTodoDTO';
import { TodoEntity } from './entities/todo.entity';

@Injectable()
export class TodosService extends TypeOrmQueryService<TodoEntity> {
  constructor(
    @InjectRepository(TodoEntity)
    private todosRepository: Repository<TodoEntity>,
  ) {
    super(todosRepository, { useSoftDelete: true });
  }

  async create(createTodoInput: CreateTodoDTO) {
    return await this.todosRepository.save(createTodoInput);
  }

  async findAll(): Promise<TodoEntity[]> {
    const todoItems = await this.todosRepository.find();
    return todoItems;
  }

  async findOne(id: number) {
    return await this.todosRepository.findOneBy({ id: id });
  }

  async update(updateTodoInput: UpdateTodoDTO): Promise<UpdateTodoDTO> {
    const updateItem = {
      title: updateTodoInput.title,
      status: updateTodoInput.status,
      description: updateTodoInput.description,
      creatorId: updateTodoInput.creatorId,
      createdAt: updateTodoInput.createdAt,
    };
    this.todosRepository.update(updateTodoInput.id, updateItem);
    return;
  }

  softRemove(id: number) {
    this.todosRepository.softRemove({ id: id });
    return {
      status: 'Đã bay màu',
    };
  }
}
