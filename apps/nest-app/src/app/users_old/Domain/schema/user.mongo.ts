import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from './user.schema';

export const UserMongoModule = MongooseModule.forFeature([
  { name: User.name, schema: UserSchema },
]);
