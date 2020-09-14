import { IsEmail, IsNotEmpty } from 'class-validator';

export class MemberDto {
  @IsNotEmpty()
  readonly name: string;

  @IsNotEmpty()
  @IsEmail()
  readonly email: string;

  readonly company: string;
}