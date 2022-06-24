import {
  Int,
  Field,
  GraphQLISODateTime,
  ID,
  ObjectType,
} from '@nestjs/graphql';
import { IsAlpha, IsInt, IsDate } from 'class-validator';
import { ObjectID } from 'typeorm';

@ObjectType()
export class TodoDTO {
  @Field((type) => ID)
  _id: ObjectID;

  @Field()
  title: string;

  @Field({ nullable: true })
  description?: string;

  @IsAlpha()
  @Field()
  status: string;

  @IsInt()
  @Field((type) => Int)
  creatorId: number;

  @IsDate()
  @Field((type) => GraphQLISODateTime)
  createdAt: Date;
}
