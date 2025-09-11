import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HealthController } from './health.controller';
import { StatusController } from './status.controller';

@Module({
  imports: [],
  controllers: [AppController, HealthController, StatusController],
  providers: [AppService],
})
export class AppModule {}
