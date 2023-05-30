export class CreateUserDto {
  name: string;
  email: string;
  password: string;
  lastName?: string;
  birthDate?: string;
}
