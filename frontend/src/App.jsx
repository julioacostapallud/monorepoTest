import { useState, useEffect } from 'react';
import './App.css';
import { statusService } from './services/status/statusService';

function App() {
  const [backendStatus, setBackendStatus] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchStatus = async () => {
      try {
        setLoading(true);
        const result = await statusService.getStatus();
        
        if (result.success) {
          setBackendStatus(result.data);
          setError(null);
        } else {
          setError(result.error);
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchStatus();
  }, []);

  return (
    <div className="app">
      {/* Header */}
      <header className="header">
        <div className="header-content">
          <div className="project-info">
            <h1>🛠️ Trabajo Práctico Integrador</h1>
            <h2>Desarrollo de Software</h2>
            <p>Universidad Tecnológica Nacional - Facultad Regional Resistencia</p>
            <div className="group-info">
              <span className="group-badge">Grupo 1</span>
            </div>
          </div>
          
          <div className="tech-stack">
            <h3>Stack Tecnológico</h3>
            <div className="tech-icons">
              <div className="tech-item">
                <span className="tech-icon">⚛️</span>
                <span>React</span>
              </div>
              <div className="tech-item">
                <span className="tech-icon">🪺</span>
                <span>NestJS</span>
              </div>
              <div className="tech-item">
                <span className="tech-icon">🐘</span>
                <span>PostgreSQL</span>
              </div>
              <div className="tech-item">
                <span className="tech-icon">🐳</span>
                <span>Docker</span>
              </div>
              <div className="tech-item">
                <span className="tech-icon">☁️</span>
                <span>Northflank</span>
              </div>
              <div className="tech-item">
                <span className="tech-icon">🔗</span>
                <span>Prisma</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="main-content">
        <div className="status-section">
          <h2>🔗 Estado de Conexión del Sistema</h2>
          
          {loading && (
            <div className="status-card loading">
              <div className="loading-spinner"></div>
              <p>Conectando con el backend...</p>
            </div>
          )}
          
          {error && (
            <div className="status-card error">
              <div className="status-icon">❌</div>
              <h3>Error de Conexión</h3>
              <p>No se pudo conectar con el backend</p>
              <p className="error-details">Error: {error}</p>
            </div>
          )}
          
          {backendStatus && (
            <div className="status-card success">
              <div className="status-icon">✅</div>
              <h3>Sistema Conectado</h3>
              
              <div className="status-grid">
                <div className="status-item">
                  <span className="label">Estado:</span>
                  <span className="value success">{backendStatus.status}</span>
                </div>
                
                <div className="status-item">
                  <span className="label">Base de Datos:</span>
                  <span className="value success">{backendStatus.services.database}</span>
                </div>
                
                <div className="status-item">
                  <span className="label">Entorno:</span>
                  <span className="value">{backendStatus.environment}</span>
                </div>
                
                <div className="status-item">
                  <span className="label">Versión:</span>
                  <span className="value">{backendStatus.version}</span>
                </div>
                
                <div className="status-item">
                  <span className="label">Tiempo de Actividad:</span>
                  <span className="value">{Math.floor(backendStatus.uptime)}s</span>
                </div>
                
                <div className="status-item">
                  <span className="label">Última Actualización:</span>
                  <span className="value">{new Date(backendStatus.timestamp).toLocaleString('es-ES')}</span>
                </div>
              </div>
              
              <div className="endpoints-info">
                <h4>📡 Endpoints Disponibles</h4>
                <div className="endpoints-list">
                  <div className="endpoint-item">
                    <span className="endpoint-method">GET</span>
                    <span className="endpoint-path">{backendStatus.endpoints.health}</span>
                    <span className="endpoint-desc">Health Check</span>
                  </div>
                  <div className="endpoint-item">
                    <span className="endpoint-method">GET</span>
                    <span className="endpoint-path">{backendStatus.endpoints.status}</span>
                    <span className="endpoint-desc">Estado del Sistema</span>
                  </div>
                  <div className="endpoint-item">
                    <span className="endpoint-method">GET</span>
                    <span className="endpoint-path">{backendStatus.endpoints.root}</span>
                    <span className="endpoint-desc">Endpoint Raíz</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="footer">
        <p>© 2025 - UTN FRRe - Grupo 1 - TPI Desarrollo de Software</p>
      </footer>
    </div>
  );
}

export default App;