import { Column, Entity, ObjectID, ObjectIdColumn } from 'typeorm';

@Entity()
export class Todo {
  @ObjectIdColumn()
  _id: ObjectID;

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
}
