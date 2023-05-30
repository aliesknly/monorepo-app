import { MongooseModule } from '@nestjs/mongoose';

const DatabaseModule = MongooseModule.forRoot(process.env.DATABASE_URL);

export default DatabaseModule;
