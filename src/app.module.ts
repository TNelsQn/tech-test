import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CommsController } from './comms.controller';
import { CommsService } from './comms.service';
import { UserService } from './user.service';

@Module({
  imports: [],
  controllers: [AppController, CommsController],
  providers: [AppService, CommsService, UserService],
})
export class AppModule {}
