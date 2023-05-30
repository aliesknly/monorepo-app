import { Exclude } from 'class-transformer';

export class ShowUserDto {
  name: string;
  email: string;
  lastName: string;
  birthDate: string;

  @Exclude()
  password: string;

  constructor(partial: Partial<ShowUserDto>) {
    Object.assign(this, partial);
  }
}
