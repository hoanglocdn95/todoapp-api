import { ObjectType, Field, Int, ID } from '@nestjs/graphql';
import { ObjectId } from 'mongoose';
import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  ObjectID,
  ObjectIdColumn,
} from 'typeorm';

@Entity()
@ObjectType()
export class Todo {
  @ObjectIdColumn()
  @Field((type) => ID)
  _id: ObjectID;

  @Column()
  @Field()
  title: string;

  @Column({ nullable: true })
  @Field({ nullable: true })
  description?: string;

  @Column()
  @Field()
  status: string;

  @Column()
  @Field((type) => Int)
  creatorId: number;

  @Column()
  @Field((type) => Date)
  createdAt: Date;
}
