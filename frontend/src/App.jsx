import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { statusService } from './services/status/statusService'

function App() {
  const [count, setCount] = useState(0)
  const [backendStatus, setBackendStatus] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchStatus = async () => {
      try {
        setLoading(true)
        const result = await statusService.getStatus()
        
        if (result.success) {
          setBackendStatus(result.data)
          setError(null)
        } else {
          setError(result.error)
        }
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchStatus()
  }, [])

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>🚀 Monorepo Test - Frontend + Backend</h1>
      
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>

      {/* Backend Status Section */}
      <div className="card">
        <h2>🔗 Backend Status</h2>
        {loading && <p>⏳ Cargando status del backend...</p>}
        {error && <p>❌ Error: {error}</p>}
        {backendStatus && (
          <div>
            <p><strong>Status:</strong> {backendStatus.status}</p>
            <p><strong>Message:</strong> {backendStatus.message}</p>
            <p><strong>Environment:</strong> {backendStatus.environment}</p>
            <p><strong>Version:</strong> {backendStatus.version}</p>
            <p><strong>Uptime:</strong> {Math.round(backendStatus.uptime)}s</p>
            <p><strong>Date:</strong> {backendStatus.date}</p>
            <p><strong>Time:</strong> {backendStatus.time}</p>
            <p><strong>Timezone:</strong> {backendStatus.timezone}</p>
            
            <h3>🔧 Services:</h3>
            <ul>
              <li><strong>Database:</strong> {backendStatus.services.database}</li>
              <li><strong>Cache:</strong> {backendStatus.services.cache}</li>
              <li><strong>Queue:</strong> {backendStatus.services.queue}</li>
            </ul>

            <h3>🌐 Endpoints:</h3>
            <ul>
              <li><strong>Health:</strong> {backendStatus.endpoints.health}</li>
              <li><strong>Status:</strong> {backendStatus.endpoints.status}</li>
              <li><strong>Root:</strong> {backendStatus.endpoints.root}</li>
            </ul>

            <h3>🧪 Test Info:</h3>
            <p><strong>Message:</strong> {backendStatus.test.message}</p>
            <p><strong>Description:</strong> {backendStatus.test.description}</p>
            <p><strong>URL:</strong> <a href={backendStatus.test.url} target="_blank" rel="noopener noreferrer">{backendStatus.test.url}</a></p>
          </div>
        )}
      </div>

      <p className="read-the-docs">
        🎯 Monorepo con Frontend (React Vite) + Backend (Nest.js) funcionando en Northflank
      </p>
    </>
  )
}

export default App