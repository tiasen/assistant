import { IsNotEmpty, IsUrl } from 'class-validator';

export class JobDto {
  @IsNotEmpty()
  readonly name: string;

  @IsUrl()
  readonly url: string

  @IsNotEmpty()
  readonly template: string;
}