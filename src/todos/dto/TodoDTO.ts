import {
  Int,
  Field,
  GraphQLISODateTime,
  ID,
  ObjectType,
} from '@nestjs/graphql';
import { IsAlpha, IsInt, IsDate } from 'class-validator';

@ObjectType()
export class TodoDTO {
  @Field((type) => ID)
  id: number;

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
