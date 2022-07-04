import { InputType, Int, Field, GraphQLISODateTime } from '@nestjs/graphql';
import { IsAlpha, IsInt, IsDate } from 'class-validator';

import { StatusEnumType } from '../types';

@InputType()
export class CreateTodoDTO {
  @Field()
  title: string;

  @Field({ nullable: true })
  description?: string;

  @IsAlpha()
  @Field()
  status: StatusEnumType;

  @IsInt()
  @Field(() => Int)
  creatorId: number;

  @IsDate()
  @Field(() => GraphQLISODateTime)
  createdAt: Date;
}
