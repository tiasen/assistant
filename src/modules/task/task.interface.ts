import { ObjectID } from 'typeorm';
import { IsDateString, IsNotEmpty, IsNotEmptyObject } from 'class-validator';
import { TaskDto } from './task.dto';
import { MemberInterface } from '../member/member.interface';
import { Job } from '../job/job.entity';
import { Member } from '../member/member.entity';

export class TaskInterface {

  readonly id: ObjectID;

  readonly name: string;

  readonly startDate: Date;

  readonly endDate: Date;

  readonly job: Job[];

  readonly currentOwner: Member[];

  readonly owners: Member[];
}