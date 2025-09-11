import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app">
      <Header />

      {/* Contenido principal - página en blanco */}
      <main className="main-content">
        <div className="welcome-message">
          <h2>¡Bienvenido al TPI!</h2>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;