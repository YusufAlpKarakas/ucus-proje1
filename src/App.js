import React from 'react';
import { Routes, Route } from 'react-router-dom';
import UcusListesi from './sayfalar/UcusListesi'; // Uçuş listesi bileşeni
import FilterForm from './sayfalar/FilterForm';

function App() {


  return (
    <div>
      <Routes>
        <Route path="/" element={<UcusListesi />} />
      </Routes>
    </div>
  );
}

export default App;
