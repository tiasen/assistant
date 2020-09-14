import { Column, Entity, Index, ObjectID, ObjectIdColumn } from 'typeorm';

@Entity()
export class Member {
  @ObjectIdColumn()
  id: ObjectID;

  @Column()
  name: string;

  @Column()
  @Index({unique: true})
  email: string;

  @Column()
  company: string;
}