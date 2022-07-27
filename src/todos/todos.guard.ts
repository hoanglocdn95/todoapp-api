import { TodosService } from './todos.service';
import {
  Injectable,
  CanActivate,
  ExecutionContext,
  Inject,
  forwardRef,
} from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class TodosGuard implements CanActivate {
  constructor(
    @Inject(forwardRef(() => TodosService))
    private todosService: TodosService,
  ) {}

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const response = context.switchToHttp().getResponse();
    const { id, creatorId } = response.updateTodoInput;
    const isAccepted = (async (idItem) => {
      return await this.todosService.findOne(parseInt(idItem));
    })(id)
      .then((res) => creatorId === res.creatorId)
      .catch(() => false);
    return isAccepted;
  }
}
