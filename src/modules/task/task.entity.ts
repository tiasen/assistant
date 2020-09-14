import {
  Column,
  Entity,
  JoinColumn,
  ObjectID,
  ObjectIdColumn,
  OneToOne,
} from 'typeorm';
import { JobInterface } from '../job/job.interface';

@Entity()
export class Task {
  @ObjectIdColumn()
  id: ObjectID;

  @Column()
  name: string;

  @Column()
  job: string;

  @Column()
  currentOwner: string;

  @Column()
  owners: string[];

  @Column()
  rrule: string;
}
