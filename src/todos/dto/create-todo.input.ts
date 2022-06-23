import { InputType, Int, Field, GraphQLISODateTime } from '@nestjs/graphql';
import { IsAlpha, IsInt, IsDate } from 'class-validator';

@InputType()
export class CreateTodoInput {
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
