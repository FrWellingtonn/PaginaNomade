// Arquivo: src/App.js
import './App.css';

import React from 'react';
// 1. Importe os componentes de rota
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// 2. Importe suas páginas
import HomePage from '.pages/HomePage.js';
import CadasterPage from './pages/CadasterPage.js';



function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* CORREÇÃO 1: Remova a barra final '/' se for usar um path simples */}
        {/* Rota 2: Coloque a rota mais específica PRIMEIRO. */}
        <Route path="/cadaster" element={<CadasterPage />} />
        
        {/* Rota 1: Coloque a rota principal (catch-all) DEPOIS. */}
        <Route path="/" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;