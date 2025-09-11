import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  // Configurar CORS
  app.enableCors({
    origin: [
      'https://p01--frontend--5k9g86lnqs8x.code.run',
      'http://localhost:5173', // Para desarrollo local
      'http://localhost:3000'  // Para desarrollo local
    ],
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true
  });
  
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
