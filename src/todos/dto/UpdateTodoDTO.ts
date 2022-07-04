import {
  InputType,
  Field,
  Int,
  PartialType,
  GraphQLISODateTime,
  ID,
} from '@nestjs/graphql';
import { IsAlpha, IsInt, IsDate } from 'class-validator';

import { CreateTodoDTO } from './CreateTodoDTO';
import { StatusEnumType } from '../types';

@InputType()
export class UpdateTodoDTO extends PartialType(CreateTodoDTO) {
  @Field(() => ID)
  id: number;

  @Field()
  title: string;

  @Field({ nullable: true })
  description?: string;

  @IsAlpha()
  @Field({ nullable: true })
  status: StatusEnumType;

  @IsInt()
  @Field(() => Int, { nullable: true })
  creatorId: number;

  @IsDate()
  @Field(() => GraphQLISODateTime, { nullable: true })
  createdAt: Date;
}
