import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('health')
  getHealth() {
    return {
      status: 'OK',
      message: 'Backend funcionando correctamente',
      timestamp: new Date().toISOString(),
      uptime: process.uptime(),
      environment: process.env.NODE_ENV || 'development'
    };
  }

  @Get('api/status')
  getStatus() {
    const now = new Date();
    return {
      status: 'OK',
      message: 'Backend funcionando correctamente',
      timestamp: now.toISOString(),
      date: now.toLocaleDateString('es-ES', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      }),
      time: now.toLocaleTimeString('es-ES', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
      }),
      timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
      uptime: process.uptime(),
      environment: process.env.NODE_ENV || 'development',
      version: '1.0.0',
      services: {
        database: 'Neon DB (pending)',
        cache: 'Not configured',
        queue: 'Not configured'
      },
      endpoints: {
        health: '/health',
        status: '/api/status',
        root: '/'
      },
      test: {
        message: 'TEST: Backend con Nest.js funcionando en Northflank',
        description: 'Este endpoint debería funcionar correctamente',
        timestamp: now.toISOString(),
        url: 'https://p01--backend--5k9g86lnqs8x.code.run/api/status'
      }
    };
  }
}
