import {
  Int,
  Field,
  GraphQLISODateTime,
  ID,
  ObjectType,
} from '@nestjs/graphql';
import { IsAlpha, IsInt, IsDate } from 'class-validator';

import { StatusEnumType } from '../types';

@ObjectType()
export class TodoDTO {
  @Field(() => ID)
  id: number;

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
