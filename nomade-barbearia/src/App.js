// Arquivo: src/App.js
import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// ✅ Caminhos corrigidos


import CadasterPage from './pages/CadasterPage.js';
import HomePage from './pages/HomePage.js';



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/cadastrar" element={<CadasterPage />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
