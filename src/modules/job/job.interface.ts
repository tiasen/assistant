import { ObjectID } from 'typeorm';

export class JobInterface {
  readonly id: ObjectID;
  readonly name: string;
  readonly url: string
  readonly template: string;
}