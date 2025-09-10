const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Endpoint principal - devuelve fecha y hora
app.get('/api/status', (req, res) => {
  const now = new Date();
  
  res.json({
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
    test: {
      message: 'TEST: Solo Backend debería deployar',
      description: 'Este cambio debería activar solo el deploy de Vercel',
      conditionalDeployment: 'Netlify NO debería hacer build (sin cambios en frontend)',
      timestamp: now.toISOString(),
      debug: 'Forcing Vercel build without ignoreCommand'
    }
  });
});

// Endpoint de salud básico
app.get('/health', (req, res) => {
  res.json({ 
    status: 'healthy',
    timestamp: new Date().toISOString()
  });
});

// Manejo de rutas no encontradas
app.use((req, res) => {
  res.status(404).json({
    error: 'Endpoint no encontrado',
    message: `La ruta ${req.originalUrl} no existe`,
    availableEndpoints: [
      'GET /api/status',
      'GET /health'
    ]
  });
});

// Manejo de errores
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    error: 'Error interno del servidor',
    message: process.env.NODE_ENV === 'development' ? err.message : 'Algo salió mal'
  });
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`🚀 Servidor Express ejecutándose en puerto ${PORT}`);
  console.log(`📡 Endpoint principal: http://localhost:${PORT}/api/status`);
  console.log(`❤️  Health check: http://localhost:${PORT}/health`);
  console.log(`🌍 Entorno: ${process.env.NODE_ENV || 'development'}`);
});

module.exports = app;
