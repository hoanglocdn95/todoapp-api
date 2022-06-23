import { Resolver, Query, Mutation, Args, ID } from '@nestjs/graphql';
import { TodosService } from './todos.service';
import { Todo } from './entities/todo.entity';
import { CreateTodoInput } from './dto/create-todo.input';
import { UpdateTodoInput } from './dto/update-todo.input';
import { ObjectID } from 'typeorm';

@Resolver(() => Todo)
export class TodosResolver {
  constructor(private readonly todosService: TodosService) {}

  @Mutation(() => Todo)
  createTodo(@Args('createTodoInput') createTodoInput: CreateTodoInput) {
    return this.todosService.create(createTodoInput);
  }

  @Query(() => [Todo], { name: 'todos' })
  findAll() {
    return this.todosService.findAll();
  }

  @Query(() => Todo, { name: 'todo' })
  findOne(@Args('id', { type: () => ID }) _id: ObjectID) {
    return this.todosService.findOne(_id);
  }

  @Mutation(() => Todo)
  updateTodo(@Args('updateTodoInput') updateTodoInput: UpdateTodoInput) {
    this.todosService.update(updateTodoInput);
    return this.todosService.findOne(updateTodoInput._id);
  }

  @Mutation(() => Todo)
  removeTodo(@Args('id', { type: () => ID }) _id: ObjectID) {
    return this.todosService.remove(_id);
  }
}
