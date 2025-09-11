import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HealthController } from './health.controller';
import { StatusController } from './status.controller';
// import { ProductsController } from './products.controller'; // Temporalmente comentado

@Module({
  imports: [],
  controllers: [AppController, HealthController, StatusController], // ProductsController temporalmente removido
  providers: [AppService],
})
export class AppModule {}
