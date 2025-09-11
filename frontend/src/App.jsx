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
      {/* Header que ocupa 100% del ancho */}
      <header className="header">
        <div className="header-left">
          <h1>Desarrollo de Software 2025</h1>
          <p>UTN FRRe - Grupo 1</p>
        </div>
        
        <div className="header-right">
          <div className="tech-icon" title="React">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="#61DAFB">
              <circle cx="12" cy="12" r="2"/>
              <path d="M12 1a9 9 0 0 0-9 9c0 1.5.4 2.9 1.1 4.1L12 24l7.9-9.9c.7-1.2 1.1-2.6 1.1-4.1a9 9 0 0 0-9-9z"/>
              <path d="M12 3a7 7 0 0 1 7 7c0 1.1-.3 2.1-.8 3L12 20.5 5.8 13c-.5-.9-.8-1.9-.8-3a7 7 0 0 1 7-7z"/>
            </svg>
          </div>
          
          <div className="tech-icon" title="NestJS">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="#E0234E">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
            </svg>
          </div>
          
          <div className="tech-icon" title="PostgreSQL">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="#336791">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
            </svg>
          </div>
          
          <div className="tech-icon" title="Docker">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="#2496ED">
              <path d="M13.983 11.078h2.119a.186.186 0 00.186-.185V9.006a.185.185 0 00-.186-.185h-2.119v2.257zm0-3.104h2.119a.186.186 0 00.186-.186V5.819a.185.185 0 00-.186-.185h-2.119v2.257zm-2.954 0h2.12a.186.186 0 00.185-.186V5.819a.185.185 0 00-.185-.185h-2.12v2.257zm-2.964 0h2.12a.186.186 0 00.186-.186V5.819a.185.185 0 00-.186-.185H8.065v2.257zm-2.965 0h2.12a.186.186 0 00.186-.186V5.819a.185.185 0 00-.186-.185H5.1v2.257zm-2.964 0h2.12a.186.186 0 00.186-.186V5.819a.185.185 0 00-.186-.185H2.136v2.257zm14.893 0h2.119a.186.186 0 00.186-.186V5.819a.185.185 0 00-.186-.185h-2.119v2.257zm-2.964 3.104h2.12a.186.186 0 00.185-.185V9.006a.185.185 0 00-.185-.185h-2.12v2.257zm-2.965 0h2.12a.186.186 0 00.186-.185V9.006a.185.185 0 00-.186-.185h-2.12v2.257zm-2.964 0h2.12a.186.186 0 00.186-.185V9.006a.185.185 0 00-.186-.185h-2.12v2.257zm-2.965 0h2.12a.186.186 0 00.186-.185V9.006a.185.185 0 00-.186-.185h-2.12v2.257zm-2.964 0h2.12a.186.186 0 00.186-.185V9.006a.185.185 0 00-.186-.185H2.136v2.257zm14.893 0h2.119a.186.186 0 00.186-.185V9.006a.185.185 0 00-.186-.185h-2.119v2.257zm-2.964 3.104h2.12a.186.186 0 00.185-.185v-1.887a.185.185 0 00-.185-.185h-2.12v2.257zm-2.965 0h2.12a.186.186 0 00.186-.185v-1.887a.185.185 0 00-.186-.185h-2.12v2.257zm-2.964 0h2.12a.186.186 0 00.186-.185v-1.887a.185.185 0 00-.186-.185h-2.12v2.257zm-2.965 0h2.12a.186.186 0 00.186-.185v-1.887a.185.185 0 00-.186-.185h-2.12v2.257zm-2.964 0h2.12a.186.186 0 00.186-.185v-1.887a.185.185 0 00-.186-.185H2.136v2.257zm14.893 0h2.119a.186.186 0 00.186-.185v-1.887a.185.185 0 00-.186-.185h-2.119v2.257z"/>
            </svg>
          </div>
          
          <div className="tech-icon" title="Northflank">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="#00D4AA">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            </svg>
          </div>
          
          <div className="tech-icon" title="Prisma">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="#2D3748">
              <path d="M21.807 6.05L13.06.45a1.5 1.5 0 0 0-1.11 0L2.193 6.05A1.5 1.5 0 0 0 1.5 7.5v9a1.5 1.5 0 0 0 .693 1.45l8.747 5.6a1.5 1.5 0 0 0 1.614 0l8.747-5.6A1.5 1.5 0 0 0 22.5 16.5v-9a1.5 1.5 0 0 0-.693-1.45zM12 2.133L19.307 6.5 12 10.867 4.693 6.5 12 2.133zM3.5 8.133L11 12.5v7.367L3.5 15.5v-7.367zm17 7.367L13 19.867V12.5l7.5-4.367v7.367z"/>
            </svg>
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