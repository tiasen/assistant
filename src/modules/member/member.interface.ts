import { IsEmail, IsNotEmpty } from 'class-validator';
import { ObjectID } from 'typeorm';

export class MemberInterface {
  readonly id: ObjectID;

  readonly name: string;

  readonly email: string;

  readonly company: string;
}