import { Module } from '@nestjs/common';
import { UsersService } from './UseCase';
import { UsersController } from './Controller';
import { UserMongoModule } from './Domain/schema';

@Module({
  imports: [UserMongoModule],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
