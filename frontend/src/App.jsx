import { useState, useEffect } from 'react';
import './App.css';
import { statusService } from './services/status/statusService';
import Header from './components/Header';

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
      <Header />

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