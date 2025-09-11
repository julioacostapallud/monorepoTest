import { useState, useEffect } from 'react';
import './App.css';
import { statusService } from './services/status/statusService';

// Usar rutas públicas para los iconos

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
      {/* Header que ocupa 100% del ancho */}
      <header className="header">
        <div className="header-left">
          <h1>Desarrollo de Software 2025</h1>
          <p>UTN FRRe - Grupo 1</p>
        </div>
        
        <div className="header-right">
          <div className="tech-icon" title="React">
            <img src="/icons/react.png" alt="React" />
          </div>
          
          <div className="tech-icon" title="NestJS">
            <img src="/icons/nest.png" alt="NestJS" />
          </div>
          
          <div className="tech-icon" title="PostgreSQL">
            <img src="/icons/postgre.png" alt="PostgreSQL" />
          </div>
          
          <div className="tech-icon" title="Docker">
            <img src="/icons/docker.png" alt="Docker" />
          </div>
          
          <div className="tech-icon" title="Northflank">
            <img src="/icons/northflank.svg" alt="Northflank" />
          </div>
          
          <div className="tech-icon" title="Prisma">
            <img src="/icons/prisma.png" alt="Prisma" />
          </div>
        </div>
      </header>

      {/* Contenido principal - página en blanco */}
      <main className="main-content">
        <div className="status-indicator">
          {loading && (
            <div className="status loading">
              <div className="status-dot"></div>
              <span>Conectando...</span>
            </div>
          )}
          
          {error && (
            <div className="status error">
              <div className="status-dot"></div>
              <span>Backend desconectado</span>
            </div>
          )}
          
          {backendStatus && (
            <div className="status success">
              <div className="status-dot"></div>
              <span>Backend conectado - DB: {backendStatus.services.database}</span>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

export default App;