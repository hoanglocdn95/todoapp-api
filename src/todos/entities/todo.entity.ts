import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  DeleteDateColumn,
} from 'typeorm';

import { StatusEnumType } from '../types';

@Entity({ name: 'todoEntity' })
export class TodoEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column({ nullable: true })
  description?: string;

  @Column({ default: StatusEnumType.New })
  status: StatusEnumType;

  @Column()
  creatorId: number;

  @Column()
  createdAt: Date;

  @DeleteDateColumn()
  deletedAt?: Date;
}
