import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  DeleteDateColumn,
} from 'typeorm';

@Entity({ name: 'todoEntity' })
export class TodoEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column({ nullable: true })
  description?: string;

  @Column()
  status: string;

  @Column()
  creatorId: number;

  @Column()
  createdAt: Date;

  @DeleteDateColumn()
  deletedAt?: Date;
}
