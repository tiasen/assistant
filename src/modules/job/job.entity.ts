import { Column, Entity, Index, ObjectID, ObjectIdColumn} from 'typeorm';

@Entity()
export class Job {
  @ObjectIdColumn()
  id: ObjectID;

  @Column()
  @Index({ unique: true })
  name: string;

  @Column()
  url: string

  @Column()
  template: string;
}