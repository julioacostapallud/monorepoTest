import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiTags, ApiOperation, ApiResponse, ApiProperty } from '@nestjs/swagger';

@ApiTags('health')
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @ApiOperation({ summary: 'Endpoint raíz' })
  @ApiResponse({ status: 200, description: 'Mensaje de bienvenida' })
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('health')
  @ApiOperation({ summary: 'Health check del sistema' })
  @ApiResponse({ 
    status: 200, 
    description: 'Estado de salud del backend',
    schema: {
      type: 'object',
      properties: {
        status: { type: 'string', example: 'OK' },
        message: { type: 'string', example: 'Backend funcionando correctamente' },
        timestamp: { type: 'string', example: '2024-01-01T00:00:00.000Z' },
        uptime: { type: 'number', example: 123.456 },
        environment: { type: 'string', example: 'production' }
      }
    }
  })
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
  @ApiOperation({ summary: 'Información detallada del sistema' })
  @ApiResponse({ 
    status: 200, 
    description: 'Información completa del backend y servicios',
    schema: {
      type: 'object',
      properties: {
        status: { type: 'string', example: 'OK' },
        message: { type: 'string', example: 'Backend funcionando correctamente' },
        timestamp: { type: 'string', example: '2024-01-01T00:00:00.000Z' },
        date: { type: 'string', example: '1 de enero de 2024' },
        time: { type: 'string', example: '00:00:00' },
        timezone: { type: 'string', example: 'America/New_York' },
        uptime: { type: 'number', example: 123.456 },
        environment: { type: 'string', example: 'production' },
        version: { type: 'string', example: '1.0.0' },
        services: {
          type: 'object',
          properties: {
            database: { type: 'string', example: 'Neon DB (pending)' },
            cache: { type: 'string', example: 'Not configured' },
            queue: { type: 'string', example: 'Not configured' }
          }
        },
        endpoints: {
          type: 'object',
          properties: {
            health: { type: 'string', example: '/health' },
            status: { type: 'string', example: '/api/status' },
            root: { type: 'string', example: '/' }
          }
        },
        test: {
          type: 'object',
          properties: {
            message: { type: 'string', example: 'TEST: Backend con Nest.js funcionando en Northflank' },
            description: { type: 'string', example: 'Este endpoint debería funcionar correctamente' },
            timestamp: { type: 'string', example: '2024-01-01T00:00:00.000Z' },
            url: { type: 'string', example: 'https://p01--backend--5k9g86lnqs8x.code.run/api/status' }
          }
        }
      }
    }
  })
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
