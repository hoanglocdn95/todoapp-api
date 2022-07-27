import { Resolver, Query, Mutation, Args, ID } from '@nestjs/graphql';
import { UpdateManyResponse, Filter } from '@nestjs-query/core';
import { UseGuards } from '@nestjs/common';
import {
  FilterType,
  UpdateManyResponseType,
} from '@nestjs-query/query-graphql';

import { TodosService } from './todos.service';
import { CreateTodoDTO } from './dto/CreateTodoDTO';
import { UpdateTodoDTO } from './dto/UpdateTodoDTO';
import { TodoDTO } from './dto/TodoDTO';
import { TodosGuard } from './todos.guard';

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
  findOne(@Args('id', { type: () => ID }) id: number) {
    return this.todosService.findOne(id);
  }

  @Mutation(() => TodoDTO)
  @UseGuards(TodosGuard)
  updateTodo(@Args('updateTodoInput') updateTodoInput: UpdateTodoDTO) {
    this.todosService.update(updateTodoInput);
    return this.todosService.findOne(updateTodoInput.id);
  }

  @Mutation(() => TodoDTO)
  removeTodo(@Args('id', { type: () => ID }) id: number) {
    return this.todosService.softRemove(id);
  }

  @Mutation(() => TodoDTO)
  restoreOneTodoItem(
    @Args('id', { type: () => ID }) id: number,
  ): Promise<TodoDTO> {
    return this.todosService.restoreOne(id);
  }

  // @Mutation(() => UpdateManyResponseType())
  // restoreManyTodoItems(
  //   @Args('id', { type: () => FilterType(TodoDTO) }) filter: Filter<TodoDTO>,
  // ): Promise<UpdateManyResponse> {
  //   return this.todosService.restoreMany(filter);
  // }
}
