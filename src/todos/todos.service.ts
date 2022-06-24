import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, MongoRepository, ObjectID } from 'typeorm';
import { ObjectId } from 'mongoose';
import { CreateTodoDTO } from './dto/CreateTodoDTO';
import { UpdateTodoDTO } from './dto/UpdateTodoDTO';
import { Todo } from './entities/todo.entity';

@Injectable()
export class TodosService {
  constructor(
    @InjectRepository(Todo) private todosRepository: MongoRepository<Todo>,
  ) {}

  async create(createTodoInput: CreateTodoDTO) {
    return await this.todosRepository.save(createTodoInput);
  }

  async findAll() {
    const todoItems = await this.todosRepository.find();
    return todoItems;
  }

  async findOne(id: ObjectID) {
    return await this.todosRepository.findOneBy(id);
  }

  async update(updateTodoInput: UpdateTodoDTO): Promise<UpdateTodoDTO> {
    const updateItem = {
      title: updateTodoInput.title,
      status: updateTodoInput.status,
      description: updateTodoInput.description,
      creatorId: updateTodoInput.creatorId,
      createdAt: updateTodoInput.createdAt,
    };
    this.todosRepository.update(updateTodoInput._id, updateItem);
    return;
  }

  remove(id: ObjectID) {
    this.todosRepository.delete(id);
    return {
      status: 'Đã bay màu',
    };
  }
}
