import { CreateTodoDTO } from './CreateTodoDTO';
import {
  InputType,
  Field,
  Int,
  PartialType,
  GraphQLISODateTime,
  ID,
} from '@nestjs/graphql';
import { IsAlpha, IsInt, IsDate } from 'class-validator';
import { ObjectID } from 'typeorm';

@InputType()
export class UpdateTodoDTO extends PartialType(CreateTodoDTO) {
  @Field((type) => ID)
  _id: ObjectID;

  @Field()
  title: string;

  @Field({ nullable: true })
  description?: string;

  @IsAlpha()
  @Field({ nullable: true })
  status: string;

  @IsInt()
  @Field((type) => Int, { nullable: true })
  creatorId: number;

  @IsDate()
  @Field((type) => GraphQLISODateTime, { nullable: true })
  createdAt: Date;
}
