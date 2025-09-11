import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  try {
    console.log('🚀 Iniciando aplicación...');
    console.log('📊 Variables de entorno:');
    console.log('- NODE_ENV:', process.env.NODE_ENV);
    console.log('- PORT:', process.env.PORT);
    console.log('- DATABASE_URL:', process.env.DATABASE_URL ? 'Configurada' : 'NO CONFIGURADA');
    
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

    // Configurar Swagger
    const config = new DocumentBuilder()
      .setTitle('Monorepo Test API')
      .setDescription('API del backend para el monorepo con Nest.js')
      .setVersion('1.0')
      .addTag('app', 'Endpoints principales de la aplicación')
      .addTag('health', 'Endpoints de salud y monitoreo del sistema')
      .addTag('status', 'Endpoints de información detallada del sistema')
      .addTag('products', 'Endpoints de gestión de productos')
      .build();
    
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('api/docs', app, document, {
      customSiteTitle: 'Monorepo Test API Docs',
      customfavIcon: 'https://nestjs.com/img/logo-small.svg',
      customJs: [
        'https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.15.5/swagger-ui-bundle.min.js',
        'https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.15.5/swagger-ui-standalone-preset.min.js',
      ],
      customCssUrl: [
        'https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.15.5/swagger-ui.min.css',
      ],
    });
    
    const port = process.env.PORT ?? 3000;
    await app.listen(port);
    console.log(`✅ Aplicación iniciada correctamente en el puerto ${port}`);
    console.log(`📚 Swagger disponible en: http://localhost:${port}/api/docs`);
  } catch (error) {
    console.error('❌ Error al iniciar la aplicación:', error);
    process.exit(1);
  }
}
bootstrap();
