import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, MongoRepository, ObjectID } from 'typeorm';
import { ObjectId } from 'mongoose';
import { CreateTodoInput } from './dto/create-todo.input';
import { UpdateTodoInput } from './dto/update-todo.input';
import { Todo } from './entities/todo.entity';

@Injectable()
export class TodosService {
  constructor(
    @InjectRepository(Todo) private todosRepository: MongoRepository<Todo>,
  ) {}

  async create(createTodoInput: CreateTodoInput) {
    const newTodo = await this.todosRepository.create(createTodoInput);
    return this.todosRepository.save(newTodo);
  }

  async findAll() {
    const todoItems = await this.todosRepository.find();
    return todoItems;
  }

  async findOne(id: ObjectID) {
    return await this.todosRepository.findOneBy(id);
  }

  async update(updateTodoInput: UpdateTodoInput) {
    // return `This action updates a #${id} todo`;
    const updateItem = {
      title: updateTodoInput.title,
      status: updateTodoInput.status,
      description: updateTodoInput.description,
      creatorId: updateTodoInput.creatorId,
      createdAt: updateTodoInput.createdAt,
    };
    return await this.todosRepository.update(updateTodoInput._id, updateItem);
  }

  remove(id: ObjectID) {
    this.todosRepository.delete(id);
    return {
      status: 'Đã bay màu',
    };
  }
}
