import { UserDomain } from '../user.domain';

class UserEntity implements UserDomain {
  email: string;
  password: string;
  name: string;
  lastName?: string;
  birthDate?: string;
}

export default UserEntity;
