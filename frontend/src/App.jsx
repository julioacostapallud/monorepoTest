import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

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
      <h1>🚀 Monorepo Test - Frontend</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          ✅ <strong>Frontend modificado exitosamente!</strong>
        </p>
        <p>
          🔄 Este cambio debería activar solo el deploy de Netlify
        </p>
        <p>
          🚀 <strong>Build condicional funcionando!</strong> - {new Date().toLocaleTimeString()}
        </p>
        <p>
          📅 Última actualización: {new Date().toLocaleString()}
        </p>
      </div>
      <p className="read-the-docs">
        🎯 Monorepo con deploys condicionales funcionando correctamente
      </p>
    </>
  )
}

export default App
