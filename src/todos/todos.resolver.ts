import { Resolver, Query, Mutation, Args, ID } from '@nestjs/graphql';
import { ObjectID } from 'typeorm';

import { TodosService } from './todos.service';
import { CreateTodoDTO } from './dto/CreateTodoDTO';
import { UpdateTodoDTO } from './dto/UpdateTodoDTO';
import { TodoDTO } from './dto/TodoDTO';

@Resolver(() => TodoDTO)
export class TodosResolver {
  constructor(private readonly todosService: TodosService) {}

  @Mutation(() => TodoDTO)
  createTodo(@Args('createTodoInput') createTodoInput: CreateTodoDTO) {
    return this.todosService.create(createTodoInput);
  }

  @Query(() => [TodoDTO], { name: 'todos' })
  findAll() {
    return this.todosService.findAll();
  }

  @Query(() => TodoDTO, { name: 'todo' })
  findOne(@Args('id', { type: () => ID }) _id: ObjectID) {
    return this.todosService.findOne(_id);
  }

  @Mutation(() => TodoDTO)
  updateTodo(@Args('updateTodoInput') updateTodoInput: UpdateTodoDTO) {
    this.todosService.update(updateTodoInput);
    return this.todosService.findOne(updateTodoInput._id);
  }

  @Mutation(() => TodoDTO)
  removeTodo(@Args('id', { type: () => ID }) _id: ObjectID) {
    return this.todosService.remove(_id);
  }
}
